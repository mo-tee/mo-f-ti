import ShopListItem from "./ShopListItem/ShopListItem";
import styled from "styled-components";

const ShopList = () => {
  return (
    <StyledShopList>
      {Array.from({ length: 10 }).map((_, i) => (
        <ShopListItem
          key={i}
          id={i+1}
          itemName={`카페 아메리카노 T + 진한 가\n나슈 9 레이어 케이크`}
          point="11,600"
        />
      ))}
    </StyledShopList>
  );
};

export default ShopList;

const StyledShopList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px 11px;
  width: 100%;
  justify-items: center;
`;
