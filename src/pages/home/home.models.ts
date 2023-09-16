import { IAPISession, ISession } from '@/common/models/sports.models';
import { CALENDAR_VIEWS, UPCOMING } from '@/constants';
import { ReactNode } from 'react';

export type CalendarView = (typeof CALENDAR_VIEWS)[number];
export type TabId = CalendarView | typeof UPCOMING;

export interface IDateRange {
  from: Date;
  to: Date;
}

export interface ICalendarTab {
  id: TabId;
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

export interface ICalendarSession extends ISession {
  sessionStartedYesterday: boolean;
  sessionEndsTomorrow: boolean;
}

export interface IAPICalendarSession extends IAPISession {
  sessionStartedYesterday: boolean;
  sessionEndsTomorrow: boolean;
}

export interface ICalendarDaySessions {
  date: string;
  overlapedSessions: ICalendarSession[][];
}

export interface IAPICalendarDaySessions {
  date: string;
  overlapedSessions: IAPICalendarSession[][];
}

export interface IRange {
  start: Date;
  end: Date;
}
