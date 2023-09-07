import { FC } from 'react';
import { CalendarRange } from '../../calendar.models';
import FiltersColumn from './filtersColumn/FiltersColumn';
import Schedule from './schedule/Schedule';

interface ICalendarScheduleTabProps {
  calendarRange: CalendarRange;
}

const CalendarScheduleTab: FC<ICalendarScheduleTabProps> = ({
  calendarRange
}) => {
  return (
    <div className="flex h-full">
      <FiltersColumn calendarRange={calendarRange} />

      <Schedule />
    </div>
  );
};

export default CalendarScheduleTab;
