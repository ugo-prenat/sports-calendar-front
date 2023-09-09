import { FC } from 'react';
import CalendarMonthDayHead from './CalendarMonthDayHead';
import { cn } from '@/common/utils/tailwind.utils';
import { useCalendar } from '@/common/hooks/calendar.hooks';
import CalendarMonthSession from './CalendarMonthSession';
import { ICalendarSession } from '@/pages/home/home.models';

interface ICalendarMonthDayProps {
  day: Date;
  sessions: ICalendarSession[];
}

const CalendarMonthDay: FC<ICalendarMonthDayProps> = ({ day, sessions }) => {
  const { calendarRange } = useCalendar();

  const month = calendarRange.from.getMonth();
  const isDayOutOfMonth: boolean = month !== day.getMonth();

  return (
    <div className="flex flex-col border-r border-b p-2 pt-0 flex-1">
      <CalendarMonthDayHead day={day} />

      <div
        className={cn('flex flex-col flex-1 overflow-hidden h-12', {
          'opacity-20': isDayOutOfMonth
        })}
      >
        <div>
          {sessions.map((session, index) => (
            <CalendarMonthSession key={index} session={session} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CalendarMonthDay;
