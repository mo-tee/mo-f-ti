import { excel } from "@/apis/instance/excel-instance";
import { PostExcelReq } from "@/types/excel/remote";

export const postExcel = async ({ file, password }: PostExcelReq) => {
  const formData = new FormData();
  if (file) {
    formData.append("file", file);
  }
  formData.append("password", password);

  const data = await excel.post("/process-excel", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return data;
};
