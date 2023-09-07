import { FC } from 'react';
import { CalendarView } from '../../../calendar.models';
import CalendarRangeSelector from './CalendarRangeSelector';

interface IFiltersColumnProps {
  calendarView: CalendarView;
}

const FiltersColumn: FC<IFiltersColumnProps> = ({ calendarView }) => {
  return (
    <div className="h-full pr-4 border-r">
      <CalendarRangeSelector calendarView={calendarView} />

      <div className="py-4">sports filters</div>
      <div className="pt-4 border-t">championship filters</div>
    </div>
  );
};

export default FiltersColumn;
