import { WithoutIds } from '@/common/models/models';
import { ISession } from '@/common/models/sports.models';
import { CHAMPIONSHIPS, SPORTS_TYPES } from '@/constants';
import { z } from 'zod';
import { ISchemaEvent } from './creation.utils';

export interface IEventWithSessions extends ISchemaEvent {
  sessions: WithoutIds<ISession>[];
}

export const eventSchema: z.ZodType<IEventWithSessions> = z.object({
  sport: z.enum(SPORTS_TYPES),
  championship: z.enum(CHAMPIONSHIPS),
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
      sport: z.enum(SPORTS_TYPES),
      championship: z.enum(CHAMPIONSHIPS),
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
      startTime: z.string(),
      endTime: z.string()
    })
  )
});
