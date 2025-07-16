import { Text } from "@/components/common";
import Row from "@/components/common/Flex/Row";
import { color } from "@/components/desgin-system";
import { ROUTES } from "@/constants/common/constant";
import { flex } from "@/utils";
import { useRouter } from "next/navigation";
import styled from "styled-components";
import GoalItem from "../GoalItem/GoalItem";
import { GoalList } from "@/types/goal/client";

interface SuccessListProps {
  successList?: GoalList[];
}

const SuccessList = ({ successList }: SuccessListProps) => {
  const router = useRouter();

  const handlePlusClick = () => {
    router.push(ROUTES.SUCCESS);
  };

  return (
    <StyledSuccessList>
      <Row width="100%" alignItems="center" justifyContent="space-between">
        <Text fontType="Title3" color={color.G900}>
          성공한 목표
        </Text>
        <div onClick={handlePlusClick}>
          <Text fontType="Body2" color={color.G80}>
            더보기
          </Text>
        </div>
      </Row>
      {successList?.slice(0, 3).map((goal) => (
        <GoalItem
          key={goal.id}
          id={goal.id}
          name={goal.name}
          date={goal.endDate}
        />
      ))}
    </StyledSuccessList>
  );
};

export default SuccessList;

const StyledSuccessList = styled.div`
  ${flex({ flexDirection: "column", alignItems: "center" })}
  width: 100%;
  gap: 14px;
`;
