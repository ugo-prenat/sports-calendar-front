import { sliceDaysIntoChunks } from '@/pages/home/home.utils';
import { FC } from 'react';
import CalendarMonthDay from './CalendarMonthDay';

interface ICalendarMonthViewProps {
  days: Date[];
}

const CalendarMonthView: FC<ICalendarMonthViewProps> = ({ days: rawDays }) => {
  const days: Date[][] = sliceDaysIntoChunks(rawDays, 7);

  return (
    <div className="flex flex-col flex-1 first:border-t">
      {days.map((day, index) => (
        <div key={index} className="flex flex-1 border-b">
          {day.map((d, i) => (
            <CalendarMonthDay key={i} day={d} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default CalendarMonthView;
