import { useMutation } from "@tanstack/react-query";
import { postExcel } from "./api";
import { PostExcelReq } from "@/types/excel/remote";

export const useExcelMutation = () => {
  const { mutate: excelMutate, ...restMutate } = useMutation({
    mutationFn: ({ file, password }: PostExcelReq) =>
      postExcel({ file, password }),
    onSuccess: () => {},
  });

  return { excelMutate, ...restMutate };
};
