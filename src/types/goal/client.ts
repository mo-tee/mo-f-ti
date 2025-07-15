export type GoalCompleteStep = "목표달성" | "달성성공" | "달성실패";

export interface Goal {
  title: string;
  date: string;
  problem: string;
  file: File | null;
  password: string[];
  reason?: string;
}

export interface GoalList {
  id: number;
  name: string;
  endDate: string;
}

export interface Improvement {
  file: File | null;
  password: string[];
}
