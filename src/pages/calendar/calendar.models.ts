import { CALENDAR_TABS, SCHEDULE_VIEWS } from '@/constants';
import { ReactNode } from 'react';

export type ScheduleView = (typeof SCHEDULE_VIEWS)[number];
export type CalendarTab = (typeof CALENDAR_TABS)[number];

export interface IDateRange {
  from: Date;
  to: Date;
}

export interface ICalendarTab {
  id: CalendarTab;
  label: string;
  content: JSX.Element;
}

export interface IScheduleViewSelector {
  id: ScheduleView;
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
  calendarView: ScheduleView;
  calendarRange: IDateRange;
  setCalendarView: (calendarView: ScheduleView) => void;
  setCalendarRange: (calendarRange: IDateRange) => void;
}
