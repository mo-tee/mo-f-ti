import { useQuery } from "@tanstack/react-query";
import { getUser } from "./api";
import { KEY } from "@/constants/common/constant";

export const useUserQuery = () => {
  const { data, ...restQuery } = useQuery({
    queryKey: [KEY.USER] as const,
    queryFn: getUser,
    retry: false,
  });

  return { data: data?.data.data, ...restQuery };
};
