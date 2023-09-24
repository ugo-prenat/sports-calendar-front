import { IEvent, Session } from '@/common/models/sports.models';
import { CHAMPIONSHIPS, SESSIONS, SPORTS_TYPES } from '@/constants';
import { z } from 'zod';
import { IDateRange } from '../home/home.models';

export interface ISchemaSession {
  type: Session;
  startTime: string;
  endTime: string;
}

export interface IEventWithSessions extends ISchemaEvent {
  sessions: ISchemaSession[];
}

export interface ISchemaEvent
  extends Omit<IEvent, 'id' | 'startTime' | 'endTime'> {
  range: IDateRange;
}

export const eventSchema: z.ZodType<IEventWithSessions> = z.object({
  sport: z.enum(SPORTS_TYPES),
  championship: z.enum(CHAMPIONSHIPS),
  regionalized: z.object({
    en: z.object({
      name: z
        .string()
        .nonempty({ message: 'creation.event.regionalized.name.error' }),
      shortName: z.string().optional()
    }),
    fr: z
      .object({
        name: z.string(),
        shortName: z.string().optional()
      })
      .optional()
  }),
  range: z.object({
    from: z.date(),
    to: z.date()
  }),
  country: z.object({
    code: z.string(),
    flag: z.string()
  }),
  location: z.object({
    regionalized: z.object({
      en: z.object({
        name: z.string(),
        shortName: z.string().optional()
      }),
      fr: z
        .object({
          name: z.string(),
          shortName: z.string().optional()
        })
        .optional()
    }),
    coordinates: z
      .object({
        lat: z.number(),
        lng: z.number()
      })
      .optional(),
    track: z.string().optional()
  }),
  sessions: z.array(
    z.object({
      type: z.enum(SESSIONS),
      startTime: z
        .string()
        .datetime({ message: 'creation.event.sessions.time.error' }),
      endTime: z
        .string()
        .datetime({ message: 'creation.event.sessions.time.error' })
    })
  )
});
