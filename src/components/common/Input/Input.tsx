import { color } from "@/components/desgin-system";
import Column from "../Flex/Column";
import Text from "../Text/Text";
import styled, { CSSProperties } from "styled-components";
import { InputHTMLAttributes } from "react";
import font from "@/components/desgin-system/font";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  errorMessage?: string;
  message?: string;
  textAlign?: CSSProperties["textAlign"];
  isError?: boolean;
}

const Input = ({
  label,
  textAlign,
  type = "text",
  name,
  value,
  onChange,
  readOnly,
  placeholder,
}: InputProps) => {
  return (
    <Column gap={8} width="100%" alignItems="flex-start">
      {label && (
        <Text fontType="Headline1" color={color.G900}>
          {label}
        </Text>
      )}
      <StyledInput
        placeholder={placeholder}
        onChange={onChange}
        type={type}
        name={name}
        value={value}
        readOnly={readOnly}
        style={{ textAlign }}
      />
    </Column>
  );
};

export default Input;

const StyledInput = styled.input`
  width: 100%;
  height: 46px;
  background-color: ${color.G0};
  border-radius: 8px;
  padding: 12px 16px;

  ${font.Body2}
  color: ${color.G900};

  ::placeholder {
    ${font.Body2}
    color: ${color.G60};
  }
`;
