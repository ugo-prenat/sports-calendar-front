import { FC } from 'react';
import FiltersColumn from './filtersColumn/FiltersColumn';
import Calendar from './Calendar';
import ToggleFiltersColumnBtn from './filtersColumn/ToggleFiltersColumnBtn';
import { usePreferences } from '@/common/contexts/preferences/preferences.hooks';

const CalendarTab: FC = () => {
  const { isFiltersColumnOpen, toggleFiltersColumn } = usePreferences();

  return (
    <div className="flex h-full">
      <FiltersColumn />
      <Calendar />

      {!isFiltersColumnOpen && (
        <ToggleFiltersColumnBtn
          action="open"
          toggleFiltersColumn={toggleFiltersColumn}
        />
      )}
    </div>
  );
};

export default CalendarTab;
