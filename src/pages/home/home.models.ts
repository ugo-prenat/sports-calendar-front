import { CALENDAR_VIEWS } from '@/constants';
import { ReactNode } from 'react';

export type CalendarView = (typeof CALENDAR_VIEWS)[number];

export interface IDateRange {
  from: Date;
  to: Date;
}

export interface ICalendarTab {
  id: CalendarView;
  label: string;
}

export interface ICalendarRangeSelect {
  value: string;
  label: string;
}

export interface ICalendarContextProps {
  children: ReactNode;
}

export interface ICalendarContextState {
  calendarView: CalendarView;
  calendarRange: IDateRange;
  setCalendarView: (calendarView: CalendarView) => void;
  setCalendarRange: (calendarRange: IDateRange) => void;
}
