"use client";

import { Navigation, Text } from "@/components/common";
import { color } from "@/components/desgin-system";
import { flex } from "@/utils";
import styled from "styled-components";

const Quiz = () => {
  return (
    <StyledQuiz>
      <Text fontType="Label1" color={color.G900}>
        소비 퀴즈
      </Text>
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
  background-color: ${color.G10};
  margin: 0 auto;
  padding: 70px 16px 109px;
  gap: 14px;

  @media (min-width: 601px) {
    width: 375px;
  }
`;
