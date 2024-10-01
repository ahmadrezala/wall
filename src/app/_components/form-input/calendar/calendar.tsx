import React from "react";
import { Calendar, DayValue } from "react-modern-calendar-datepicker";
import "react-modern-calendar-datepicker/lib/DatePicker.css";

interface PersianCalendarProps {
  value: DayValue;
  onChange: (value: DayValue) => void;
}

const PersianCalendar: React.FC<PersianCalendarProps> = ({
  value,
  onChange,
}) => {
  return (
    <Calendar
      value={value}
      onChange={onChange}
      shouldHighlightWeekends
      locale="fa"
    />
  );
};

export default PersianCalendar;
