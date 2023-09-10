import { FC } from 'react';
import CalendarMonthDayHead from './CalendarMonthDayHead';
import { cn } from '@/common/utils/tailwind.utils';
import { useCalendar } from '@/common/hooks/calendar.hooks';
import { ICalendarDaySessions } from '@/pages/home/home.models';
import CalendarMonthSessions from './CalendarMonthSessions';

interface ICalendarMonthDayProps {
  calendarDaySessions: ICalendarDaySessions;
}

const CalendarMonthDay: FC<ICalendarMonthDayProps> = ({
  calendarDaySessions
}) => {
  const { date, overlapedSessions } = calendarDaySessions;
  const { calendarRange } = useCalendar();

  const month = calendarRange.from.getMonth();
  const isDayOutOfMonth: boolean = month !== date.getMonth();

  return (
    <div className="flex flex-col border-r border-b p-2 pt-0 flex-1">
      <CalendarMonthDayHead day={date} />

      <div
        className={cn('flex flex-col flex-1 overflow-hidden h-12', {
          'opacity-20': isDayOutOfMonth
        })}
      >
        {overlapedSessions.map((sessions, index) => (
          <CalendarMonthSessions sessions={sessions} key={index} />
        ))}
      </div>
    </div>
  );
};

export default CalendarMonthDay;
