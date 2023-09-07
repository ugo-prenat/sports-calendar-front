import { FC } from 'react';
import CalendarRangeSelector from './CalendarRangeSelector';

const FiltersColumn: FC = () => {
  return (
    <div className="h-full pr-4 border-r">
      <CalendarRangeSelector />

      <div className="py-4">sports filters</div>
      <div className="pt-4 border-t">championship filters</div>
    </div>
  );
};

export default FiltersColumn;
