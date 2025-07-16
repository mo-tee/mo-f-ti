import { useCallback, useRef } from "react";
import { atom, useRecoilState } from "recoil";

export type ToastType = "ERROR" | "SUCCESS";

const toastState = atom({
  key: "toastState",
  default: {
    showToast: false,
    toastMessage: "",
    toastType: "SUCCESS" as "ERROR" | "SUCCESS",
    width: 'auto',
  },
});

export const useToast = () => {
  const [toast, setToast] = useRecoilState(toastState);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const show = useCallback(
    (
      message: string,
      type: "ERROR" | "SUCCESS" = "SUCCESS",
      width?: string
    ) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      setToast({
        showToast: true,
        toastMessage: message,
        toastType: type,
        width: width ?? 'auto',
      });
      timeoutRef.current = setTimeout(() => {
        setToast((prev) => ({
          ...prev,
          showToast: false,
        }));
        timeoutRef.current = null;
      }, 3000);
    },
    [setToast]
  );

  return {
    showToast: toast.showToast,
    toastMessage: toast.toastMessage,
    toastType: toast.toastType,
    width: toast.width,
    show,
  };
};
