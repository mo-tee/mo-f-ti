import styled from "styled-components";
import ListItem from "./ListItem/ListItem";
import { flex } from "@/utils";
import { color } from "@/components/desgin-system";
import { useLogoutMutation } from "@/services/auth/mutations";
import { useToast } from "@/utils/useToast";

const List = () => {
  const { logoutMutate } = useLogoutMutation();
  const { show } = useToast();

  const handleLogout = () => {
    logoutMutate();
  };

  const handleAlready = () => {
    show("준비 중입니다");
  };

  return (
    <StyledList>
      <ListItem
        title="자주 묻는 질문"
        color={color.G900}
        onClick={handleAlready}
      />
      <ListItem
        title="로그아웃"
        color={color.Secondary}
        onClick={handleLogout}
      />
    </StyledList>
  );
};

export default List;

const StyledList = styled.div`
  ${flex({ flexDirection: "column", alignItems: "center" })}
  width: 100%;
`;
