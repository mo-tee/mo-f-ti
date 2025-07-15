export type QuizStep = "오늘의문제" | "해결한문제";

export interface DailyQuiz {
  id: number;
  question: string;
  answers: Answer[];
}

export interface Answer {
  answerNumber: number;
  answer: string;
}

export interface DailyQuizList {
  userAnswer: number;
  correctAnswer: number;
  quiz: DailyQuiz;
  solved: boolean;
}
