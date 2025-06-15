import { Text } from "@/components/common";
import { IconArrow } from "@/components/icon";
import { flex } from "@/utils";
import styled from "styled-components";

interface ListItemProps {
  title: string;
  color: string;
}

const ListItem = ({ title, color }: ListItemProps) => {
  const handleItemClick = () => {
    alert("준비 중 입니다.");
  };

  return (
    <StyledListItem onClick={handleItemClick}>
      <Text fontType="Body1" color={color}>
        {title}
      </Text>
      <IconArrow width={20} height={20} color={color} />
    </StyledListItem>
  );
};

export default ListItem;

const StyledListItem = styled.div`
  ${flex({
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  })}
  width: 100%;
  height: 100%;
  padding: 14px 0;
`;
