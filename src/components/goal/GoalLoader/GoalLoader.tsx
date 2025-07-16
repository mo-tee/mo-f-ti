import { Text } from "@/components/common";
import { Spinner1 } from "@/components/common/Spinner/Spinner";
import { color } from "@/components/desgin-system";
import styled from "styled-components";

interface GoalLoaderProps {
  isOpen: boolean;
}

const GoalLoader = ({ isOpen }: GoalLoaderProps) => {
  return (
    <StyledGoalLoader $isOpen={isOpen}>
      <Spinner1 />
      <Text textAlign="center" color={color.G900} fontType="Title3">
        목표 생성을
        <br />
        처리 중입니다
      </Text>
    </StyledGoalLoader>
  );
};

export default GoalLoader;

const StyledGoalLoader = styled.div<{ $isOpen: boolean }>`
  display: ${(props) => (props.$isOpen ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: fixed;
  top: 102px;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: calc(100vh - 102px - 109px);
  gap: 32px;
  background-color: ${color.G20};
  z-index: 3;
  left: 50%;
  transform: translateX(-50%);

  @media (min-width: 601px) {
    width: 375px;
  }
`;
