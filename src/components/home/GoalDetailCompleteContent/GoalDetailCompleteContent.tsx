import { Button, FileUploader, Text } from "@/components/common";
import Column from "@/components/common/Flex/Column";
import { color } from "@/components/desgin-system";
import ExelPassword from "@/components/goal/ExelPassword/ExelPassword";
import { useSetGoalCompleteStepStore } from "@/stores/goal/goalCompleteStep";
import { flex } from "@/utils";
import styled from "styled-components";

const GoalDetailCompleteContent = () => {
  const setCompleteStep = useSetGoalCompleteStepStore();

  const handleMoveStep = () => {
    const isSuccess = Math.random() > 0.5;
    setCompleteStep(isSuccess ? "달성성공" : "달성실패");
  };

  return (
    <StyledGoalDetailCompleteContent>
      <Column gap={32}>
        <Column gap={4} alignItems="flex-start">
          <Text fontType="Title3" color={color.G900}>
            목표 달성 성공 여부 검증을 위해
            <br />
            엑셀 파일을 업로드해주세요.
          </Text>
          <Text fontType="Body2" color={color.G80}>
            검증 후 성공했을 경우 포인트를 획득하지만
            <br />
            실패했을 시에는 계속 진행할지, 포기할지 선택하게 됩니다.
          </Text>
        </Column>
        <FileUploader />
        <ExelPassword />
      </Column>
      <Button onClick={handleMoveStep}>소비 내역 검증</Button>
    </StyledGoalDetailCompleteContent>
  );
};

export default GoalDetailCompleteContent;

const StyledGoalDetailCompleteContent = styled.div`
  ${flex({ flexDirection: "column", justifyContent: "space-between" })}
  width: 100%;
  height: 100%;
  padding: 16px 0px 40px;
`;
