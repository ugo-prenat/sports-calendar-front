import { FC, useEffect } from 'react';
import CalendarWeekDay from './CalendarWeekDay';
import CalendarWeekHours from './CalendarWeekHours';
import { useCalendarDaysSessions } from '@/pages/home/home.hooks';
import { makeLoadingCalendarDaySessions } from '@/pages/home/home.utils';

interface ICalendarWeekViewProps {
  days: Date[];
}

const CalendarWeekView: FC<ICalendarWeekViewProps> = ({ days }) => {
  const { calendarDaysSessions, status, handleFetch } =
    useCalendarDaysSessions(days);

  useEffect(() => {
    handleFetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [days]);

  return (
    <>
      <CalendarWeekHours />

      {status === 'loading' &&
        days.map((date, index) => (
          <CalendarWeekDay
            key={index}
            calendarDaySessions={makeLoadingCalendarDaySessions(date)}
            isLoading={status === 'loading'}
          />
        ))}
      {status === 'error' && <div>Error</div>}
      {status === 'success' &&
        calendarDaysSessions &&
        calendarDaysSessions.map((calendarDaySessions, index) => (
          <CalendarWeekDay
            key={index}
            calendarDaySessions={calendarDaySessions}
          />
        ))}
    </>
  );
};

export default CalendarWeekView;
