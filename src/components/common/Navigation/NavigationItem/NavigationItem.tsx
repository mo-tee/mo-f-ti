import { color } from "@/components/desgin-system";
import { flex } from "@/utils";
import { useRouter, usePathname } from "next/navigation";
import { ElementType } from "react";
import styled from "styled-components";

interface NavigationItemProps {
  icon: ElementType;
  name: string;
  routes: string;
}

const NavigationItem = ({ icon: Icon, name, routes }: NavigationItemProps) => {
  const router = useRouter();
  const pathname = usePathname();

  const isActive = pathname.startsWith(routes);
  const activeColor = isActive ? "#0D80F2" : color.PrimaryTender;

  const handleMoveRoutes = () => {
    router.push(routes);
  };

  return (
    <StyledNavigationItem onClick={handleMoveRoutes}>
      <Icon color={activeColor} width={24} height={24} />
      <Text color={activeColor}>{name}</Text>
    </StyledNavigationItem>
  );
};

export default NavigationItem;

const StyledNavigationItem = styled.div`
  ${flex({ alignItems: "center", flexDirection: "column" })}
  width: 50px;
  gap: 10px;
  cursor: pointer;
`;

const Text = styled.div<{ color: string }>`
  color: ${(p) => p.color};
  text-align: center;
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
`;
