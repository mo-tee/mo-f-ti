import { useMutation } from "@tanstack/react-query";
import { deleteLogout, getGoogleLink, postGoogle } from "./api";
import { ROUTES, TOKEN } from "@/constants/common/constant";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { Storage } from "@/apis/storage/storage";
import { useToast } from "@/utils/useToast";

export const useGoogleLoginMutation = () => {
  const params = useSearchParams();
  const router = useRouter();
  const { show } = useToast();

  useEffect(() => {
    const code = params.get("code");

    if (code) {
      postGoogle(code).then((res) => {
        Storage.setItem(TOKEN.ACCESS, res.data.data.accessToken);
        Storage.setItem(TOKEN.REFRESH, res.data.data.refreshToken);
        router.replace(ROUTES.HOME);
        show("로그인에 성공했습니다", "SUCCESS");
      });
    }
  }, [params, router, show]);

  const { mutate: loginMutate, ...restMutate } = useMutation({
    mutationFn: () => getGoogleLink(),
    onSuccess: (res) => {
      window.location.href = res.data.data;
    },
  });

  return { loginMutate, ...restMutate };
};

export const useLogoutMutation = () => {
  const router = useRouter();
  const { show } = useToast();

  const { mutate: logoutMutate, ...restMutation } = useMutation({
    mutationFn: () => deleteLogout(),
    onSuccess: () => {
      router.replace(ROUTES.LOGIN);
      localStorage.clear();
      show("로그아웃에 성공했습니다", "ERROR");
    },
    onError: () => {
      localStorage.clear();
      show("로그아웃에 실패했습니다", "ERROR");
    },
  });

  return { logoutMutate, ...restMutation };
};
