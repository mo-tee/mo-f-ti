"use client";

import { Navigation, Text } from "@/components/common";
import Column from "@/components/common/Flex/Column";
import Row from "@/components/common/Flex/Row";
import { color } from "@/components/desgin-system";
import { GoalItem } from "@/components/home";
import { IconBackArrow } from "@/components/icon";
import { DUMMY_SUCCESS_GOAL } from "@/constants/home/mock";
import { flex } from "@/utils";
import { useRouter } from "next/navigation";
import styled from "styled-components";

const Success = () => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <StyledSuccess>
      <Row alignItems="center" justifyContent="space-between" width="100%">
        <div onClick={handleBack}>
          <IconBackArrow width={24} height={24} />
        </div>
        <Text fontType="Label1" color={color.G900}>
          성공한 목표
        </Text>
        <BlankBox />
      </Row>
      <ScrollList>
        <Column gap={14}>
          {DUMMY_SUCCESS_GOAL.map((goal) => (
            <GoalItem
              key={goal.id}
              id={goal.id}
              name={goal.name}
              date={goal.date}
            />
          ))}
        </Column>
      </ScrollList>
      <Navigation />
    </StyledSuccess>
  );
};

export default Success;

const StyledSuccess = styled.div`
  ${flex({
    flexDirection: "column",
    alignItems: "center",
  })}
  width: 100vw;
  height: 100vh;
  padding: 59px 16px 109px;
  margin: 0 auto;
  background-color: ${color.G20};
  gap: 49px;

  @media (min-width: 601px) {
    width: 375px;
  }
`;

const BlankBox = styled.div`
  width: 24px;
  height: 24px;
  background-color: none;
`;

const ScrollList = styled.div`
  flex: 1 1 auto;
  min-height: 0;
  width: 100%;
  overflow-y: auto;
  gap: 14px;
  padding-bottom: 10px;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;
