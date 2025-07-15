import { color } from "@/components/desgin-system";
import { IconError, IconSuccess } from "@/components/icon";
import { flex } from "@/utils";
import { ReactNode } from "react";
import styled, { CSSProperties } from "styled-components";

interface ToastProps {
  children: ReactNode;
  width?: CSSProperties["width"];
  type: "ERROR" | "SUCCESS";
}

const Toast = ({ children, width, type }: ToastProps) => {
  return (
    <StyledToast $type={type} style={{ width }}>
      {type === "ERROR" ? (
        <IconError width={14} height={14} />
      ) : (
        <IconSuccess width={14} height={14} />
      )}
      <StyledText>{children}</StyledText>
    </StyledToast>
  );
};

export default Toast;

const StyledToast = styled.div<{ $type: "ERROR" | "SUCCESS" }>`
  ${flex({
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  })}
  position: fixed;
  gap: 8px;
  bottom: 128px;
  background-color: ${(p) => (p.$type === "ERROR" ? "#E94848" : "#6DDC5C")};
  width: auto;
  height: 38px;
  padding: 12px 16px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 8px;
  z-index: 1000;
  opacity: 0;
  animation: fadeInOut 3s ease forwards;

  @keyframes fadeInOut {
    0% {
      opacity: 0;
      transform: translate(-50%, 20px);
    }
    10% {
      opacity: 1;
      transform: translate(-50%, 0);
    }
    90% {
      opacity: 1;
      transform: translate(-50%, 0);
    }
    100% {
      opacity: 0;
      transform: translate(-50%, 20px);
    }
  }
`;

const StyledText = styled.div`
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 160%;
  color: ${color.G0};
`;
