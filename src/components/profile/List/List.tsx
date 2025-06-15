import styled from "styled-components";
import ListItem from "./ListItem/ListItem";
import { flex } from "@/utils";
import { color } from "@/components/desgin-system";

const List = () => {
  return (
    <StyledList>
      <ListItem title="자주 묻는 질문" color={color.G900} />
      <ListItem title="로그아웃" color={color.Secondary} />
    </StyledList>
  );
};

export default List;

const StyledList = styled.div`
  ${flex({ flexDirection: "column", alignItems: "center" })}
  width: 100%;
`;
