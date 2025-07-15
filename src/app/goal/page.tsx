"use client";

import { Navigation, Text } from "@/components/common";
import Toast from "@/components/common/Toast/Toast";
import { color } from "@/components/desgin-system";
import { GoalCreateContent } from "@/components/goal";
import { flex } from "@/utils";
import { useToast } from "@/utils/useToast";
import styled from "styled-components";

const Goal = () => {
  const { showToast, toastMessage, toastType } = useToast();

  return (
    <StyledGoal>
      <Text fontType="Label1" color={color.G900}>
        소비 목표 생성
      </Text>
      <ScrollContent>
        <GoalCreateContent />
      </ScrollContent>
      <Navigation />
      {showToast && <Toast type={toastType}>{toastMessage}</Toast>}
    </StyledGoal>
  );
};

export default Goal;

const StyledGoal = styled.div`
  ${flex({
    flexDirection: "column",
    alignItems: "center",
  })}
  width: 100vw;
  height: 100vh;
  background-color: ${color.G20};
  margin: 0 auto;
  padding: 70px 16px 109px;
  gap: 14px;

  @media (min-width: 601px) {
    width: 375px;
  }
`;

const ScrollContent = styled.div`
  flex: 1 1 auto;
  width: 100%;
  min-height: 0;
  overflow-y: auto;

  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
