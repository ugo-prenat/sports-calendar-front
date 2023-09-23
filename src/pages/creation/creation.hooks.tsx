import { useFetcher } from '@/common/fetcher/fetcher.hooks';
import { WithoutId, WithoutIds } from '@/common/models/models';
import { IEvent, ISession } from '@/common/models/sports.models';
import { createEvent, createSessions } from './creation.api';
import cleanDeep from 'clean-deep';

export const useSessionsCreation = () => {
  const fetchFunc = (rawSessions: WithoutIds<ISession>[], eventId: string) => {
    const sessions: WithoutId<ISession>[] = rawSessions.map((session) => ({
      ...session,
      eventId
    }));
    return createSessions(cleanDeep(sessions));
  };

  return useFetcher<ISession[], Parameters<typeof fetchFunc>>(fetchFunc);
};

export const useEventCreation = () => {
  const fetchFunc = (rawEvent: WithoutId<IEvent>) =>
    createEvent(cleanDeep(rawEvent));

  return useFetcher<IEvent, Parameters<typeof fetchFunc>>(fetchFunc);
};
