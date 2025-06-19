import { ReactNode } from "react";
import styled from "styled-components";
import Text from "../Text/Text";
import { flex } from "@/utils";

interface ColorMediumButtonProps {
  backgroundColor: string;
  color: string;
  children: ReactNode;
  onClick: () => void;
}

const ColorMediumButton = ({
  backgroundColor,
  color,
  children,
  onClick,
}: ColorMediumButtonProps) => {
  return (
    <StyledColorMediumButton
      onClick={onClick}
      $backgroundColor={backgroundColor}
      $color={color}
    >
      <Text fontType="Headline2" color={color}>
        {children}
      </Text>
    </StyledColorMediumButton>
  );
};

export default ColorMediumButton;

const StyledColorMediumButton = styled.div<{
  $backgroundColor: string;
  $color: string;
}>`
  ${flex({ alignItems: "center", justifyContent: "center" })}
  width: 100%;
  height: 48px;
  background-color: ${(p) => p.$backgroundColor};
  border-radius: 8px;
  border: 1px solid ${(p) => p.$color};
`;
