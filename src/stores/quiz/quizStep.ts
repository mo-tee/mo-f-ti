
import { QuizStep } from "@/types/quiz/client";
import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";

const quizStepAtomState = atom<QuizStep>({
  key: "quiz-step",
  default: "오늘의문제",
});

export const useQuizStepStore = () => useRecoilState(quizStepAtomState);
export const useSetQuizStepStore = () => useSetRecoilState(quizStepAtomState);
export const useQuizStepValueStore = () => useRecoilValue(quizStepAtomState);
