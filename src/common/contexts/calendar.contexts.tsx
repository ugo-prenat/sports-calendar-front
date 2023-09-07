import { DEFAULT_SCHEDULE_VIEW } from '@/constants';
import {
  ScheduleView,
  ICalendarContextProps,
  ICalendarContextState,
  IDateRange
} from '@/pages/calendar/calendar.models';
import { getDateRange } from '@/pages/calendar/calendar.utils';
import { FC, createContext, useEffect, useState } from 'react';

const initialState: ICalendarContextState = {
  calendarView: DEFAULT_SCHEDULE_VIEW,
  calendarRange: getDateRange(DEFAULT_SCHEDULE_VIEW),
  setCalendarView: () => null,
  setCalendarRange: () => null
};

export const CalendarProviderContext =
  createContext<ICalendarContextState>(initialState);

export const CalendarProvider: FC<ICalendarContextProps> = ({
  children,
  ...props
}) => {
  const [calendarView, setcalendarView] = useState<ScheduleView>(
    DEFAULT_SCHEDULE_VIEW
  );
  const [calendarRange, setcalendarRange] = useState<IDateRange>(
    getDateRange(DEFAULT_SCHEDULE_VIEW)
  );

  useEffect(() => {
    setcalendarRange(getDateRange(calendarView));
  }, [calendarView]);

  const value = {
    calendarView,
    calendarRange,
    setCalendarView: setcalendarView,
    setCalendarRange: setcalendarRange
  };
  return (
    <CalendarProviderContext.Provider {...props} value={value}>
      {children}
    </CalendarProviderContext.Provider>
  );
};
