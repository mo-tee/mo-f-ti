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

const GoalCreateContent = () => {
  const [showDiary, setShowDiary] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [thumbnail, setThumbnail] = useState<File | null>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

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

  const handleDiarySelect = (date: string) => {
    setSelectedDate(date);
    setShowDiary(false);
  };

  return (
    <StyledGoalCreateContent>
      <ThumbnailInput onChange={setThumbnail} />
      <Column gap={72} width="100%">
        <Column gap={32} width="100%">
          <Input
            label="목표"
            placeholder="목표를 입력해주세요"
            name="goal"
            onChange={() => {}}
          />
          <div ref={wrapperRef}>
            <Column gap={8} width="100%">
              <DateInput
                placeholder="기간을 입력해주세요"
                name="date"
                readOnly
                value={selectedDate}
                onClick={handleOpenDiary}
              />
              {showDiary && <Diary onSelectDate={handleDiarySelect} />}
            </Column>
          </div>
          <TextArea
            label="내 소비 습관 문제점"
            placeholder="내 소비 습관의 문제점을 입력해주세요"
          />
          <FileUploader />
          <ExelPassword />
          <DetailReason />
        </Column>
        <Button onClick={() => {}}>소비 목표 생성</Button>
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
