import { CALENDAR_RANGES } from '@/constants';

export type CalendarRange = (typeof CALENDAR_RANGES)[number];

export interface IDateRange {
  from: Date;
  to: Date;
}

export interface ICalendarTab {
  id: string;
  label: string;
  content: JSX.Element;
}

export interface ICalendarRangeSelect {
  value: string;
  label: string;
}
