import { DailyQuiz, DailyQuizList } from "./client";

export interface GetQuizRes {
  code: string;
  message: string;
  data: DailyQuiz;
}

export interface GetQuizListRes {
  code: string;
  message: string;
  data: DailyQuizList[];
}
