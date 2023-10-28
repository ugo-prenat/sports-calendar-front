import {
  IAPIEvent,
  IEvent,
  ISession,
  Session
} from '@/common/models/sports.models';
import {
  DEFAULT_SESSION_DURATION,
  F1,
  FREE_PRACTICE_1,
  MOTORSPORTS,
  SESSIONS_DURATION
} from '@/constants';
import { addDays, addMinutes, addMonths, startOfToday } from 'date-fns';
import {
  IEventWithSessions,
  ISchemaEvent,
  ISchemaSession
} from './creation.models';
import { WithoutId, WithoutIds } from '@/common/models/models';

export const makeVirginEvent = (): ISchemaEvent => ({
  sport: MOTORSPORTS,
  championship: F1,
  regionalized: {
    en: { name: '', shortName: '' },
    fr: { name: '', shortName: '' }
  },
  range: {
    from: addMonths(new Date(), 2),
    to: addDays(addMonths(new Date(), 2), 2)
  },
  country: {
    code: '',
    flag: ''
  },
  location: {
    regionalized: {
      en: { name: '', shortName: '' },
      fr: { name: '', shortName: '' }
    },
    coordinates: { lat: 0, lng: 0 },
    track: ''
  }
});

export const makeVirginSession = ({
  session = FREE_PRACTICE_1,
  startTime,
  endTime
}: {
  session?: Session;
  startTime?: string;
  endTime?: string;
} = {}): ISchemaSession => ({
  type: session,
  startTime: startTime || startOfToday().toISOString(),
  endTime:
    endTime ||
    addMinutes(startOfToday(), getSessionDurartion(session)).toISOString()
});

export const makeEvent = (event: IEventWithSessions): WithoutId<IEvent> => ({
  ...event,
  startTime: event.range.from.toISOString(),
  endTime: event.range.to.toISOString()
});

export const makeSessions = (
  event: IEventWithSessions
): WithoutIds<ISession>[] =>
  event.sessions.map((session) => ({
    ...session,
    sport: event.sport,
    championship: event.championship
  }));

export const makeEventFromAPIToSchema = (event: IAPIEvent): ISchemaEvent => ({
  ...event,
  range: {
    from: new Date(event.startTime),
    to: new Date(event.endTime)
  }
});

export const getSessionDurartion = (session: Session): number =>
  SESSIONS_DURATION[session] || DEFAULT_SESSION_DURATION;
