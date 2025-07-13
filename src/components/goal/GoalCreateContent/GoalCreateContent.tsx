import {
  Button,
  DateInput,
  Diary,
  FileUploader,
  Input,
  TextArea,
  ThumbnailInput,
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

const GoalCreateContent = () => {
  const [goal, setGoal] = useGoalStore();
  const [showDiary, setShowDiary] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const { excelMutate } = useExcelMutation();

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

  const handleSaveGoal = () => {
    excelMutate({ file: goal.file, password: passwordStr });
  };

  return (
    <StyledGoalCreateContent>
      <ThumbnailInput
        onChange={(file) => {
          setGoal((prev) => ({
            ...prev,
            thumnail: file,
          }));
        }}
      />
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
          <ExelPassword />
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
