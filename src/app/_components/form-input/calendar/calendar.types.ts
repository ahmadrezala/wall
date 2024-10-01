import { DayValue } from "react-modern-calendar-datepicker";


export type CalendarProps = {
    value: DayValue;
    onChange: (value: DayValue) => void;
}