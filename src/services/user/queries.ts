import { useQuery } from "@tanstack/react-query";
import { getUser } from "./api";
import { KEY } from "@/constants/common/constant";

// 적용 전
export const useUserQuery = () => {
  const { data, ...restQuery } = useQuery({
    queryKey: [KEY.USER],
    queryFn: getUser,
    retry: false,
  });

  return { data, ...restQuery };
};
