import { useMutation } from "@tanstack/react-query";
import { postQuizSolve } from "./api";

export const useQuizSolveMutation = (id: number, correctNumber: number) => {
  const { mutate: quizSolveMutate, ...restMutate } = useMutation({
    mutationFn: () => postQuizSolve(id, correctNumber),
  });

  return { quizSolveMutate, ...restMutate };
};
