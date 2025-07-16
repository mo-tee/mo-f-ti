import { Text } from "@/components/common";
import Column from "@/components/common/Flex/Column";
import { color } from "@/components/desgin-system";
import { flex } from "@/utils";
import styled from "styled-components";

interface QuizDetailItemProps {
  correct: boolean;
  selected: boolean;
  onSelect: () => void;
  label: string;
}

const QuizDetailItem = ({
  selected,
  onSelect,
  label,
  correct,
}: QuizDetailItemProps) => {
  return (
    <Column gap={8} width="100%" alignItems="flex-start">
      <StyledQuizListItem onClick={onSelect} $checked={selected}>
        <CustomRadio $checked={selected} />
        <Text fontType="Body2" color={color.G900}>
          {label}
        </Text>
      </StyledQuizListItem>
      {correct && (
        <Text fontType="Label3" color="#0D80F2">
          퀴즈 정답
        </Text>
      )}
    </Column>
  );
};

export default QuizDetailItem;

const StyledQuizListItem = styled.div<{ $checked: boolean }>`
  ${flex({
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  })}
  width: 100%;
  padding: 15px;
  background-color: ${color.G0};
  border: 1px solid ${({ $checked }) => ($checked ? "#0d80f2" : `${color.G50}`)};
  border-radius: 8px;
  gap: 16px;
`;

const CustomRadio = styled.div<{ $checked: boolean }>`
  ${flex({ alignItems: "center", justifyContent: "center" })}
  width: 20px;
  height: 20px;
  border: 2px solid ${({ $checked }) => ($checked ? "#0d80f2" : `${color.G50}`)};
  border-radius: 50%;

  &::after {
    content: "";
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #0d80f2;
    display: ${({ $checked }) => ($checked ? "block" : "none")};
  }
`;
