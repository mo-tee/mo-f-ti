import { moti } from "@/apis/instance/instance";
import authorization from "@/apis/token/token";
import { GetUserRes } from "@/types/user/remote";

export const getUser = async () => {
  const data = await moti.get<GetUserRes>("/users", authorization());

  return data;
};
