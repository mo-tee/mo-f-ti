import { color } from "@/components/desgin-system";
import { flex, generateCalendar } from "@/utils";
import styled from "styled-components";
import Row from "../Flex/Row";
import { IconArrowLeft, IconArrowRight } from "@/components/icon";
import Column from "../Flex/Column";
import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";
import { useToast } from "@/utils/useToast";

interface DiaryProps {
  onSelectDate: (date: string) => void;
}

const week = ["일", "월", "화", "수", "목", "금", "토"];

const Diary = ({ onSelectDate }: DiaryProps) => {
  const [baseDate, setBaseDate] = useState(dayjs());
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);
  const { show } = useToast();

  const year = baseDate.year();
  const month = baseDate.month();
  const today = dayjs();
  const dates = generateCalendar(year, month);

  const rows = [];
  for (let i = 0; i < dates.length; i += 7) {
    rows.push(dates.slice(i, i + 7));
  }

  const handlePrevMonth = () => {
    setBaseDate((prev) => prev.subtract(1, "month"));
  };

  const handleNextMonth = () => {
    setBaseDate((prev) => prev.add(1, "month"));
  };

  const handleDateClick = (day: number, type: "prev" | "current" | "next") => {
    if (type !== "current") return;

    const clickedDate = dayjs(`${year}-${month + 1}-${day}`);
    const diff = clickedDate.diff(today, "day");

    if (diff <= 30) {
      show("오늘로부터 30일 이후의 날짜만 선택하실 수 있습니다", "ERROR");
    } else {
      setSelectedDate(clickedDate);
      onSelectDate?.(clickedDate.format("YYYY-MM-DD"));
    }
  };

  return (
    <StyledDiary>
      <Column gap={20} width="100%">
        <Column gap={40} width="100%">
          <Row width="100%" justifyContent="space-between" alignItems="center">
            <YearText>{`${year}년 ${month + 1}월`}</YearText>
            <Row gap={10} alignItems="center">
              <IconWrapper onClick={handlePrevMonth}>
                <IconArrowLeft width={24} height={24} />
              </IconWrapper>
              <IconWrapper onClick={handleNextMonth}>
                <IconArrowRight width={24} height={24} />
              </IconWrapper>
            </Row>
          </Row>
          <Row width="100%" justifyContent="space-between">
            {week.map((p) => (
              <WeekText key={p}>{p}</WeekText>
            ))}
          </Row>
        </Column>
        <DateWrapper>
          {[0, 1, 2, 3, 4, 5].map((rowIdx) => (
            <Row key={rowIdx} width="100%" justifyContent="space-between">
              {dates.slice(rowIdx * 7, rowIdx * 7 + 7).map((dateObj, idx) => {
                const isToday =
                  dateObj.type === "current" &&
                  year === today.year() &&
                  month === today.month() &&
                  dateObj.day === today.date();

                const isSelected =
                  selectedDate &&
                  selectedDate.year() === year &&
                  selectedDate.month() === month &&
                  selectedDate.date() === dateObj.day &&
                  dateObj.type === "current";

                return (
                  <DateText
                    key={idx}
                    $dim={dateObj.type !== "current"}
                    $highlight={isSelected || (!selectedDate && isToday)}
                    onClick={() => handleDateClick(dateObj.day, dateObj.type)}
                  >
                    {dateObj.day}
                  </DateText>
                );
              })}
            </Row>
          ))}
        </DateWrapper>
      </Column>
    </StyledDiary>
  );
};

export default Diary;

const StyledDiary = styled.div`
  ${flex({ flexDirection: "column", alignItems: "center" })}
  width: 100%;
  height: 441px;
  background-color: ${color.G0};
  border-radius: 15px;
  padding: 21px 17px 18px 17px;
  gap: 20px;
`;

const YearText = styled.div`
  text-align: center;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  color: ${color.G900};
`;

const WeekText = styled.div`
  width: 38px;
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  color: ${color.G900};
`;

const DateWrapper = styled.div`
  ${flex({ flexDirection: "column" })}
  width: 100%;
  height: 100%;
  border-top: 0.5px solid ${color.G60};
  padding-top: 15px;
  gap: 10px 0px;
`;

const DateText = styled.div<{ $dim?: boolean; $highlight?: boolean }>`
  ${flex({ alignItems: "center", justifyContent: "center" })}
  width: 38px;
  height: 39px;
  border-radius: 50%;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 400;
  color: ${({ $dim }) => ($dim ? color.G50 : color.G900)};
  background-color: ${({ $highlight }) =>
    $highlight ? color.Primary : "transparent"};
  color: ${({ $highlight }) => ($highlight ? color.G0 : undefined)};
  padding: 10px;
`;

const IconWrapper = styled.div`
  width: 24px;
  height: 24px;
`;
