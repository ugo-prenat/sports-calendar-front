import { FC, useEffect } from 'react';
import CalendarMonthDay from './CalendarMonthDay';
import { getWeeksInMonth } from 'date-fns';
import { useCalendar } from '@/common/hooks/calendar.hooks';
import { useCalendarDaysSessions } from '@/pages/home/home.hooks';
import { makeLoadingCalendarDaySessions } from '@/pages/home/home.utils';

interface ICalendarMonthViewProps {
  days: Date[];
}

const CalendarMonthView: FC<ICalendarMonthViewProps> = ({ days }) => {
  const { calendarRange } = useCalendar();
  const weeksInMonth = getWeeksInMonth(calendarRange.from, { weekStartsOn: 1 });

  const { calendarDaysSessions, status, handleFetch } =
    useCalendarDaysSessions(days);

  useEffect(() => {
    handleFetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [days]);

  return (
    <>
      {status === 'loading' && (
        <div
          className="grid grid-cols-7 w-full first:border-t border-l"
          style={{
            gridTemplateRows: `repeat(${weeksInMonth}, minmax(0, 1fr))`
          }}
        >
          {days.map((date, index) => (
            <CalendarMonthDay
              key={index}
              calendarDaySessions={makeLoadingCalendarDaySessions(date)}
              isLoading={status === 'loading'}
            />
          ))}
        </div>
      )}
      {status === 'error' && <div>Error</div>}
      {status === 'success' && calendarDaysSessions && (
        <div
          className="grid grid-cols-7 w-full first:border-t border-l"
          style={{
            gridTemplateRows: `repeat(${weeksInMonth}, minmax(0, 1fr))`
          }}
        >
          {calendarDaysSessions.map((calendarDaySessions, index) => (
            <CalendarMonthDay
              key={index}
              calendarDaySessions={calendarDaySessions}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default CalendarMonthView;
