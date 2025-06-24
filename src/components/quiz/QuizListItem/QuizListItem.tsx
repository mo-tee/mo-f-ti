import { Text } from "@/components/common";
import { color } from "@/components/desgin-system";
import { flex } from "@/utils";
import styled from "styled-components";

interface QuizListItemProps {
  selected: boolean;
  onSelect: () => void;
  label: string;
}

const QuizListItem = ({ selected, onSelect, label }: QuizListItemProps) => {
  return (
    <StyledQuizListItem onClick={onSelect}>
      <CustomRadio $checked={selected} />
      <Text fontType="Body2" color={color.G900}>
        {label}
      </Text>
    </StyledQuizListItem>
  );
};

export default QuizListItem;

const StyledQuizListItem = styled.div`
  ${flex({
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  })}
  width: 100%;
  padding: 15px;
  background-color: ${color.G0};
  border: 1px solid ${color.G50};
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
