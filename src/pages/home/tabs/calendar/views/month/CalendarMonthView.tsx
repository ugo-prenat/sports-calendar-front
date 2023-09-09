import { FC } from 'react';
import CalendarMonthDay from './CalendarMonthDay';
import { getWeeksInMonth } from 'date-fns';
import { useCalendar } from '@/common/hooks/calendar.hooks';

interface ICalendarMonthViewProps {
  days: Date[];
}

const CalendarMonthView: FC<ICalendarMonthViewProps> = ({ days }) => {
  const { calendarRange } = useCalendar();
  const weeksInMonth = getWeeksInMonth(calendarRange.from, { weekStartsOn: 1 });

  return (
    <div
      className="grid grid-cols-7 w-full first:border-t"
      style={{
        gridTemplateRows: `repeat(${weeksInMonth}, minmax(0, 1fr))`
      }}
    >
      {days.map((day, index) => (
        <CalendarMonthDay key={index} day={day} sessions={[]} />
      ))}
    </div>
  );
};

export default CalendarMonthView;
