import { differenceInMinutes, startOfDay } from 'date-fns';
import { ICalendarDaySessions, ICalendarSession, IRange } from './home.models';

import { useQuery } from 'react-query';
import { getCalendarDaySessions } from './home.api';
import { useChampionships } from '@/common/hooks/championships.hooks';
import { makeRange } from './home.utils';
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

export const useCalendarDaySessions = (days: Date[]) => {
  const { championships } = useChampionships();
  const range: IRange = makeRange(days);

  return useQuery<ICalendarDaySessions[]>(['calendarDaySessions'], () =>
    getCalendarDaySessions(range, championships)
  );
};
