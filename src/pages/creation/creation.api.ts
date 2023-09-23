import fetcher from '@/common/fetcher/fetcher';
import { WithoutId, WithoutIds } from '@/common/models/models';
import {
  IAPIEvent,
  IAPISession,
  IEvent,
  ISession
} from '@/common/models/sports.models';

export const createSessions = (
  sessions: Partial<WithoutIds<ISession>[]>
): Promise<IAPISession[]> => fetcher.post<IAPISession[]>(`/sessions`, sessions);

export const createEvent = (
  event: Partial<WithoutId<IEvent>>
): Promise<IAPIEvent> => fetcher.post<IAPIEvent>(`/events`, event);
