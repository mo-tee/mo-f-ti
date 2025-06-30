"use client";

import { Navigation, Text } from "@/components/common";
import Column from "@/components/common/Flex/Column";
import { color } from "@/components/desgin-system";
import { Point, ShopList } from "@/components/shop";
import { flex } from "@/utils";
import styled from "styled-components";

const Shop = () => {
  return (
    <StyledShop>
      <Column gap={30} alignItems="center" width="100%">
        <Text fontType="Label1" color={color.G900}>
          상점
        </Text>
        <Point point="3420" />
      </Column>
      <ShopListScroll>
        <ShopList />
      </ShopListScroll>
      <Navigation />
    </StyledShop>
  );
};

export default Shop;

const StyledShop = styled.div`
  ${flex({
    flexDirection: "column",
    alignItems: "center",
  })}
  width: 100vw;
  height: 100vh;
  padding: 32px 16px 75px;
  margin: 0 auto;
  background-color: ${color.G10};
  gap: 17.5px;

  @media (min-width: 601px) {
    width: 375px;
  }
`;

const ShopListScroll = styled.div`
  flex: 1 1 auto;
  width: 100%;
  min-height: 0;
  overflow-y: auto;
  padding-bottom: 10px;

  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
