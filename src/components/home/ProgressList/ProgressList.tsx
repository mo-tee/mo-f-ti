import { Text } from "@/components/common";
import Row from "@/components/common/Flex/Row";
import { color } from "@/components/desgin-system";
import { ROUTES } from "@/constants/common/constant";
import { flex } from "@/utils";
import { useRouter } from "next/navigation";
import styled from "styled-components";
import GoalItem from "../GoalItem/GoalItem";
import { DUMMY_PROGRESS_GOAL } from "@/constants/home/mock";

const ProgressList = () => {
  const router = useRouter();

  const handlePlusClick = () => {
    router.push(ROUTES.PROGRESS);
  };

  return (
    <StyledProgressList>
      <Row width="100%" alignItems="center" justifyContent="space-between">
        <Text fontType="Title3" color={color.G900}>
          진행 중인 목표
        </Text>
        <div onClick={handlePlusClick}>
          <Text fontType="Body2" color={color.G80}>
            더보기
          </Text>
        </div>
      </Row>
      {DUMMY_PROGRESS_GOAL.slice(0, 3).map((goal) => (
        <GoalItem
          key={goal.id}
          id={goal.id}
          name={goal.name}
          date={goal.date}
        />
      ))}
    </StyledProgressList>
  );
};

export default ProgressList;

const StyledProgressList = styled.div`
  ${flex({ flexDirection: "column", alignItems: "center" })}
  width: 100%;
  gap: 14px;
`;
