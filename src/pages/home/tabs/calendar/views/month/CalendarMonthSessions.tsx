import { ICalendarSession } from '@/pages/home/home.models';
import { FC } from 'react';
import CalendarMonthSession from './CalendarMonthSession';
import { Skeleton } from '@/components/ui/skeleton';

interface ICalendarMonthSessionsProps {
  sessions: ICalendarSession[];
  isLoading?: boolean;
}

const CalendarMonthSessions: FC<ICalendarMonthSessionsProps> = ({
  sessions,
  isLoading = false
}) => (
  <div>
    {sessions.map((session, index) => (
      <div key={index}>
        {isLoading ? (
          <Skeleton className="h-6 mb-1" />
        ) : (
          <CalendarMonthSession session={session} />
        )}
      </div>
    ))}
  </div>
);

export default CalendarMonthSessions;
