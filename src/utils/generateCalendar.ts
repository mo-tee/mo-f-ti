import dayjs from "dayjs";

const generateCalendar = (year: number, month: number) => {
  const currentMonth = dayjs(`${year}-${month + 1}-01`);
  const startDay = currentMonth.startOf("month").day();
  const daysInMonth = currentMonth.daysInMonth();

  const prevMonth = currentMonth.subtract(1, "month");
  const prevDaysInMonth = prevMonth.daysInMonth();

  const prevDates = Array.from({ length: startDay }, (_, i) => ({
    day: prevDaysInMonth - startDay + 1 + i,
    type: "prev" as const,
  }));

  const currentDates = Array.from({ length: daysInMonth }, (_, i) => ({
    day: i + 1,
    type: "current" as const,
  }));

  const nextCount = 42 - (prevDates.length + currentDates.length);
  const nextDates = Array.from({ length: nextCount }, (_, i) => ({
    day: i + 1,
    type: "next" as const,
  }));

  return [...prevDates, ...currentDates, ...nextDates];
};

export default generateCalendar;
