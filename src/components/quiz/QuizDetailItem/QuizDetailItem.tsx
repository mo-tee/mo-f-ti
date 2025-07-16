import { Text } from "@/components/common";
import Column from "@/components/common/Flex/Column";
import { color } from "@/components/desgin-system";
import { flex } from "@/utils";
import styled from "styled-components";

interface QuizDetailItemProps {
  red?: boolean;
  blue?: boolean;
  onSelect: () => void;
  label: string;
  selected: boolean;
}

const QuizDetailItem = ({
  red,
  blue,
  onSelect,
  label,
  selected,
}: QuizDetailItemProps) => {
  return (
    <Column gap={8} width="100%" alignItems="flex-start">
      <StyledQuizListItem onClick={onSelect} red={red} blue={blue}>
        <CustomRadio
          $checked={selected}
          $color={blue ? color.G50 : red ? color.Secondary : color.G40}
          $blue={blue}
        />

        <Text fontType="Body2" color={color.G900}>
          {label}
        </Text>
      </StyledQuizListItem>
      {blue && (
        <Text fontType="Label3" color="#0D80F2">
          퀴즈 정답
        </Text>
      )}
    </Column>
  );
};

export default QuizDetailItem;

const StyledQuizListItem = styled.div<{
  red?: boolean;
  blue?: boolean;
}>`
  ${flex({
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  })}
  width: 100%;
  padding: 15px;
  background-color: ${color.G0};
  border: 1.5px solid
    ${({ red, blue }) => (blue ? "#0d80f2" : red ? "#ff3b30" : `${color.G50}`)};
  border-radius: 8px;
  gap: 16px;
`;

const CustomRadio = styled.div<{
  $checked: boolean;
  $color: string;
  $blue?: boolean;
}>`
  ${flex({ alignItems: "center", justifyContent: "center" })}
  width: 20px;
  height: 20px;
  border: 2px solid ${({ $color }) => $color};
  border-radius: 50%;

  &::after {
    content: "";
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: ${({ $color }) => $color};
    display: ${({ $checked, $blue }) => ($checked || $blue ? "block" : "none")};
  }
`;
