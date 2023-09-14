import { ISession } from '@/common/models/sports.models';
import { ICalendarDaySessions } from './home.models';

const base: ISession = {
  id: '1',
  eventId: '1',
  regionalized: { en: { name: 'Grand Prix de France' } },
  sport: 'motorsports',
  championship: 'f1',
  startTime: '2023-09-09T13:00:00+02:00',
  endTime: '2023-09-09T15:00:00+02:00'
};

export const MOCK_CALENDAR_DAY_SESSIONS: ICalendarDaySessions[] = [
  {
    date: new Date('2023-09-08T13:00:00+02:00'),
    overlapedSessions: []
  },
  {
    date: new Date('2023-09-09T13:00:00+02:00'),
    overlapedSessions: [
      [
        {
          ...base,
          championship: 'f2',
          regionalized: { en: { name: '13h - 00h' } },
          startTime: '2023-09-09T13:00:00+02:00',
          endTime: '2023-09-09T23:59:00+02:00',
          sessionStartedYesterday: false,
          sessionEndsTomorrow: true
        },
        {
          ...base,
          regionalized: { en: { name: '12h - 14h' } },
          startTime: '2023-09-09T12:00:00+02:00',
          endTime: '2023-09-09T14:00:00+02:00',
          sessionStartedYesterday: false,
          sessionEndsTomorrow: false
        }
      ],
      [
        {
          ...base,
          regionalized: { en: { name: '02h - 03h' } },
          startTime: '2023-09-09T02:00:00+02:00',
          endTime: '2023-09-09T03:00:00+02:00',
          sessionStartedYesterday: false,
          sessionEndsTomorrow: false
        }
      ]
    ]
  },
  {
    date: new Date('2023-09-10T13:00:00+02:00'),
    overlapedSessions: [
      // [
      //   {
      //     ...base,
      //     championship: 'f2',
      //     regionalized: { en: { name: '00h - 07h' } },
      //     startTime: '2023-09-09T00:00:00+02:00',
      //     endTime: '2023-09-09T07:00:00+02:00',
      //     sessionStartedYesterday: true,
      //     sessionEndsTomorrow: false
      //   },
      //   {
      //     ...base,
      //     regionalized: { en: { name: '02h - 05h' } },
      //     startTime: '2023-09-09T02:00:00+02:00',
      //     endTime: '2023-09-09T05:00:00+02:00',
      //     sessionStartedYesterday: false,
      //     sessionEndsTomorrow: false
      //   },
      //   {
      //     ...base,
      //     championship: 'f3',
      //     regionalized: { en: { name: '00h - 10h' } },
      //     startTime: '2023-09-09T00:00:00+02:00',
      //     endTime: '2023-09-09T10:00:00+02:00',
      //     sessionStartedYesterday: false,
      //     sessionEndsTomorrow: false
      //   }
      // ],
      [
        {
          ...base,
          regionalized: { en: { name: '16h - 17h' } },
          startTime: '2023-09-10T16:00:00+02:00',
          endTime: '2023-09-10T17:00:00+02:00',
          sessionStartedYesterday: false,
          sessionEndsTomorrow: false
        }
      ],
      [
        {
          ...base,
          regionalized: { en: { name: '16h - 17h' } },
          startTime: '2023-09-10T19:00:00+02:00',
          endTime: '2023-09-10T20:00:00+02:00',
          sessionStartedYesterday: false,
          sessionEndsTomorrow: false
        }
      ]
    ]
  }
];
