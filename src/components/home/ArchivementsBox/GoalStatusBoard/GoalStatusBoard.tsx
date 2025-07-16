import Column from "@/components/common/Flex/Column";
import { color } from "@/components/desgin-system";
import { flex } from "@/utils";
import styled from "styled-components";

interface GoalStatusBoardProps {
  all: number;
  ongoing: number;
  success: number;
}

const GoalStatusBoard = ({ all, ongoing, success }: GoalStatusBoardProps) => {
  return (
    <StyledGoalStatusBoard>
      <Column gap={8} alignItems="center">
        <TitleText>생성한 목표</TitleText>
        <CountText>{all}</CountText>
      </Column>
      <Column gap={8} alignItems="center">
        <TitleText>진행 중인 목표</TitleText>
        <CountText>{ongoing}</CountText>
      </Column>
      <Column gap={8} alignItems="center">
        <TitleText>성공한 목표</TitleText>
        <CountText>{success}</CountText>
      </Column>
    </StyledGoalStatusBoard>
  );
};

export default GoalStatusBoard;

const StyledGoalStatusBoard = styled.div`
  ${flex({
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  })}
  width: 100%;
  padding: 0 23.5px;
`;

const TitleText = styled.div`
  font-family: KIMM_Light;
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
  line-height: 100%;
  letter-spacing: -1px;
  color: ${color.G0};
`;

const CountText = styled.div`
  text-align: center;
  font-family: KIMM_Bold;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%;
  letter-spacing: -1px;
  color: ${color.G0};
`;
