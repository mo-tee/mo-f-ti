import { Button, Text } from "@/components/common";
import Column from "@/components/common/Flex/Column";
import Row from "@/components/common/Flex/Row";
import Toast from "@/components/common/Toast/Toast";
import { SLIDE } from "@/constants/login/constant";
import { useGoogleLoginMutation } from "@/services/auth/mutations";
import { flex } from "@/utils";
import { useToast } from "@/utils/useToast";
import Image from "next/image";
import { useEffect, useState } from "react";
import styled from "styled-components";

const LoginContent = () => {
  const { showToast, toastMessage, toastType } = useToast();
  const [current, setCurrent] = useState(0);
  const { loginMutate } = useGoogleLoginMutation();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDE.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  const handleMoveHome = () => {
    loginMutate();
  };

  return (
    <StyledLoginContent>
      <StyledImageWrap>
        <StyledImage
          src={SLIDE[current].image}
          alt="슬라이드 이미지"
          fill
          priority
        />
      </StyledImageWrap>
      <Column alignItems="center" gap={54} width="100%">
        <Column alignItems="center" gap={24}>
          <Text color="#1A1A1A" textAlign="center">
            {SLIDE[current].content}
          </Text>
          <Row alignItems="center" justifyContent="space-between" width={42}>
            {SLIDE.map((_, idx) => (
              <Circle key={idx} active={idx === current} />
            ))}
          </Row>
        </Column>
        <Button onClick={handleMoveHome}>구글로 모티 시작하기</Button>
      </Column>
      {showToast && <Toast type={toastType}>{toastMessage}</Toast>}
    </StyledLoginContent>
  );
};

export default LoginContent;

const StyledLoginContent = styled.div`
  ${flex({
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  })}
  width: 100vw;
  height: 100vh;
  background-color: #f7fafc;
  margin: 0 auto;
  padding: 117px 16px 93px;

  @media (min-width: 601px) {
    width: 375px;
  }
`;

const StyledImageWrap = styled.div`
  width: min(81.3vw, 305px);
  aspect-ratio: 305 / 321;
  margin: 0px 19px;
  position: relative;
`;

const StyledImage = styled(Image)`
  object-fit: contain;
`;

const Circle = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "active",
})<{ active?: boolean }>`
  width: 6px;
  height: 6px;
  background-color: ${({ active }) => (active ? "#060606" : "#D5D5D5")};
  border-radius: 50%;
  transition: background 0.2s;
`;
