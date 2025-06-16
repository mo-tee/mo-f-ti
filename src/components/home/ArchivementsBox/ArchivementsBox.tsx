import { color } from "@/components/desgin-system";
import { flex } from "@/utils";
import styled from "styled-components";
import Tier from "./Tier/Tier";
import ProgressBar from "./ProgressBar/ProgressBar";
import Column from "@/components/common/Flex/Column";
import GoalStatusBoard from "./GoalStatusBoard/GoalStatusBoard";

const ArchivementsBox = () => {
  return (
    <StyledArchivementsBox>
      <Column gap={-4} width="100%" alignItems="center">
        <Tier level={1} />
        <ProgressBar percent={62} />
      </Column>
      <GoalStatusBoard />
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
