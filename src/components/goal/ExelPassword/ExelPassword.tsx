import { useRef } from "react";
import { Text } from "@/components/common";
import Column from "@/components/common/Flex/Column";
import { color } from "@/components/desgin-system";
import font from "@/components/desgin-system/font";
import { flex } from "@/utils";
import styled from "styled-components";
import Row from "@/components/common/Flex/Row";
import { useGoalStore } from "@/stores/goal/goal";

const ExelPassword = () => {
  const [goal, setGoal] = useGoalStore();
  const inputsRef = useRef<Array<HTMLInputElement | null>>([]);

  const handleChange = (value: string, index: number) => {
    if (!/^\d?$/.test(value)) return;

    const newPassword = [...goal.password];
    newPassword[index] = value;
    setGoal((prevGoal) => ({
      ...prevGoal,
      password: newPassword,
    }));

    if (value) {
      if (index < 5) {
        inputsRef.current[index + 1]?.focus();
      } else {
        inputsRef.current[index]?.blur();
      }
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && !goal.password[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  return (
    <StyledExelPassword>
      <Column>
        <Text fontType="Headline1" color={color.G900}>
          엑셀 비밀번호(6자리)
        </Text>
        <Text fontType="Body2" color={color.G80}>
          엑셀 비밀번호는 생년월일 6자리입니다.
        </Text>
      </Column>
      <Row width="100%" justifyContent="space-between">
        {goal.password.map((val, i) => (
          <PasswordBox
            key={i}
            maxLength={1}
            ref={(el) => {
              inputsRef.current[i] = el;
            }}
            type="tel"
            value={val}
            onChange={(e) => handleChange(e.target.value, i)}
            onKeyDown={(e) => handleKeyDown(e, i)}
          />
        ))}
      </Row>
    </StyledExelPassword>
  );
};

export default ExelPassword;

const StyledExelPassword = styled.div`
  ${flex({ flexDirection: "column" })}
  width: 100%;
  gap: 10px;
`;

const PasswordBox = styled.input`
  width: 48px;
  height: 56px;
  padding: 8px 12px;
  border-radius: 4px;
  border-bottom: 1px solid ${color.PrimaryTender};
  ${font.Title1}
  color: ${color.G900};
  text-align: center;

  &::placeholder {
    color: ${color.G60};
  }
`;
