"use client";

import { Navigation, Text } from "@/components/common";
import Column from "@/components/common/Flex/Column";
import { color } from "@/components/desgin-system";
import { IconBackArrow } from "@/components/icon";
import { QuizListItem } from "@/components/quiz";
import Header from "@/components/quiz/Header/Header";
import { flex } from "@/utils";
import { useRouter } from "next/navigation";
import styled from "styled-components";

const QUIZ_DETAIL = {
  date: "5월 27일",
  quiz: "다음 중 돈을 저축하기 위한 좋은 전략이 아닌 것은?",
  answerList: [
    "모든 재산을 한 계좌에 몰아 저축하는 것",
    "자동 저축 이제 활성화",
    "미리 예산을 짜서 저축하는 것",
    "여러 분야의 주식에 투자하는 것",
  ],
  answer: 1,
};

const QuizDetail = () => {
  const router = useRouter();

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
          <Column>
            <Text fontType="Title3" color={color.G900}>
              {QUIZ_DETAIL.date}
            </Text>
            <Text fontType="Body1" color={color.G300}>
              {QUIZ_DETAIL.quiz}
            </Text>
          </Column>
          {QUIZ_DETAIL.answerList.map((label, idx) => (
            <QuizListItem
              key={label}
              label={label}
              selected={QUIZ_DETAIL.answer === idx + 1}
              onSelect={() => {}}
            />
          ))}
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
  padding: 32px 16px 75px;
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
