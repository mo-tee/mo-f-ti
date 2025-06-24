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

interface TodayQuizProps {
  date: string;
  quiz: string;
  answerList: string[];
  answer: number;
}

const TodayQuizContent = ({
  date,
  quiz,
  answerList,
  answer,
}: TodayQuizProps) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const overlay = useOverlay();

  const handleOpenAnswer = () => {
    if (selectedIndex === null) {
      alert("정답을 선택하고 제출해주세요.");
      return null;
    }

    overlay.open(({ isOpen, close }) =>
      selectedIndex === answer ? (
        <CorrectPopup isOpen={isOpen} onClose={close} />
      ) : (
        <ErrorPopup isOpen={isOpen} onClose={close} />
      )
    );
  };

  return (
    <StyledTodayQuizContent>
      <Column gap={20}>
        <Column alignItems="flex-start">
          <Text fontType="Title3" color={color.G900}>
            {date}
          </Text>
          <Text fontType="Body1" color={color.G300}>
            {quiz}
          </Text>
        </Column>
        <Column gap={12}>
          {answerList.map((label, idx) => (
            <QuizListItem
              key={label}
              label={label}
              selected={selectedIndex === idx + 1}
              onSelect={() => setSelectedIndex(idx + 1)}
            />
          ))}
        </Column>
      </Column>
      <Button onClick={handleOpenAnswer}>정답 제출</Button>
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
