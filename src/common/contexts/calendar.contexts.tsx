import { DEFAULT_CALENDAR_VIEW } from '@/constants';
import {
  CalendarView,
  ICalendarContextProps,
  ICalendarContextState,
  IDateRange
} from '@/pages/home/home.models';
import { getDateRange } from '@/pages/home/home.utils';
import { FC, createContext, useEffect, useState } from 'react';

const initialState: ICalendarContextState = {
  calendarView: DEFAULT_CALENDAR_VIEW,
  calendarRange: getDateRange(DEFAULT_CALENDAR_VIEW),
  setCalendarView: () => null,
  setCalendarRange: () => null
};

export const CalendarProviderContext =
  createContext<ICalendarContextState>(initialState);

export const CalendarProvider: FC<ICalendarContextProps> = ({
  children,
  ...props
}) => {
  const [calendarView, setcalendarView] = useState<CalendarView>(
    DEFAULT_CALENDAR_VIEW
  );
  const [calendarRange, setcalendarRange] = useState<IDateRange>(
    getDateRange(DEFAULT_CALENDAR_VIEW)
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
