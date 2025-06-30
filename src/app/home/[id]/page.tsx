"use client";

import { Navigation, Text } from "@/components/common";
import Row from "@/components/common/Flex/Row";
import { color } from "@/components/desgin-system";
import { GoalDetailContent } from "@/components/home";
import { IconBackArrow } from "@/components/icon";
import { flex } from "@/utils";
import { useRouter } from "next/navigation";
import styled from "styled-components";

interface GoalDetailProps {
  params: { id: number };
}

const GoalDetail = ({ params: { id } }: GoalDetailProps) => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <StyledProgress>
      <Row alignItems="center" justifyContent="space-between" width="100%">
        <div onClick={handleBack}>
          <IconBackArrow width={24} height={24} fill={color.G900} />
        </div>
        <Text fontType="Label1" color={color.G900}>
          목표 상세 보기
        </Text>
        <BlankBox />
      </Row>
      <ScrollList>
        <GoalDetailContent id={id} />
      </ScrollList>
      <Navigation />
    </StyledProgress>
  );
};

export default GoalDetail;

const StyledProgress = styled.div`
  ${flex({
    flexDirection: "column",
    alignItems: "center",
  })}
  width: 100vw;
  height: 100vh;
  padding: 21px 16px 75px;
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

const ScrollList = styled.div`
  flex: 1 1 auto;
  min-height: 0;
  width: 100%;
  overflow-y: auto;
  gap: 14px;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;
