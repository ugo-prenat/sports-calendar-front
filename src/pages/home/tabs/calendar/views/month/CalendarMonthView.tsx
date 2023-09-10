import { FC, useEffect, useState } from 'react';
import CalendarMonthDay from './CalendarMonthDay';
import { getWeeksInMonth } from 'date-fns';
import { useCalendar } from '@/common/hooks/calendar.hooks';
import { MOCK_CALENDAR_DAY_SESSIONS } from '@/pages/home/mock';
import { ICalendarDaySessions } from '@/pages/home/home.models';
import { MONTH } from '@/constants';

interface ICalendarMonthViewProps {
  days: Date[];
}

const CalendarMonthView: FC<ICalendarMonthViewProps> = ({ days }) => {
  const { calendarRange, calendarView } = useCalendar();
  const [calendarDaysSessions, setCalendarDaysSessions] = useState<
    ICalendarDaySessions[]
  >([]);
  const weeksInMonth = getWeeksInMonth(calendarRange.from, { weekStartsOn: 1 });

  const handleGetDaysSessions = (): ICalendarDaySessions[] => {
    // fetch here
    console.log('fetch sessions for', days.length, 'days');

    return days.map((day, i) => ({
      date: day,
      overlapedSessions:
        MOCK_CALENDAR_DAY_SESSIONS[i - 16]?.overlapedSessions || []
    }));
  };

  useEffect(() => {
    if (calendarView !== MONTH) return;
    setCalendarDaysSessions(handleGetDaysSessions());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [days]);

  return (
    <div
      className="grid grid-cols-7 w-full first:border-t"
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
  );
};

export default CalendarMonthView;
