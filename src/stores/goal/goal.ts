import { Goal } from "@/types/goal/client";
import {
  atom,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";

const goalAtomState = atom<Goal>({
  key: "goal-atom",
  default: {
    title: "",
    date: "",
    problem: "",
    file: null,
    password: ["", "", "", "", "", ""],
    reason: "",
  },
});

export const useGoalStore = () => useRecoilState(goalAtomState);
export const useGoalValueStore = () => useRecoilValue(goalAtomState);
export const useSetGoalStore = () => useSetRecoilState(goalAtomState);
