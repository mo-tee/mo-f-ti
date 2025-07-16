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
import { useQuizQuery } from "@/services/quiz/queries";
import { AxiosError } from "axios";

const Quiz = () => {
  const quizStep = useQuizStepValueStore();
  const { data, error } = useQuizQuery();
  const isSolved = error && (error as AxiosError).response?.status === 409;

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
          오늘의문제: isSolved ? (
            <SolvedQuiz />
          ) : (
            <TodayQuizContent
              id={data?.id ?? 0}
              quiz={data?.question}
              answerList={data?.answers}
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
  padding: 70px 16px 109px;
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
