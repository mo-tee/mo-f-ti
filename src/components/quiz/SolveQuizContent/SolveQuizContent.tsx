import styled from "styled-components";
import { flex } from "@/utils";
import SolveQuizListItem from "./SolveQuizListItem/SolveQuizListItem";
import { MOCK_SOLVED_QUIZ_LIST } from "@/constants/quiz/mock";

const SolveQuizContent = () => {
  return (
    <StyledSolveQuizContent>
      {MOCK_SOLVED_QUIZ_LIST.map((item) => (
        <SolveQuizListItem
          key={item.id}
          id={item.id}
          date={item.date}
          quiz={item.quiz}
        />
      ))}
    </StyledSolveQuizContent>
  );
};

export default SolveQuizContent;

const StyledSolveQuizContent = styled.div`
  ${flex({ flexDirection: "column", alignItems: "center" })}
  width: 100%;
  height: auto;
  gap: 12px;
  box-sizing: border-box;
  padding: 24px 0px 40px;
`;
