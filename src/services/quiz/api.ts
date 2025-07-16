import { moti } from "@/apis/instance/instance";
import authorization from "@/apis/token/token";
import { GetQuizListRes, GetQuizRes } from "@/types/quiz/remote";

export const getQuiz = async () => {
  const data = await moti.get<GetQuizRes>("/quizzes", authorization());

  return data;
};

export const postQuizSolve = async (id: number, correctNumber: number) => {
  const data = await moti.post(
    `/quizzes/${id}/solve`,
    correctNumber,
    authorization()
  );

  return data;
};

export const getQuizList = async () => {
  const data = await moti.get<GetQuizListRes>(
    "/quizzes/attempts",
    authorization()
  );

  return data;
};
