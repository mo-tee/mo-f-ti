import styled from "styled-components";
import Text from "../Text/Text";
import color from "@/components/desgin-system/color";
import { flex } from "@/utils";

interface ButtonProps {
  children: string;
  onClick: () => void;
}

const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <StyledButton onClick={onClick}>
      <Text fontType="Headline2" color={color.G0}>
        {children}
      </Text>
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled.div`
  ${flex({ alignItems: "center", justifyContent: "center" })}
  width: 100%;
  height: 48px;
  background-color: ${color.Primary};
  border-radius: 8px;
  margin: 0 auto;

  @media (min-width: 601px) {
    width: 360px;
  }
`;
