import { KEY } from "@/constants/common/constant";
import { useQuery } from "@tanstack/react-query";
import { getQuiz, getQuizList } from "./api";

export const useQuizQuery = () => {
  const { data, ...restQuery } = useQuery({
    queryKey: [KEY.QUIZ] as const,
    queryFn: getQuiz,
    retry: false,
  });

  return { data: data?.data.data, ...restQuery };
};

export const useQuizListQuery = () => {
  const { data, ...restQuery } = useQuery({
    queryKey: [KEY.QUIZLIST],
    queryFn: getQuizList,
    retry: false,
  });

  return { data: data?.data.data, ...restQuery };
};
