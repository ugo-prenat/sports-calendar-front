import { FC } from 'react';
import FiltersColumn from './filtersColumn/FiltersColumn';
import Schedule from './schedule/Schedule';

const CalendarScheduleTab: FC = () => {
  return (
    <div className="flex h-full">
      <FiltersColumn />

      <Schedule />
    </div>
  );
};

export default CalendarScheduleTab;
