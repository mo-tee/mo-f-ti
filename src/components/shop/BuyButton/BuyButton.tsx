import { Button } from "@/components/common";
import { color } from "@/components/desgin-system";
import { ROUTES } from "@/constants/common/constant";
import { flex } from "@/utils";
import { useToast } from "@/utils/useToast";
import { useRouter } from "next/navigation";
import styled from "styled-components";

const BuyButton = () => {
  const { show } = useToast();
  const router = useRouter();

  const handleBuyButtonClick = () => {
    show("상품이 구매되었습니다.", "SUCCESS");
    router.push(ROUTES.HOME);
  };

  return (
    <StyledBuyButton>
      <Button onClick={handleBuyButtonClick}>상품 구매</Button>
    </StyledBuyButton>
  );
};

export default BuyButton;

const StyledBuyButton = styled.div`
  ${flex({
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  })}
  width: 100%;
  height: 109px;
  position: fixed;
  bottom: 0;
  background-color: ${color.G0};
  padding: 14px 16px 47px;
  border-radius: 8px 8px 0 0;

  @media (min-width: 601px) {
    width: 375px;
  }
`;
