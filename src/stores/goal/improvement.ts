import { Improvement } from "@/types/goal/client";
import {
  atom,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";

const improvementAtomState = atom<Improvement>({
  key: "improvement-atom",
  default: {
    file: null,
    password: ["", "", "", "", "", ""],
  },
});

export const useImprovementStore = () => useRecoilState(improvementAtomState);
export const useImprovemenValueStore = () =>
  useRecoilValue(improvementAtomState);
export const useSetImprovemenStore = () =>
  useSetRecoilState(improvementAtomState);
