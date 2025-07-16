import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteGoal, patchGoalFail, patchGoalSuccess, postGoal } from "./api";
import { PostGoalReq } from "@/types/goal/remote";
import { useRouter } from "next/navigation";
import { KEY, ROUTES } from "@/constants/common/constant";
import { useToast } from "@/utils/useToast";
import { useSetGoalStore } from "@/stores/goal/goal";

export const useGoalMutation = () => {
  const router = useRouter();
  const { show } = useToast();
  const setGoal = useSetGoalStore();

  const { mutate: goalMutate, ...restMutate } = useMutation({
    mutationFn: ({
      name,
      endDate,
      problem,
      analysis,
      consumptionType,
      consumptionHabits,
      improvementMethods,
    }: PostGoalReq) =>
      postGoal({
        name,
        endDate,
        problem,
        analysis,
        consumptionType,
        consumptionHabits,
        improvementMethods,
      }),
    onSuccess: () => {
      show("목표가 생성되었습니다", "SUCCESS");
      router.push(ROUTES.HOME);
      setGoal({
        title: "",
        date: "",
        problem: "",
        file: null,
        password: ["", "", "", "", "", ""],
        reason: "",
      });
    },
  });

  return { goalMutate, ...restMutate };
};

export const useGoalSuccessMutation = (id: number) => {
  const router = useRouter();

  const { mutate: goalSuccessMutate, ...restMutate } = useMutation({
    mutationFn: () => patchGoalSuccess(id),
    onSuccess: () => {
      router.push(ROUTES.HOME);
    },
    onError: () => {},
  });

  return { goalSuccessMutate, ...restMutate };
};

export const useGoalFailMutation = (id: number) => {
  const router = useRouter();

  const { mutate: goalFailMutate, ...restMutate } = useMutation({
    mutationFn: () => patchGoalFail(id),
    onSuccess: () => {
      router.push(ROUTES.HOME);
    },
    onError: () => {},
  });

  return { goalFailMutate, ...restMutate };
};

export const useDeleteGoalMutation = (id: number) => {
  const queryClient = useQueryClient();
  const { show } = useToast();

  const { mutate: deleteGoalMutate, ...restMutate } = useMutation({
    mutationFn: () => deleteGoal(id),
    onSuccess: () => {
      show("목표가 삭제되었습니다", "ERROR");
      queryClient.invalidateQueries({ queryKey: [KEY.GOAL] });
    },
    onError: () => {},
  });

  return { deleteGoalMutate, ...restMutate };
};
