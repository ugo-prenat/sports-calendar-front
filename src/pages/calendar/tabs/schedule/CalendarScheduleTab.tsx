import { FC } from 'react';
import { CalendarView } from '../../calendar.models';
import FiltersColumn from './filtersColumn/FiltersColumn';
import Schedule from './schedule/Schedule';

interface ICalendarScheduleTabProps {
  calendarView: CalendarView;
}

const CalendarScheduleTab: FC<ICalendarScheduleTabProps> = ({
  calendarView
}) => {
  return (
    <div className="flex h-full">
      <FiltersColumn calendarView={calendarView} />

      <Schedule />
    </div>
  );
};

export default CalendarScheduleTab;
