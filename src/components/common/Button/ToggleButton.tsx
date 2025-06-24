import { flex } from "@/utils";
import { ReactNode } from "react";
import styled from "styled-components";
import Text from "../Text/Text";
import { color } from "@/components/desgin-system";

interface ToggleButtonInterface {
  onClick: () => void;
  children: ReactNode;
  isActive: boolean;
}

const ToggleButton = ({
  onClick,
  children,
  isActive = false,
}: ToggleButtonInterface) => {
  return (
    <StyledToggleButton onClick={onClick} $isActive={isActive}>
      <Text fontType="Label2" color={isActive? color.G900 : color.G70}>
        {children}
      </Text>
    </StyledToggleButton>
  );
};

export default ToggleButton;

const StyledToggleButton = styled.div<{ $isActive: boolean }>`
  ${flex({
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  })}
  width: auto;
  padding: 16px 0px 13px 0px;
  border-bottom: ${(p) => (p.$isActive ? "3px solid #0d80f2" : "none")};
`;
