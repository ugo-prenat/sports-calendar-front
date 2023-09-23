import fetcher from '@/common/fetcher/fetcher';
import { WithoutId, WithoutIds } from '@/common/models/models';
import { IEvent, ISession } from '@/common/models/sports.models';

export const createSessions = (
  sessions: Partial<WithoutIds<ISession>[]>
): Promise<ISession[]> => fetcher.post<ISession[]>(`/sessions`, sessions);

export const createEvent = (
  event: Partial<WithoutId<IEvent>>
): Promise<IEvent> => fetcher.post<IEvent>(`/events`, event);
