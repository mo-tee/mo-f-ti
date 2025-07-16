import { Button, Text } from "@/components/common";
import Column from "@/components/common/Flex/Column";
import { color } from "@/components/desgin-system";
import { flex } from "@/utils";
import styled from "styled-components";
import QuizListItem from "../QuizListItem/QuizListItem";
import { useState } from "react";
import { useOverlay } from "@toss/use-overlay";
import CorrectPopup from "../CorrectPopup/CorrectPopup";
import ErrorPopup from "../ErrorPopup/ErrorPopup";
import { Answer } from "@/types/quiz/client";
import { useQuizSolveMutation } from "@/services/quiz/mutations";

interface TodayQuizProps {
  id: number;
  quiz?: string;
  answerList?: Answer[];
}

const TodayQuizContent = ({ id, quiz, answerList }: TodayQuizProps) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const overlay = useOverlay();
  const { quizSolveMutate } = useQuizSolveMutation(id ?? 0, selectedIndex);

  const handleSubmitAnswer = () => {
    if (selectedIndex === 0) {
      alert("정답을 선택하고 제출해주세요.");
      return null;
    }

    quizSolveMutate(undefined, {
      onSuccess: (res) => {
        const { correctAnswer } = res.data.data;

        overlay.open(({ isOpen, close }) =>
          selectedIndex === Number(correctAnswer) ? (
            <CorrectPopup isOpen={isOpen} onClose={close} />
          ) : (
            <ErrorPopup isOpen={isOpen} onClose={close} />
          )
        );
      },
      onError: () => {
        alert("서버 에러가 발생했습니다.");
      },
    });
  };

  return (
    <StyledTodayQuizContent>
      <Column gap={20}>
        <Text fontType="Title3" color={color.G900}>
          Q. {quiz}
        </Text>
        <Column gap={12}>
          {answerList?.map((label, idx) => (
            <QuizListItem
              key={label.answerNumber}
              label={label.answer}
              selected={selectedIndex === idx + 1}
              onSelect={() => setSelectedIndex(idx + 1)}
            />
          ))}
        </Column>
      </Column>
      <Button onClick={handleSubmitAnswer}>정답 제출</Button>
    </StyledTodayQuizContent>
  );
};

export default TodayQuizContent;

const StyledTodayQuizContent = styled.div`
  ${flex({ flexDirection: "column", justifyContent: "space-between" })}
  width: 100%;
  height: 100%;
  padding: 24px 0px 40px;
`;
