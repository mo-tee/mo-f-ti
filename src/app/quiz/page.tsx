"use client";

import { Navigation, Text } from "@/components/common";
import Column from "@/components/common/Flex/Column";
import { color } from "@/components/desgin-system";
import { useQuizStepValueStore } from "@/stores/quiz/quizStep";
import { flex } from "@/utils";
import styled from "styled-components";
import { SwitchCase } from "@toss/react";
import { SolveQuizContent, TodayQuizContent } from "@/components/quiz";
import Header from "@/components/quiz/Header/Header";
import SolvedQuiz from "@/components/quiz/SolvedQuiz/SolvedQuiz";

const TODAY_QUIZ = {
  date: "5월 27일",
  quiz: "다음 중 돈을 저축하기 위한 좋은 전략이 아닌 것은?",
  answerList: [
    "모든 재산을 한 계좌에 몰아 저축하는 것",
    "자동 저축 이제 활성화",
    "미리 예산을 짜서 저축하는 것",
    "여러 분야의 주식에 투자하는 것",
  ],
  answer: 1,
  isSolved: false,
};

const Quiz = () => {
  const quizStep = useQuizStepValueStore();

  return (
    <StyledQuiz>
      <Column width="100%" gap={14}>
        <Text fontType="Label1" color={color.G900} textAlign="center">
          소비 퀴즈
        </Text>
        <Header />
      </Column>
      <SwitchCase
        value={quizStep}
        caseBy={{
          오늘의문제: TODAY_QUIZ.isSolved ? (
            <SolvedQuiz />
          ) : (
            <TodayQuizContent
              date={TODAY_QUIZ.date}
              quiz={TODAY_QUIZ.quiz}
              answerList={TODAY_QUIZ.answerList}
              answer={TODAY_QUIZ.answer}
            />
          ),
          해결한문제: (
            <ScrollContent>
              <SolveQuizContent />
            </ScrollContent>
          ),
        }}
      />
      <Navigation />
    </StyledQuiz>
  );
};

export default Quiz;

const StyledQuiz = styled.div`
  ${flex({
    flexDirection: "column",
    alignItems: "center",
  })}
  width: 100vw;
  height: 100vh;
  padding: 32px 16px 75px;
  margin: 0 auto;
  background-color: ${color.G10};

  @media (min-width: 601px) {
    width: 375px;
  }
`;

const ScrollContent = styled.div`
  flex: 1 1 auto;
  width: 100%;
  height: 100%;
  min-height: 0;
  overflow-y: auto;

  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
