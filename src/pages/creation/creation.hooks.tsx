import { useFetcher } from '@/common/fetcher/fetcher.hooks';
import { WithoutId, WithoutIds } from '@/common/models/models';
import {
  IAPIEvent,
  IAPIEventWithSessions,
  IAPISession,
  IEvent,
  ISession
} from '@/common/models/sports.models';
import { createEvent, createSessions, getEvents } from './creation.api';
import cleanDeep from 'clean-deep';

export const useSessionsCreation = () => {
  const fetchFunc = (rawSessions: WithoutIds<ISession>[], eventId: string) => {
    const sessions: WithoutId<ISession>[] = rawSessions.map((session) => ({
      ...session,
      eventId
    }));
    return createSessions(cleanDeep(sessions));
  };

  return useFetcher<IAPISession[], Parameters<typeof fetchFunc>>(fetchFunc);
};

export const useEventCreation = () => {
  const fetchFunc = (rawEvent: WithoutId<IEvent>) =>
    // createEvent(cleanDeep(rawEvent));
    createEvent(
      cleanDeep({
        ...rawEvent,
        location: { regionalized: { en: { name: 'test' } } },
        country: { code: 'FR', flag: 'flag url' }
      })
    );

  return useFetcher<IAPIEvent, Parameters<typeof fetchFunc>>(fetchFunc);
};

export const useEvents = () => useFetcher<IAPIEventWithSessions[]>(getEvents);
