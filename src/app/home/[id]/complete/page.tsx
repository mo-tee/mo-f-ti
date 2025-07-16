"use client";

import { Navigation, Text } from "@/components/common";
import Row from "@/components/common/Flex/Row";
import { color } from "@/components/desgin-system";
import {
  CompleteFailContent,
  CompleteSuccessContent,
  GoalDetailCompleteContent,
} from "@/components/home";
import { IconBackArrow } from "@/components/icon";
import { useGoalCompleteStepValueStore } from "@/stores/goal/goalCompleteStep";
import { flex } from "@/utils";
import { SwitchCase } from "@toss/react";
import { usePathname, useRouter } from "next/navigation";
import styled from "styled-components";

const GoalDetailComplete = () => {
  const completeStep = useGoalCompleteStepValueStore();
  const router = useRouter();
  const pathname = usePathname();

  const pathParts = pathname.split("/").filter(Boolean);
  const id = pathParts[1];

  const handleBack = () => {
    router.back();
  };

  return (
    <StyledGoalDetailComplete>
      <Row alignItems="center" justifyContent="space-between" width="100%">
        <div onClick={handleBack}>
          <IconBackArrow width={24} height={24} fill={color.G900} />
        </div>
        <Text fontType="Label1" color={color.G900}>
          목표 상세 보기
        </Text>
        <BlankBox />
      </Row>
      <SwitchCase
        value={completeStep}
        caseBy={{
          목표달성: <GoalDetailCompleteContent id={Number(id)} />,
          달성성공: <CompleteSuccessContent id={Number(id)} />,
          달성실패: <CompleteFailContent id={Number(id)} />,
        }}
      />
      <Navigation />
    </StyledGoalDetailComplete>
  );
};

export default GoalDetailComplete;

const StyledGoalDetailComplete = styled.div`
  ${flex({
    flexDirection: "column",
    alignItems: "center",
  })}
  width: 100vw;
  height: 100vh;
  padding: 59px 16px 109px;
  margin: 0 auto;
  background-color: ${color.G20};
  gap: 25px;

  @media (min-width: 601px) {
    width: 375px;
  }
`;

const BlankBox = styled.div`
  width: 24px;
  height: 24px;
  background-color: none;
`;
