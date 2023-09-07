import { CalendarProviderContext } from '@/common/contexts/calendar.contexts';
import { useContext } from 'react';

export const useCalendar = () => {
  const context = useContext(CalendarProviderContext);

  if (context === undefined)
    throw new Error('useCalendar must be used within a CalendarProvider');

  return context;
};
