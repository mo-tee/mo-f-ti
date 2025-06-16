import Column from "@/components/common/Flex/Column";
import { color } from "@/components/desgin-system";
import { IconBadge01 } from "@/components/icon";
import { flex } from "@/utils";
import styled from "styled-components";

interface TierProps {
  level: number;
}

const Tier = ({ level }: TierProps) => {
  return (
    <StyledTier>
      <IconBadge01 width={64} height={64} />
      <Column gap={4} alignItems="flex-start">
        <LevelText>Lv.{level}</LevelText>
        <TierText>브론즈</TierText>
      </Column>
    </StyledTier>
  );
};

export default Tier;

const StyledTier = styled.div`
  ${flex({ flexDirection: "row", alignItems: "center" })}
  width: 100%;
  gap: 4px;
`;

const LevelText = styled.div`
  font-family: KIMM_Bold;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%;
  letter-spacing: -1px;
  color: ${color.G0};
`;

const TierText = styled.div`
  font-family: KIMM_Bold;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%;
  color: ${color.G0};
`;
