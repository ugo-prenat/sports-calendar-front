import { FC } from 'react';
import FiltersColumn from './filtersColumn/FiltersColumn';
import Calendar from './Calendar';

const CalendarTab: FC = () => {
  return (
    <div className="flex h-full">
      <FiltersColumn />

      <Calendar />
    </div>
  );
};

export default CalendarTab;
