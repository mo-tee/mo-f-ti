import {
  Button,
  DateInput,
  Diary,
  FileUploader,
  Input,
  TextArea,
} from "@/components/common";
import Column from "@/components/common/Flex/Column";
import { flex } from "@/utils";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import ExelPassword from "../ExelPassword/ExelPassword";
import DetailReason from "../DetailReason/DetailReason";
import { useExcelMutation } from "@/services/excel/mutations";
import { useGoalStore } from "@/stores/goal/goal";
import { goalDate } from "@/utils/goalDate";
import { useGoalMutation } from "@/services/goal/mutations";
import { GoogleGenAI } from "@google/genai";
import GoalLoader from "../GoalLoader/GoalLoader";
import { useToast } from "@/utils/useToast";
import { AxiosError } from "axios";

const GoalCreateContent = () => {
  const [goal, setGoal] = useGoalStore();
  const [showDiary, setShowDiary] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [aiLoading, setAiLoading] = useState(false);
  const { excelMutate, isLoading: excelLoading } = useExcelMutation();
  const { goalMutate, isLoading: goalLoading } = useGoalMutation();
  const isAnyLoading = excelLoading || goalLoading || aiLoading;
  const { show } = useToast();

  const passwordStr = goal.password.join("");

  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setShowDiary(false);
      }
    };

    if (showDiary) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [showDiary]);

  const handleOpenDiary = () => {
    setShowDiary(true);
  };

  const ai = new GoogleGenAI({ apiKey: process.env.NEXT_PUBLIC_API_KEY });

  const handleSaveGoal = () => {
    excelMutate(
      { file: goal.file, password: passwordStr },
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
          goalMutate({
            name: goal.title,
            endDate: goal.date,
            problem: goal.problem,
            analysis:
              "현재 소비 패턴에서 가장 큰 문제점은 급작스러운 고액 지출과 불규칙한 자금 흐름입니다. 특히 교통비 관련 지출(고속버스, 철도)에서 예상치 못한 고액 결제가 발생하고, 이에 맞춰 '정홍섭'님으로부터 여러 번의 입금이 이루어지는 것으로 보아, 계획되지 않은 큰 지출이 발생했을 때 잔액이 부족해지는 상황이 반복될 가능성이 있습니다. 이는 자금 관리에 어려움을 줄 수 있으며, 긴급 상황 발생 시 재정적으로 취약해질 수 있습니다.",
            consumptionType: "EXPERIENCE",
            consumptionHabits: [
              "교통비 지출이 잦고 비중이 높습니다.",
              "친목 및 여가 활동에 대한 지출이 있습니다.",
              "다양한 경험을 추구하는 경향이 있습니다.",
            ],
            improvementMethods: [
              "'경험' 소비 전 목표와 예산 설정하기",
              "간편 결제 내역 꼼꼼히 확인하기",
              "지출 내역을 카테고리별로 분류하고 분석하기",
            ],
          });
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
    <StyledGoalCreateContent>
      <GoalLoader isOpen={isAnyLoading} />
      <Column gap={72} width="100%">
        <Column gap={32} width="100%">
          <Input
            label="목표"
            placeholder="목표를 입력해주세요"
            name="title"
            value={goal.title || ""}
            onChange={(e) =>
              setGoal((prev) => ({
                ...prev,
                title: e.target.value,
              }))
            }
          />
          <div ref={wrapperRef}>
            <Column gap={8} width="100%">
              <DateInput
                placeholder="기간을 입력해주세요"
                name="date"
                readOnly
                value={goalDate(goal.date)}
                onClick={handleOpenDiary}
              />
              {showDiary && (
                <Diary
                  onSelectDate={(date: string) => {
                    setGoal((prev) => ({
                      ...prev,
                      date: date,
                    }));
                    setShowDiary(false);
                  }}
                />
              )}
            </Column>
          </div>
          <TextArea
            label="내 소비 습관 문제점"
            placeholder="내 소비 습관의 문제점을 입력해주세요"
            name="problem"
            value={goal.problem || ""}
            onChange={(e) =>
              setGoal((prev) => ({
                ...prev,
                problem: e.target.value,
              }))
            }
          />
          <FileUploader
            onFileChange={(file) => {
              setGoal((prevGoal) => ({
                ...prevGoal,
                file: file,
              }));
            }}
          />
          <ExelPassword
            value={goal.password}
            onChange={(newValue) =>
              setGoal((prev) => ({ ...prev, password: newValue }))
            }
          />
          <DetailReason />
        </Column>
        <Button onClick={handleSaveGoal}>소비 목표 생성</Button>
      </Column>
    </StyledGoalCreateContent>
  );
};

export default GoalCreateContent;

const StyledGoalCreateContent = styled.div`
  ${flex({ flexDirection: "column", alignItems: "center" })}
  width: 100%;
  padding-top: 30px;
  gap: 40px;
  padding-bottom: 64px;
`;
