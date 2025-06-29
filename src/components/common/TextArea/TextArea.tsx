import styled from "styled-components";
import Column from "../Flex/Column";
import Text from "../Text/Text";
import font from "@/components/desgin-system/font";
import { color } from "@/components/desgin-system";
import { TextareaHTMLAttributes } from "react";

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  placeholder: string;
}

const TextArea = ({
  label,
  name,
  value,
  onChange,
  placeholder,
}: TextAreaProps) => {
  const textValue = value as string;

  return (
    <Column gap={8}>
      {label && (
        <Text fontType="Headline1" color={color.G900}>
          내 소비 습관 문제점
        </Text>
      )}
      <StyledTextArea
        value={textValue}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
      />
    </Column>
  );
};

export default TextArea;

const StyledTextArea = styled.textarea`
  width: 100%;
  min-height: 144px;
  padding: 14px 16px;
  border-radius: 8px;
  resize: none;
  background-color: ${color.G0};

  ${font.Body2};
  color: ${color.G900};

  ::placeholder {
    ${font.Body2}
    color: ${color.G60};
  }

  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
