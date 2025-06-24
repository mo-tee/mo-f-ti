/* eslint-disable react-hooks/exhaustive-deps */
import { ToggleButton } from "@/components/common";
import { useQuizStepStore } from "@/stores/quiz/quizStep";
import { flex } from "@/utils";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import styled from "styled-components";

const Header = () => {
  const pathname = usePathname();
  const router = useRouter();

  const [quizStep, setQuizStep] = useQuizStepStore();

  const isOnQuizDetailPage = /^\/quiz\/\d+$/.test(pathname);

  useEffect(() => {
    if (isOnQuizDetailPage && quizStep === "오늘의문제") {
      setQuizStep("해결한문제");
    }
  }, [isOnQuizDetailPage]);

  const handleClick = (step: "오늘의문제" | "해결한문제") => {
    setQuizStep(step);
    if (isOnQuizDetailPage) {
      router.push("/quiz");
    }
  };

  return (
    <StyledHeader>
      <ToggleButton
        onClick={() => handleClick("오늘의문제")}
        isActive={quizStep === "오늘의문제"}
      >
        오늘의 퀴즈
      </ToggleButton>
      <ToggleButton
        onClick={() => handleClick("해결한문제")}
        isActive={quizStep === "해결한문제"}
      >
        해결한 문제
      </ToggleButton>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.div`
  ${flex({
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  })}
  gap: 12px;
`;
