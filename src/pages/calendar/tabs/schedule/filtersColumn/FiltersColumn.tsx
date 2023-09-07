import { FC } from 'react';
import { CalendarRange } from '../../../calendar.models';
import CalendarRangeSelector from './CalendarRangeSelector';

interface IFiltersColumnProps {
  calendarRange: CalendarRange;
}

const FiltersColumn: FC<IFiltersColumnProps> = ({ calendarRange }) => {
  return (
    <div className="h-full pr-4 border-r">
      <CalendarRangeSelector calendarRange={calendarRange} />

      <div className="py-4">sports filters</div>
      <div className="pt-4 border-t">championship filters</div>
    </div>
  );
};

export default FiltersColumn;
