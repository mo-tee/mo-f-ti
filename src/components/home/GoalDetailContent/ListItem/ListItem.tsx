import { color } from "@/components/desgin-system";
import { ReactNode } from "react";
import styled from "styled-components";

interface ListItemProps {
  children: ReactNode;
  padding: string;
}

const ListItem = ({ children, padding }: ListItemProps) => {
  return <StyledListItem $padding={padding}>{children}</StyledListItem>;
};

export default ListItem;

const StyledListItem = styled.div<{ $padding: string }>`
  width: 100%;
  height: 100%;
  background-color: ${color.G0};
  padding: ${(p) => p.$padding};
  border-radius: 8px;
`;
