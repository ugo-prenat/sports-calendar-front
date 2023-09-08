import { useCalendar } from '@/common/hooks/calendar.hooks';
import { FC } from 'react';
import { getCalendarDays } from '../../home.utils';
import CalendarWeekView from './views/week/CalendarWeekView';
import CalendarMonthView from './views/month/CalendarMonthView';

const Calendar: FC = () => {
  const { calendarRange } = useCalendar();
  const days: Date[] = getCalendarDays(calendarRange);

  return (
    <div className="flex-grow flex just">
      {days.length <= 7 ? (
        <CalendarWeekView days={days} />
      ) : (
        <CalendarMonthView days={days} />
      )}
    </div>
  );
};

export default Calendar;
