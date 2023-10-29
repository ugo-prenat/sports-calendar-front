import { useContext } from 'react';
import { CalendarProviderContext } from './calendar.contexts';

export const useCalendar = () => {
  const context = useContext(CalendarProviderContext);

  if (context === undefined)
    throw new Error('useCalendar must be used within a CalendarProvider');

  return context;
};
