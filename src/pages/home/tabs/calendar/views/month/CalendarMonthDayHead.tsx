import { useCalendar } from '@/common/contexts/calendar/calendar.hooks';
import { useFnsFormat } from '@/common/contexts/lang/lang.hooks';
import { cn } from '@/common/utils/tailwind.utils';
import { isSameDay } from 'date-fns';
import { FC } from 'react';

interface ICalendarMonthDayHeadProps {
  day: Date;
}

const CalendarMonthDayHead: FC<ICalendarMonthDayHeadProps> = ({ day }) => {
  const format = useFnsFormat();
  const { calendarRange } = useCalendar();

  const isToday: boolean = isSameDay(day, new Date());
  const month = calendarRange.from.getMonth();
  const isDayOutOfMonth: boolean = month !== day.getMonth();

  return (
    <div className="flex justify-center pt-1">
      <p
        className={cn(
          'h-6 font-normal text-sm bg-transparent text-muted-foreground mb-1',
          {
            'text-primary font-semibold': isToday,
            'text-muted-foreground/30 ': isDayOutOfMonth
          }
        )}
      >
        {format(day, 'ccc d')}
      </p>
    </div>
  );
};

export default CalendarMonthDayHead;
