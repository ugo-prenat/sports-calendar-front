import { FC } from 'react';
import CalendarRangeSelector from './CalendarRangeSelector';
import { cn } from '@/common/utils/tailwind.utils';
import { usePreferences } from '@/common/hooks/preferences.hooks';
import { useCalendar } from '@/common/hooks/calendar.hooks';
import { MONTH } from '@/constants';
import ToggleFiltersColumnBtn from './ToggleFiltersColumnBtn';

const FiltersColumn: FC = () => {
  const { isFiltersColumnOpen, toggleFiltersColumn } = usePreferences();
  const { calendarView } = useCalendar();

  return (
    <div
      className={cn('flex flex-col h-full pr-4', {
        hidden: !isFiltersColumnOpen,
        'border-r': calendarView !== MONTH
      })}
    >
      <CalendarRangeSelector />

      <div className="pt-4 border-t opacity-30 flex-1">
        championship filters
      </div>

      <div className="flex justify-end">
        <ToggleFiltersColumnBtn
          action="close"
          toggleFiltersColumn={toggleFiltersColumn}
        />
      </div>
    </div>
  );
};

export default FiltersColumn;
