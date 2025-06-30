"use client";

import { color } from "@/components/desgin-system";
import { IconBackArrow } from "@/components/icon";
import { BuyButton, DetailContent } from "@/components/shop";
import { flex } from "@/utils";
import { useRouter } from "next/navigation";
import styled from "styled-components";

const ShopDetail = () => {
  const router = useRouter();

  const handleMoveBack = () => {
    router.back();
  };

  return (
    <StyledShopDetail>
      <IconWrapper>
        <div onClick={handleMoveBack}>
          <IconBackArrow width={24} height={24} fill={color.G900} />
        </div>
      </IconWrapper>
      <DetailContentScroll>
        <DetailContent />
      </DetailContentScroll>
      <BuyButton />
    </StyledShopDetail>
  );
};

export default ShopDetail;

const StyledShopDetail = styled.div`
  ${flex({
    flexDirection: "column",
    alignItems: "center",
  })}
  width: 100vw;
  height: 100vh;
  padding: 21px 16px 75px;
  margin: 0 auto;
  background-color: ${color.G10};
  gap: 22px;

  @media (min-width: 601px) {
    width: 375px;
  }
`;

const IconWrapper = styled.div`
  ${flex({ justifyContent: "flex-start", alignItems: "center" })}
  width: 100%;
`;

const DetailContentScroll = styled.div`
  flex: 1 1 auto;
  width: calc(100% + 32px);
  margin-left: -16px;
  margin-right: -16px;
  min-height: 0;
  overflow-y: auto;

  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
