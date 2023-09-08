import { useFnsFormat } from '@/common/hooks/lang.hooks';
import { sliceDaysIntoChunks } from '@/pages/home/home.utils';
import { FC } from 'react';

interface ICalendarMonthViewProps {
  days: Date[];
}

const CalendarMonthView: FC<ICalendarMonthViewProps> = ({ days: rawDays }) => {
  const format = useFnsFormat();

  const days: Date[][] = sliceDaysIntoChunks(rawDays, 7);

  return (
    <div className="flex flex-col flex-1">
      {days.map((day, index) => (
        <div key={index} className="flex flex-1">
          {day.map((d, i) => (
            <p
              key={i}
              className="flex-1 flex px-2 text-xs text-muted-foreground/50"
            >
              {format(d, 'ccc d')}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
};

export default CalendarMonthView;
