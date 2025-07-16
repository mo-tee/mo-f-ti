import styled from "styled-components";
import { flex } from "@/utils";
import SolveQuizListItem from "./SolveQuizListItem/SolveQuizListItem";
import { useQuizListQuery } from "@/services/quiz/queries";

const SolveQuizContent = () => {
  const { data } = useQuizListQuery();

  return (
    <StyledSolveQuizContent>
      {data?.map((item) => (
        <SolveQuizListItem
          key={item.quiz.id}
          id={item.quiz.id}
          quiz={item.quiz.question}
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
