import { ISession } from '@/common/models/sports.models';
import { ICalendarDaySessions } from './home.models';

const F1_MONZA_SESSIONS_MOCK: ISession[] = [
  {
    id: '1',
    sport: 'motorsports',
    championship: 'f1',
    regionalized: {
      en: {
        name: 'Free Practice 1',
        shortName: 'FP1'
      },
      fr: {
        name: 'Essais Libres 1',
        shortName: 'EL1'
      }
    },
    startTime: '2023-09-01T13:30:00+02:00',
    endTime: '2023-09-01T14:30:00+02:00'
  },
  {
    id: '2',
    sport: 'motorsports',
    championship: 'f1',
    regionalized: {
      en: {
        name: 'Free Practice 2',
        shortName: 'FP2'
      },
      fr: {
        name: 'Essais Libres 2',
        shortName: 'EL2'
      }
    },
    startTime: '2023-09-01T17:00:00+02:00',
    endTime: '2023-09-01T18:00:00+02:00'
  },
  {
    id: '3',
    sport: 'motorsports',
    championship: 'f1',
    regionalized: {
      en: {
        name: 'Free Practice 3',
        shortName: 'FP3'
      },
      fr: {
        name: 'Essais Libres 3',
        shortName: 'EL3'
      }
    },
    startTime: '2023-09-02T12:30:00+02:00',
    endTime: '2023-09-02T13:30:00+02:00'
  },
  {
    id: '4',
    sport: 'motorsports',
    championship: 'f1',
    regionalized: {
      en: {
        name: 'Qualifying',
        shortName: 'Q'
      },
      fr: {
        name: 'Qualifications',
        shortName: 'Q'
      }
    },
    startTime: '2023-09-02T16:00:00+02:00',
    endTime: '2023-09-02T17:00:00+02:00'
  },
  {
    id: '5',
    sport: 'motorsports',
    championship: 'f1',
    regionalized: {
      en: {
        name: 'Race'
      },
      fr: {
        name: 'Course'
      }
    },
    startTime: '2023-09-03T15:00:00+02:00',
    endTime: '2023-09-03T17:00:00+02:00'
  }
];

const F2_MONZA_SESSIONS_MOCK: ISession[] = [
  {
    id: '6',
    sport: 'motorsports',
    championship: 'f2',
    regionalized: {
      en: {
        name: 'Free Practice',
        shortName: 'FP'
      },
      fr: {
        name: 'Essais Libres',
        shortName: 'EL'
      }
    },
    startTime: '2023-09-01T11:05:00+02:00',
    endTime: '2023-09-01T11:50:00+02:00'
  },
  {
    id: '7',
    sport: 'motorsports',
    championship: 'f2',
    regionalized: {
      en: {
        name: 'Qualifying',
        shortName: 'Q'
      },
      fr: {
        name: 'Qualifications',
        shortName: 'Q'
      }
    },
    startTime: '2023-09-01T16:00:00+02:00',
    endTime: '2023-09-01T16:30:00+02:00'
  },
  {
    id: '8',
    sport: 'motorsports',
    championship: 'f2',
    regionalized: {
      en: {
        name: 'Sprint Race',
        shortName: 'SR'
      },
      fr: {
        name: 'Course Sprint',
        shortName: 'CS'
      }
    },
    startTime: '2023-09-02T14:15:00+02:00',
    endTime: '2023-09-02T15:00:00+02:00'
  },
  {
    id: '9',
    sport: 'motorsports',
    championship: 'f2',
    regionalized: {
      en: {
        name: 'Feature Race',
        shortName: 'FR'
      },
      fr: {
        name: 'Course Principale',
        shortName: 'CP'
      }
    },
    startTime: '2023-09-03T09:55:00+02:00',
    endTime: '2023-09-03T10:55:00+02:00'
  }
];

export const F1_SESSIONS_MOCK: ISession[] = [
  ...F1_MONZA_SESSIONS_MOCK,
  ...F2_MONZA_SESSIONS_MOCK
];

const base: ISession = {
  id: '1',
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
      [
        {
          ...base,
          championship: 'f2',
          regionalized: { en: { name: '00h - 07h' } },
          startTime: '2023-09-09T00:00:00+02:00',
          endTime: '2023-09-09T07:00:00+02:00',
          sessionStartedYesterday: true,
          sessionEndsTomorrow: false
        },
        {
          ...base,
          regionalized: { en: { name: '02h - 05h' } },
          startTime: '2023-09-09T02:00:00+02:00',
          endTime: '2023-09-09T05:00:00+02:00',
          sessionStartedYesterday: false,
          sessionEndsTomorrow: false
        },
        {
          ...base,
          championship: 'f3',
          regionalized: { en: { name: '00h - 10h' } },
          startTime: '2023-09-09T00:00:00+02:00',
          endTime: '2023-09-09T10:00:00+02:00',
          sessionStartedYesterday: false,
          sessionEndsTomorrow: false
        }
      ],
      [
        {
          ...base,
          regionalized: { en: { name: '16h - 17h' } },
          startTime: '2023-09-09T16:00:00+02:00',
          endTime: '2023-09-09T17:00:00+02:00',
          sessionStartedYesterday: false,
          sessionEndsTomorrow: false
        }
      ]
    ]
  }
];
