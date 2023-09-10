import { differenceInMinutes, startOfDay } from 'date-fns';
import { ICalendarSession } from './home.models';

export const useSessionDetails = (session: ICalendarSession) => {
  const sessionStartTime = new Date(session.startTime);
  const sessionEndTime = new Date(session.endTime);

  const isSessionSameDay =
    !session.sessionStartedYesterday && !session.sessionEndsTomorrow;

  const isSessionPast = sessionEndTime < new Date();

  const sessionStartMinutes = differenceInMinutes(
    sessionStartTime,
    startOfDay(sessionStartTime)
  );

  const sessionMinutesNb = differenceInMinutes(
    sessionEndTime,
    sessionStartTime
  );

  return {
    sessionStartMinutes,
    sessionMinutesNb,
    isSessionSameDay,
    isSessionPast
  };
};
