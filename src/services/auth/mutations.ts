import { useMutation } from "@tanstack/react-query";
import { deleteLogout, postGoogle } from "./api";
import { AxiosResponse } from "axios";
import { Storage } from "@/apis/storage/storage";
import { ROUTES, TOKEN } from "@/constants/common/constant";
import { useRouter } from "next/navigation";

// 적용 전
export const useGoogleMutation = (code: string) => {
  const router = useRouter();

  const { mutate: googleMutate, ...restMutation } = useMutation({
    mutationFn: () => postGoogle(code),
    onSuccess: (res: AxiosResponse) => {
      const { accessToken, refreshToken } = res.data;
      Storage.setItem(TOKEN.ACCESS, accessToken);
      Storage.setItem(TOKEN.REFRESH, refreshToken);
      router.replace(ROUTES.HOME);
    },
    onError: () => {
      alert("잠시후 다시 시도해주세요.");
      localStorage.clear();
    },
  });

  return { googleMutate, ...restMutation };
};

// 적용 전
export const useLogoutMutation = () => {
  const router = useRouter();

  const { mutate: logoutMutate, ...restMutation } = useMutation({
    mutationFn: () => deleteLogout(),
    onSuccess: () => {
      router.replace(ROUTES.LOGIN);
      localStorage.clear();
      alert("로그아웃 되었습니다.");
    },
    onError: () => {
      alert("잠시후 다시 시도해주세요");
    },
  });

  return { logoutMutate, ...restMutation };
};
