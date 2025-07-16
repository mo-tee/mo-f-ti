import { moti } from "@/apis/instance/instance";
import authorization from "@/apis/token/token";
import {
  GetGoalDetailRes,
  GetGoalListRes,
  PostGoalReq,
  Type,
} from "@/types/goal/remote";

export const postGoal = async ({
  name,
  endDate,
  problem,
  analysis,
  consumptionType,
  consumptionHabits,
  improvementMethods,
}: PostGoalReq) => {
  const data = await moti.post(
    "/goals",
    {
      name,
      endDate,
      problem,
      analysis,
      consumptionType,
      consumptionHabits,
      improvementMethods,
    },
    authorization()
  );

  return data;
};

export const getGoal = async (status: Type) => {
  const data = await moti.get<GetGoalListRes>("/goals", {
    params: { status },
    ...authorization(),
  });

  return data;
};

export const getGoalDetail = async (id: number) => {
  const data = await moti.get<GetGoalDetailRes>(
    `/goals/${id}`,
    authorization()
  );

  return data;
};

export const patchGoalSuccess = async (id: number) => {
  const data = await moti.patch(`/goals/${id}/success`, {}, authorization());

  return data;
};

export const patchGoalFail = async (id: number) => {
  const data = await moti.patch(`/goals/${id}/fail`, {}, authorization());

  return data;
};

export const deleteGoal = async (id: number) => {
  const data = await moti.delete(`/goals/${id}`, authorization());

  return data;
};
