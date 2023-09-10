import { ICalendarSession } from '@/pages/home/home.models';
import { FC } from 'react';
import CalendarMonthSession from './CalendarMonthSession';

interface ICalendarMonthSessionsProps {
  sessions: ICalendarSession[];
}

const CalendarMonthSessions: FC<ICalendarMonthSessionsProps> = ({
  sessions
}) => (
  <>
    {sessions.map((session, index) => (
      <CalendarMonthSession key={index} session={session} />
    ))}
  </>
);

export default CalendarMonthSessions;
