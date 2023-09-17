import { differenceInMinutes, startOfDay } from 'date-fns';
import { ICalendarDaySessions, ICalendarSession, IRange } from './home.models';
import { getCalendarDaySessions } from './home.api';
import { useChampionships } from '@/common/hooks/championships.hooks';
import { makeRange } from './home.utils';
import { useFetcher } from '@/common/fetcher/fetcher.hooks';

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

  const props = useFetcher<ICalendarDaySessions[]>(() =>
    getCalendarDaySessions(range, championships)
  );

  return { calendarDaySessions: props.data, ...props };
};
