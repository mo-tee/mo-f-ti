import { color } from "@/components/desgin-system";
import font from "@/components/desgin-system/font";
import { ROUTES } from "@/constants/common/constant";
import { flex } from "@/utils";
import { useRouter } from "next/navigation";
import styled from "styled-components";

interface SolveQuizListItemProps {
  quiz: string;
  id: number;
}

const SolveQuizListItem = ({ quiz, id }: SolveQuizListItemProps) => {
  const router = useRouter();

  const handleMoveSolveQuizDetail = () => {
    router.push(`${ROUTES.QUIZ}/${id}`);
  };

  return (
    <StyledSolveQuizListItem onClick={handleMoveSolveQuizDetail}>
      <StyledQuiz>Q. {quiz}</StyledQuiz>
    </StyledSolveQuizListItem>
  );
};

export default SolveQuizListItem;

const StyledSolveQuizListItem = styled.div`
  ${flex({ flexDirection: "column", alignItems: "flex-start" })}
  width: 100%;
  background-color: ${color.G0};
  padding: 18px 14px;
  border-radius: 8px;
`;

const StyledQuiz = styled.div`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  align-self: stretch;
  ${font.Headline1}
  color: ${color.G600};
  overflow: hidden;
  text-overflow: ellipsis;
`;
