import { Text } from "@/components/common";
import Column from "@/components/common/Flex/Column";
import { color } from "@/components/desgin-system";
import { ROUTES } from "@/constants/common/constant";
import { flex } from "@/utils";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styled from "styled-components";

interface ShopListItemProps {
  id: number;
  itemName: string;
  point: string;
}

const ShopListItem = ({ id, itemName, point }: ShopListItemProps) => {
  const router = useRouter();

  const handleItemClick = () => {
    router.push(`${ROUTES.SHOP}/${id}`);
  };

  return (
    <StyledListItem onClick={handleItemClick}>
      <Image alt="item" width={166} height={166} src="/coffee.png" />
      <Column gap={4} width="100%" alignItems="flex-start">
        <StyledText>{itemName}</StyledText>
        <Text fontType="Body2" color={color.Primary}>
          {point}P
        </Text>
      </Column>
    </StyledListItem>
  );
};

export default ShopListItem;

const StyledListItem = styled.div`
  ${flex({ flexDirection: "column", alignItems: "center" })}
  width: 100%;
  height: 100%;
  gap: 12px;
`;

const StyledText = styled.div`
  white-space: pre-line;
  font-family: "Pretendard";
  font-weight: 700;
  font-size: 16px;
  line-height: 140%;
  letter-spacing: -1px;
  color: ${color.G900};
`;
