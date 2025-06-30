"use client";

import { Navigation } from "@/components/common";
import Column from "@/components/common/Flex/Column";
import color from "@/components/desgin-system/color";
import {
  ArchivementsBox,
  Profile,
  ProgressList,
  SuccessList,
} from "@/components/home";
import { flex } from "@/utils";
import styled from "styled-components";

const Home = () => {
  return (
    <StyledHome>
      <Column width="100%" gap={32} alignItems="flex-start">
        <Profile />
        <ArchivementsBox />
      </Column>
      <ProgressList />
      <Divider />
      <SuccessList />
      <Navigation />
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
  height: 100%;
  padding: 13.5px 16px 115px;
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
