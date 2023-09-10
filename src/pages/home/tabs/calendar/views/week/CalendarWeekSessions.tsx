import { FC } from 'react';
import CalendarWeekSession from './CalendarWeekSession';
import { ICalendarSession } from '@/pages/home/home.models';
import { makeSessionStyle } from '@/pages/home/home.utils';

interface ICalendarWeekSessionsProps {
  sessions: ICalendarSession[];
}

const CalendarWeekSessions: FC<ICalendarWeekSessionsProps> = ({ sessions }) => (
  <>
    {sessions.map((session, index) => (
      <CalendarWeekSession
        key={index}
        session={session}
        sessionStyle={makeSessionStyle(sessions, index)}
      />
    ))}
  </>
);

export default CalendarWeekSessions;
