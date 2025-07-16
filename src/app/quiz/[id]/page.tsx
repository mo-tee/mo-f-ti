"use client";

import { Navigation, Text } from "@/components/common";
import Column from "@/components/common/Flex/Column";
import { color } from "@/components/desgin-system";
import font from "@/components/desgin-system/font";
import { IconBackArrow } from "@/components/icon";
import Header from "@/components/quiz/Header/Header";
import QuizDetailItem from "@/components/quiz/QuizDetailItem/QuizDetailItem";
import { useQuizListQuery } from "@/services/quiz/queries";
import { flex } from "@/utils";
import { useParams, useRouter } from "next/navigation";
import styled from "styled-components";

const QuizDetail = () => {
  const router = useRouter();
  const path = useParams();
  const currentId = Number(path.id);

  const { data } = useQuizListQuery();
  const quizItem = data?.find((item) => item.quiz.id === currentId);

  const handleMoveBack = () => {
    router.back();
  };

  return (
    <StyledQuizDetail>
      <Column width="100%" gap={14}>
        <Text fontType="Label1" color={color.G900} textAlign="center">
          소비 퀴즈
        </Text>
        <Header />
      </Column>
      <Column gap={16} alignItems="flex-start" width="100%">
        <IconWrapper onClick={handleMoveBack}>
          <IconBackArrow width={24} height={24} fill={color.G80} />
        </IconWrapper>
        <Column gap={20} alignItems="flex-start" width="100%">
          <StyledText>{quizItem?.quiz.question}</StyledText>
          {quizItem?.quiz.answers.map((item, idx) => {
            const isSelected = quizItem.userAnswer === idx + 1;
            const isCorrect = quizItem.correctAnswer === idx + 1;

            const showRed =
              quizItem.userAnswer !== quizItem.correctAnswer && isSelected;
            const showBlue =
              quizItem.userAnswer !== quizItem.correctAnswer && isCorrect;
            const correctMatched =
              quizItem.userAnswer === quizItem.correctAnswer && isSelected;

            return (
              <QuizDetailItem
                key={idx}
                label={item.answer}
                selected={isSelected}
                red={showRed}
                blue={showBlue || correctMatched}
                onSelect={() => {}}
              />
            );
          })}
        </Column>
      </Column>
      <Navigation />
    </StyledQuizDetail>
  );
};

export default QuizDetail;

const StyledQuizDetail = styled.div`
  ${flex({ flexDirection: "column", alignItems: "center" })}
  width: 100vw;
  height: 100vh;
  background-color: ${color.G10};
  padding: 70px 16px 109px;
  margin: 0 auto;
  gap: 12px;

  @media (min-width: 601px) {
    width: 375px;
  }
`;

const IconWrapper = styled.div`
  width: 24px;
  height: 24px;
`;

const StyledText = styled.div`
  white-space: pre-line;
  ${font.Title3}
  color: ${color.G900};
`;
