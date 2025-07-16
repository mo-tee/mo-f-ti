import { color } from "@/components/desgin-system";
import { flex, getLevelByPercent } from "@/utils";
import styled from "styled-components";
import Tier from "./Tier/Tier";
import ProgressBar from "./ProgressBar/ProgressBar";
import Column from "@/components/common/Flex/Column";
import GoalStatusBoard from "./GoalStatusBoard/GoalStatusBoard";

interface ArchivementsBoxProps {
  all: number;
  ongoing: number;
  success: number;
}

const ArchivementsBox = ({ all, ongoing, success }: ArchivementsBoxProps) => {
  const percent = all === 0 ? 0 : Math.round((success / all) * 100);
  const level = getLevelByPercent(all, success);

  return (
    <StyledArchivementsBox>
      <Column gap={-4} width="100%" alignItems="center">
        <Tier level={level} />
        <ProgressBar percent={percent} />
      </Column>
      <GoalStatusBoard all={all} ongoing={ongoing} success={success} />
    </StyledArchivementsBox>
  );
};

export default ArchivementsBox;

const StyledArchivementsBox = styled.div`
  ${flex({
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  })}
  width: 100%;
  border-radius: 8px;
  background-color: ${color.Primary};
  padding: 12px 11px 20px 11px;
  gap: 20px;
`;
