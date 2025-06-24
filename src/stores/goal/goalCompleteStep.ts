import { GoalCompleteStep } from "@/types/goal/client";
import {
  atom,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";

const goalCompleteStepAtomState = atom<GoalCompleteStep>({
  key: "goal-complete-step",
  default: "목표달성",
});

export const useGoalCompleteStepStore = () =>
  useRecoilState(goalCompleteStepAtomState);
export const useSetGoalCompleteStepStore = () =>
  useSetRecoilState(goalCompleteStepAtomState);
export const useGoalCompleteStepValueStore = () =>
  useRecoilValue(goalCompleteStepAtomState);
