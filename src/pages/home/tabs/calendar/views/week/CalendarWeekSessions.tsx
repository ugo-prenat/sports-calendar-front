import { FC } from 'react';
import CalendarWeekSession from './CalendarWeekSession';
import { ICalendarSession } from '@/pages/home/home.models';
import { makeSessionStyle } from '@/pages/home/home.utils';
import CalendarWeekLoadingSession from './CalendarWeekLoadingSession';

interface ICalendarWeekSessionsProps {
  sessions: ICalendarSession[];
  isLoading?: boolean;
}

const CalendarWeekSessions: FC<ICalendarWeekSessionsProps> = ({
  sessions,
  isLoading = false
}) => (
  <>
    {sessions.map((session, index) => (
      <>
        {isLoading ? (
          <CalendarWeekLoadingSession
            key={index}
            session={session}
            sessionStyle={makeSessionStyle(sessions, index)}
          />
        ) : (
          <CalendarWeekSession
            key={index}
            session={session}
            sessionStyle={makeSessionStyle(sessions, index)}
          />
        )}
      </>
    ))}
  </>
);

export default CalendarWeekSessions;
