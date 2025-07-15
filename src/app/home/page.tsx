"use client";

import { Navigation } from "@/components/common";
import Column from "@/components/common/Flex/Column";
import Toast from "@/components/common/Toast/Toast";
import color from "@/components/desgin-system/color";
import {
  ArchivementsBox,
  Profile,
  ProgressList,
  SuccessList,
} from "@/components/home";
import { useGoalQuery } from "@/services/goal/queries";
import { flex } from "@/utils";
import { useToast } from "@/utils/useToast";
import styled from "styled-components";

const Home = () => {
  const { showToast, toastMessage, toastType } = useToast();
  const { data: AllGoal } = useGoalQuery(null);
  const { data: OngoinGoal } = useGoalQuery("ONGOING");
  const { data: SuccessGoal } = useGoalQuery("SUCCESS");

  return (
    <StyledHome>
      <Column width="100%" gap={32} alignItems="flex-start">
        <Profile />
        <ArchivementsBox
          all={AllGoal?.length ?? 0}
          ongoing={OngoinGoal?.length ?? 0}
          success={SuccessGoal?.length ?? 0}
        />
      </Column>
      <ProgressList processList={OngoinGoal} />
      <Divider />
      <SuccessList successList={SuccessGoal} />
      <Navigation />
      {showToast && <Toast type={toastType}>{toastMessage}</Toast>}
    </StyledHome>
  );
};

export default Home;

const StyledHome = styled.div`
  ${flex({
    flexDirection: "column",
    alignItems: "center",
  })}
  width: 100vw;
  min-height: 100vh;
  height: 100%;
  padding: 59px 16px 149px;
  margin: 0 auto;
  background-color: ${color.G20};
  gap: 36px;

  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
  -ms-overflow-style: none;

  @media (min-width: 601px) {
    width: 375px;
  }
`;

const Divider = styled.div`
  width: calc(100% + 32px);
  height: 10px;
  margin-left: -16px;
  margin-right: -16px;
  background-color: ${color.G30};
`;
