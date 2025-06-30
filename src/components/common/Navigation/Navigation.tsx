import {
  IconGoal,
  IconHome,
  IconProfile,
  IconQuiz,
  IconShop,
} from "@/components/icon";
import { flex } from "@/utils";
import styled from "styled-components";
import NavigationItem from "./NavigationItem/NavigationItem";
import { ROUTES } from "@/constants/common/constant";
import { color } from "@/components/desgin-system";

const Navigation = () => {
  return (
    <StyledNavigation>
      <NavigationItem icon={IconHome} name="홈" routes={ROUTES.HOME} />
      <NavigationItem icon={IconShop} name="상점" routes={ROUTES.SHOP} />
      <NavigationItem icon={IconGoal} name="목표 생성" routes={ROUTES.GOAL} />
      <NavigationItem icon={IconQuiz} name="학습" routes={ROUTES.QUIZ} />
      <NavigationItem
        icon={IconProfile}
        name="프로필"
        routes={ROUTES.PROFILE}
      />
    </StyledNavigation>
  );
};

export default Navigation;

const StyledNavigation = styled.div`
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
  padding: 15px 23px 47px;
  z-index: 2;
  border-radius: 8px 8px 0 0;

  @media (min-width: 601px) {
    width: 375px;
  }
`;
