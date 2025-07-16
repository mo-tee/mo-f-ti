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
import GoalLoader from "../GoalLoader/GoalLoader";
import { useState } from "react";
import { AxiosError } from "axios";
import { useToast } from "@/utils/useToast";

const GoalDetailCompleteContent = () => {
  const [improve, setImprove] = useImprovementStore();
  const [aiLoading, setAiLoading] = useState(false);
  const setCompleteStep = useSetGoalCompleteStepStore();
  const { excelMutate, isLoading } = useExcelMutation();
  const { show } = useToast();

  const passwordStr = improve.password.join("");
  const ai = new GoogleGenAI({ apiKey: process.env.NEXT_PUBLIC_API_KEY });
  const isAnyLoading = isLoading || aiLoading;

  const handleMoveStep = () => {
    excelMutate(
      { file: improve.file, password: passwordStr },
      {
        onSuccess: async (data) => {
          setAiLoading(true);
          try {
            const res = await ai.models.generateContent({
              model: "gemini-2.0-flash-001",
              contents: `이게 최근 한달간의 소비내역인데, ${JSON.stringify(
                data.data,
                null,
                2
              )} 분석해줘.`,
            });
            console.log(res.text);
          } finally {
            setAiLoading(false);
          }
          const isSuccess = Math.random() > 0.5;
          setCompleteStep(isSuccess ? "달성성공" : "달성실패");
        },
        onError: (error) => {
          const axiosError = error as AxiosError;
          const status = axiosError.response?.status;

          switch (status) {
            case 400:
              show("파일이 첨부되지 않았습니다", "ERROR");
              break;
            case 401:
              show("비밀번호가 올바르지 않습니다", "ERROR");
              break;
            case 422:
              show("파일이 손상되어 다시 업로드해주세요", "ERROR");
              break;
            case 500:
              show("파일 암호 해제에 실패했습니다", "ERROR");
              break;
            default:
              show("잠시후 다시 시도해주세요", "ERROR");
          }
        },
      }
    );
  };

  return (
    <StyledGoalDetailCompleteContent>
      <GoalLoader isOpen={isAnyLoading} />
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
