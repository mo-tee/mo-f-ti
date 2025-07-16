import { moti } from "@/apis/instance/instance";
import authorization from "@/apis/token/token";
import { GetGoogleLinkRes } from "@/types/auth/remote";

export const getGoogleLink = async () => {
  const data = await moti.get<GetGoogleLinkRes>("/auth/google/link");

  return data;
};

export const postGoogle = async (code: string) => {
  const data = await moti.post(`/auth/google?code=${code}`);
  return data;
};

export const deleteLogout = async () => {
  const data = await moti.delete("/auth", authorization());

  return data;
};
