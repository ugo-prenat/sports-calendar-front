import { IAPISession, ISession } from '@/common/models/sports.models';
import { CALENDAR_VIEWS, TAB_IDS } from '@/constants';
import { ReactNode } from 'react';

export type CalendarView = (typeof CALENDAR_VIEWS)[number];
export type TabId = (typeof TAB_IDS)[number];

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

//  FAKE LOADING SESSIONS
const LOADING_SESSION: ICalendarSession = {
  id: '',
  eventId: '',
  sport: 'motorsports',
  championship: 'f1',
  type: 'free-practice',
  startTime: new Date().toISOString(),
  endTime: new Date().toISOString(),
  sessionStartedYesterday: false,
  sessionEndsTomorrow: false
};

const ZERO_SESSION: ICalendarSession[][] = [];

const ONE_SESSION: ICalendarSession[][] = [
  [
    {
      ...LOADING_SESSION,
      startTime: new Date('2023-01-01T10:00:00.000Z').toISOString(),
      endTime: new Date('2023-01-01T12:00:00.000Z').toISOString()
    }
  ]
];

const TWO_SESSIONS: ICalendarSession[][] = [
  [
    {
      ...LOADING_SESSION,
      startTime: new Date('2023-01-01T03:00:00.000Z').toISOString(),
      endTime: new Date('2023-01-01T05:00:00.000Z').toISOString()
    }
  ],
  [
    {
      ...LOADING_SESSION,
      startTime: new Date('2023-01-01T15:00:00.000Z').toISOString(),
      endTime: new Date('2023-01-01T16:30:00.000Z').toISOString()
    }
  ]
];

const THREE_SESSIONS: ICalendarSession[][] = [
  [
    {
      ...LOADING_SESSION,
      startTime: new Date('2023-01-01T11:00:00.000Z').toISOString(),
      endTime: new Date('2023-01-01T15:00:00.000Z').toISOString()
    },
    {
      ...LOADING_SESSION,
      startTime: new Date('2023-01-01T12:00:00.000Z').toISOString(),
      endTime: new Date('2023-01-01T13:30:00.000Z').toISOString()
    }
  ],
  [
    {
      ...LOADING_SESSION,
      startTime: new Date('2023-01-01T20:00:00.000Z').toISOString(),
      endTime: new Date('2023-01-01T21:30:00.000Z').toISOString()
    }
  ]
];

export const LOADING_OVERLAPED_SESSIONS: ICalendarSession[][][] = [
  ZERO_SESSION,
  ONE_SESSION,
  TWO_SESSIONS,
  THREE_SESSIONS
];
