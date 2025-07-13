import { KEY } from "@/constants/common/constant";
import { useQuery } from "@tanstack/react-query";
import { getGoogleLink } from "./api";

// 적용 전
export const useGoogleLinkQuery = () => {
  const { data, ...restQuery } = useQuery({
    queryKey: [KEY.GOOGLELINK],
    queryFn: getGoogleLink,
  });

  return { data, ...restQuery };
};
