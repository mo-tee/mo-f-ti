import { KEY } from "@/constants/common/constant";
import { Type } from "@/types/goal/remote";
import { useQuery } from "@tanstack/react-query";
import { getGoal, getGoalDetail } from "./api";

export const useGoalQuery = (status: Type) => {
  const { data, ...restQuery } = useQuery({
    queryKey: [KEY.GOAL, status],
    queryFn: () => getGoal(status),
    retry: false,
  });

  return { data: data?.data.data, ...restQuery };
};

export const useGoalDetailQuery = (id: number) => {
  const { data, ...restQuery } = useQuery({
    queryKey: [KEY.GOAL, id],
    queryFn: () => getGoalDetail(id),
    retry: false,
  });

  return { data: data?.data.data, ...restQuery };
};
