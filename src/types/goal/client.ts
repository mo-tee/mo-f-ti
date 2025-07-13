export type GoalCompleteStep = "목표달성" | "달성성공" | "달성실패";

export interface Goal {
  thumnail: File | null;
  title: string;
  date: string;
  problem: string;
  file: File | null;
  password: string[];
  reason?: string;
}
