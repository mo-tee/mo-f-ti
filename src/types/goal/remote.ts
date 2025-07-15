import { GoalList } from "./client";

export interface PostGoalReq {
  name: string;
  endDate: string;
  problem: string;
  analysis: string;
  consumptionType: ConsumptionType;
  consumptionHabits: string[];
  improvementMethods: string[];
}

export type ConsumptionType =
  | "SAVING"
  | "INVESTMENT"
  | "FLEX"
  | "EXPERIENCE"
  | "FOOD"
  | "IMPROVEMENT"
  | "SHOPPING";

export type Type = "SUCCESS" | "FAILED" | "ONGOING" | null;

export interface GetGoalListRes {
  code: string;
  message: string;
  data: GoalList[];
}

export interface GetGoalDetailRes {
  code: string;
  message: string;
  data: {
    id: number;
    name: string;
    endDate: string;
    problem: string;
    analysis: string;
    consumptionType: ConsumptionType;
    status: Type;
    consumptionHabitList: string[];
    improvementMethodList: string[];
  };
}
