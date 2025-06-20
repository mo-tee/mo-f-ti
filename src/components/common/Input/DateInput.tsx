import { color } from "@/components/desgin-system";
import Column from "../Flex/Column";
import Text from "../Text/Text";
import styled, { CSSProperties } from "styled-components";
import { InputHTMLAttributes } from "react";
import font from "@/components/desgin-system/font";
import { IconDiary } from "@/components/icon";

interface DateInputProps extends InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string;
  message?: string;
  textAlign?: CSSProperties["textAlign"];
  isError?: boolean;
  onClick?: () => void;
}

const DateInput = ({
  textAlign,
  name,
  value,
  onChange,
  readOnly,
  placeholder,
  onClick,
}: DateInputProps) => {
  return (
    <Column gap={8} width="100%" alignItems="flex-start">
      <Column>
        <Text fontType="Headline1" color={color.G900}>
          기간
        </Text>
        <Text fontType="Body2" color={color.G80}>
          최소 한 달부터 기간 설정이 가능합니다
        </Text>
      </Column>
      <InputWrapper onClick={onClick}>
        <StyledDateInput
          placeholder={placeholder}
          onChange={onChange}
          name={name}
          value={value}
          readOnly={readOnly}
          style={{ textAlign }}
        />
        <IconDiary width={20} height={20} />
      </InputWrapper>
    </Column>
  );
};

export default DateInput;

const StyledDateInput = styled.input`
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

const InputWrapper = styled.div`
  position: relative;
  width: 100%;

  svg {
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    pointer-events: none;
  }
`;
