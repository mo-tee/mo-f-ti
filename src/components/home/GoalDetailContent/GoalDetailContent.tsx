import { ColorMediumButton, Text } from "@/components/common";
import Column from "@/components/common/Flex/Column";
import Row from "@/components/common/Flex/Row";
import { color } from "@/components/desgin-system";
import { flex } from "@/utils";
import styled from "styled-components";
import Point from "./Point/Point";
import Research from "./Research/Research";
import Method from "./Method/Method";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/constants/common/constant";
import { useSetGoalCompleteStepStore } from "@/stores/goal/goalCompleteStep";
import { useOverlay } from "@toss/use-overlay";
import GiveUpModal from "../GiveUpModal/GiveUpModal";
import { useGoalDetailQuery } from "@/services/goal/queries";
import dayjs from "dayjs";
import { useUserQuery } from "@/services/user/queries";
import { consumptionTypeKorMap } from "@/constants/home/constant";

interface GoalDetailContentProps {
  id: number;
}

const GoalDetailContent = ({ id }: GoalDetailContentProps) => {
  const router = useRouter();
  const overlay = useOverlay();
  const setCompleteStep = useSetGoalCompleteStepStore();
  const { data } = useGoalDetailQuery(id);
  const { data: user } = useUserQuery();

  const formatEndDate = data?.endDate
    ? dayjs(data.endDate).format("YYYY.MM.DD")
    : "";

  const handleMoveGoalDetailComplete = () => {
    router.push(`${ROUTES.HOME}/${id}/complete`);
    setCompleteStep("목표달성");
  };

  const handleOpenGiveUpModal = () => {
    overlay.open(({ isOpen, close }) => (
      <GiveUpModal isOpen={isOpen} onClose={close} id={id} />
    ));
  };

  return (
    <StyledGoalDetailContent>
      <Column gap={20} width="100%">
        <Column gap={4}>
          <StyleText>{data?.name}</StyleText>
          <Text fontType="Body2" color={color.G100}>
            ~{formatEndDate}
          </Text>
          <Row gap={12}>
            <ColorMediumButton
              color={color.Primary}
              backgroundColor="rgba(13, 128, 242, 0.1)"
              onClick={handleMoveGoalDetailComplete}
            >
              목표 달성 완료
            </ColorMediumButton>
            <ColorMediumButton
              color={color.Secondary}
              backgroundColor="rgba(241, 38, 38, 0.1)"
              onClick={handleOpenGiveUpModal}
            >
              목표 달성 포기
            </ColorMediumButton>
          </Row>
        </Column>
      </Column>
      <Point
        name={user?.name}
        type={
          data?.consumptionType
            ? consumptionTypeKorMap[data.consumptionType]
            : undefined
        }
        point={data?.consumptionHabitList}
      />
      <Research
        name={user?.name}
        problem={data?.problem}
        analysis={data?.analysis}
      />
      <Method method={data?.improvementMethodList} />
    </StyledGoalDetailContent>
  );
};

export default GoalDetailContent;

const StyledGoalDetailContent = styled.div`
  ${flex({ flexDirection: "column", alignItems: "flex-start" })}
  width: 100%;
  padding-bottom: 52px;
  margin-top: 20px;
  gap: 40px;
`;

const StyleText = styled.div`
  font-family: KIMM_Bold;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
  letter-spacing: -1px;
  color: ${color.G900};
`;
