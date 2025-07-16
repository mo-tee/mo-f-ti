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
              contents: `절대 설명 없이 아래와 같은 JSON만 반환하세요.
              입력된 최근 한달간의 소비내역, 소비 목표, 사용자가 생각한 문제점, 추가 사유를 바탕으로
아래 7가지 소비 유형 중에서 **가장 관련이 깊은 한 가지**를 반드시 선택해야 해.
- SAVING: 알뜰하고 신중하게 소비하는 유형 (저축/적은 지출)
- INVESTMENT: 미래를 위한 투자(주식, 펀드, 금융 등)
- FLEX: 큰 고민 없이 다양한 곳에 소비하는 유형
- EXPERIENCE: 여행, 취미, 문화활동에 소비가 집중
- FOOD: 음식, 외식, 배달 등 식비 비중이 높음
- IMPROVEMENT: 자기계발, 교육, 건강에 투자
- SHOPPING: 패션, 생활용품, 잡화 등 쇼핑 비중이 높음

특히, 소비내역에서 **지출의 비중이 가장 큰 영역**이나,
지출 빈도가 높은 카테고리**를 바탕으로 신중하게 분석해서 소비 유형을 골라라.

분석한 문제점은 매우 자세할 수록 좋으니까 자세하게 적어줘, 개선 방법과 분석한 문제점, 유형에 대해서 너무 사용자가 분석한 문제점을 바탕이 아닌 소비 내역을 바탕으로 적어줘.

Return ONLY valid JSON, NO explanation, NO code block, NO markdown, JSON ONLY.  
JSON 포맷, 필드명, 순서, 예시를 그대로 따르세요.  
(만약 설명이 붙거나 JSON이 아니면 무시됩니다.)

예시:
{
    "name": "지갑 벌크업 레츠고",
    "endDate": "2025-07-30",
    "problem": "충동적인 구매가 너무 많아서 쓸모없는걸 계속 사는편",
    "analysis": "충동적인 구매 많음, 스트레스를 구매로 푸는 편",
    "consumptionType": "SHOPPING",
    "consumptionHabits": [
        "충동 구매가 많아요.",
        "스트레스를 받을 때 소비가 증가해요.",
        "쇼핑 빈도가 높아요."
    ],
    "improvementMethods": [
        "구매 전 3번 생각하기",
        "다른 스트레스 해소법 찾기",
        "필요성 점검하기"
    ]
}

입력값:
소비내역: ${JSON.stringify(data.data, null, 2)}
목표명: ${goal.title}
목표기간: ${goal.date}
소비 문제점: ${goal.problem}
추가 내용: ${goal.reason}

분석 후 반드시 위와 같은 JSON 구조로만 답변하세요.`,
            });
            let text = res.text?.trim() ?? "";

            if (text.startsWith("```")) {
              text = text
                .replace(/```[a-zA-Z]*\n?/, "")
                .replace(/```$/, "")
                .trim();
            }

            let aiResult = null;

            try {
              aiResult = JSON.parse(text);
            } catch {
              const jsonMatch = text.match(/\{[\s\S]*\}/);
              if (jsonMatch) {
                aiResult = JSON.parse(jsonMatch[0]);
              } else {
                return;
              }
            }

            goalMutate({
              name: aiResult.name,
              endDate: aiResult.endDate,
              problem: aiResult.problem,
              analysis: aiResult.analysis,
              consumptionType: aiResult.consumptionType,
              consumptionHabits: aiResult.consumptionHabits,
              improvementMethods: aiResult.improvementMethods,
            });
          } finally {
            setAiLoading(false);
          }
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
