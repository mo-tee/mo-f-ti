import { IconSpinner01 } from "@/components/icon";
import styled, { keyframes } from "styled-components";

const spin = keyframes`
  100% {
    transform: rotate(-360deg);
  }
`;

const StyledSpinner = styled.div`
  animation: ${spin} 1s linear infinite;
  display: flex;
`;

export const Spinner1 = () => (
  <StyledSpinner>
    <IconSpinner01 width={90} height={90} />
  </StyledSpinner>
);
