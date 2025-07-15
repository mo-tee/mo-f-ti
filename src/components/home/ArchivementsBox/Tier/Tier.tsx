import Column from "@/components/common/Flex/Column";
import { color } from "@/components/desgin-system";
import {
  IconBadge01,
  IconBadge09,
  IconBadge07,
  IconBadge06,
  IconBadge05,
  IconBadge04,
  IconBadge03,
  IconBadge08,
  IconBadge02,
} from "@/components/icon";
import { flex } from "@/utils";
import styled from "styled-components";

interface TierProps {
  level: number;
}

const tierList = [
  { name: "브론즈", icon: IconBadge01 },
  { name: "실버", icon: IconBadge02 },
  { name: "골드", icon: IconBadge03 },
  { name: "플래티넘", icon: IconBadge04 },
  { name: "챌린저", icon: IconBadge05 },
  { name: "마스터", icon: IconBadge06 },
  { name: "다이아", icon: IconBadge07 },
  { name: "루비", icon: IconBadge08 },
  { name: "정복자", icon: IconBadge09 },
];

const Tier = ({ level }: TierProps) => {
  const { name, icon: IconComponent } = tierList[level - 1] || tierList[0];

  return (
    <StyledTier>
      <IconComponent width={64} height={64} />
      <Column gap={4} alignItems="flex-start">
        <LevelText>Lv.{level}</LevelText>
        <TierText>{name}</TierText>
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
