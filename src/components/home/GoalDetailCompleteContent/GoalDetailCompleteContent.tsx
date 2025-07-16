import { Button, FileUploader, Text } from "@/components/common";
import Column from "@/components/common/Flex/Column";
import { color } from "@/components/desgin-system";
import ExelPassword from "@/components/goal/ExelPassword/ExelPassword";
import { useExcelMutation } from "@/services/excel/mutations";
import { useSetGoalCompleteStepStore } from "@/stores/goal/goalCompleteStep";
import { useImprovementStore } from "@/stores/goal/improvement";
import { flex } from "@/utils";
import { GoogleGenAI } from "@google/genai";
import styled from "styled-components";

const GoalDetailCompleteContent = () => {
  const [improve, setImprove] = useImprovementStore();
  const setCompleteStep = useSetGoalCompleteStepStore();
  const { excelMutate } = useExcelMutation();

  const passwordStr = improve.password.join("");
  const ai = new GoogleGenAI({ apiKey: process.env.NEXT_PUBLIC_API_KEY });

  const handleMoveStep = () => {
    excelMutate(
      { file: improve.file, password: passwordStr },
      {
        onSuccess: async (data) => {
          const res = await ai.models.generateContent({
            model: "gemini-2.0-flash-001",
            contents: `이게 최근 한달간의 소비내역인데, ${JSON.stringify(
              data.data,
              null,
              2
            )} 분석해줘.`,
          });
          console.log(res.text);
          const isSuccess = Math.random() > 0.5;
          setCompleteStep(isSuccess ? "달성성공" : "달성실패");
        },
      }
    );
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
        <FileUploader
          onFileChange={(file) => {
            setImprove((prevGoal) => ({
              ...prevGoal,
              file: file,
            }));
          }}
        />
        <ExelPassword
          value={improve.password}
          onChange={(newValue) =>
            setImprove((prev) => ({ ...prev, password: newValue }))
          }
        />
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
  padding: 16px 0px 37px;
`;
