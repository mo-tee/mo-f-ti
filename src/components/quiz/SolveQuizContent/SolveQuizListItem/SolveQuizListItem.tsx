import { Text } from "@/components/common";
import { color } from "@/components/desgin-system";
import font from "@/components/desgin-system/font";
import { ROUTES } from "@/constants/common/constant";
import { flex } from "@/utils";
import { useRouter } from "next/navigation";
import styled from "styled-components";

interface SolveQuizListItemProps {
  date: string;
  quiz: string;
  id: number;
}

const SolveQuizListItem = ({ date, quiz, id }: SolveQuizListItemProps) => {
  const router = useRouter();

  const handleMoveSolveQuizDetail = () => {
    router.push(`${ROUTES.QUIZ}/${id}`);
  };

  return (
    <StyledSolveQuizListItem onClick={handleMoveSolveQuizDetail}>
      <Text fontType="Title4" color={color.G900}>
        {date}
      </Text>
      <StyledQuiz>{quiz}</StyledQuiz>
    </StyledSolveQuizListItem>
  );
};

export default SolveQuizListItem;

const StyledSolveQuizListItem = styled.div`
  ${flex({ flexDirection: "column", alignItems: "flex-start" })}
  width: 100%;
  height: 80px;
  background-color: ${color.G0};
  padding: 16px 14px;
  border-radius: 8px;
`;

const StyledQuiz = styled.div`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  align-self: stretch;
  ${font.Body1}
  color: ${color.G100};
  overflow: hidden;
  text-overflow: ellipsis;
`;
