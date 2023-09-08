import { useFnsFormat } from '@/common/hooks/lang.hooks';
import { cn } from '@/common/utils/tailwind.utils';
import { Badge } from '@/components/ui/badge';
import { isSameDay } from 'date-fns';
import { FC } from 'react';

interface ICalendarWeekDayHeadProps {
  day: Date;
}

const CalendarWeekDayHead: FC<ICalendarWeekDayHeadProps> = ({ day }) => {
  const format = useFnsFormat();
  const isToday: boolean = isSameDay(day, new Date());

  return (
    <Badge
      className={cn(
        'h-6 font-normal text-sm bg-transparent text-primary/50 mb-1',
        {
          'bg-primary text-primary-foreground font-bold': isToday
        }
      )}
    >
      {format(day, 'ccc d')}
    </Badge>
  );
};

export default CalendarWeekDayHead;
