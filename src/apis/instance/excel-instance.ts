import axios from "axios";

export const excel = axios.create({
  baseURL: process.env.NEXT_PUBLIC_EXCEL_BASE_URL,
  timeout: 15000,
  headers: {
    "Content-Type": "multipart/form-data",
  },
});
