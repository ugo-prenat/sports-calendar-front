import { useCalendar } from '@/common/hooks/calendar.hooks';
import { FC } from 'react';
import { getCalendarMonthDays, getCalendarWeekDays } from '../../home.utils';
import CalendarWeekView from './views/week/CalendarWeekView';
import CalendarMonthView from './views/month/CalendarMonthView';

const Calendar: FC = () => {
  const { calendarRange } = useCalendar();

  const weekDays: Date[] = getCalendarWeekDays(calendarRange);
  const monthDays: Date[] = getCalendarMonthDays(calendarRange);

  return (
    <div className="flex flex-1 max-w-full">
      {weekDays.length <= 7 ? (
        <CalendarWeekView days={weekDays} />
      ) : (
        <CalendarMonthView days={monthDays} />
      )}
    </div>
  );
};

export default Calendar;
