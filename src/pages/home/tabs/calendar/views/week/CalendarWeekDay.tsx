import { ISession } from '@/common/models/sports.models';
import { FC } from 'react';
import CalendarWeekDayHead from './CalendarWeekDayHead';
import CalendarWeekSession from './CalendarWeekSession';
import { ICalendarSession } from '@/pages/home/home.models';
import CalendarWeekHourLine from './CalendarWeekHourLine';

interface ICalendarWeekDayProps {
  day: Date;
  sessions: ISession[];
}

const CalendarWeekDay: FC<ICalendarWeekDayProps> = ({ day }) => {
  const sessions: ICalendarSession[] = [
    {
      id: '7',
      sport: 'motorsports',
      championship: 'f2',
      regionalized: {
        en: {
          name: 'Qualifying 01',
          shortName: 'Q'
        },
        fr: {
          name: "Qualifications c'est trop long",
          shortName: 'Q'
        }
      },
      startTime: '2023-09-01T20:00:00+02:00',
      endTime: '2023-09-01T23:59:00+02:00',

      sessionStartedYesterday: false,
      sessionEndsTomorrow: true
    },
    {
      id: '7',
      sport: 'motorsports',
      championship: 'f2',
      regionalized: {
        en: {
          name: 'Race',
          shortName: 'Q'
        },
        fr: {
          name: 'Race',
          shortName: 'Q'
        }
      },
      startTime: '2023-09-01T09:00:00+02:00',
      endTime: '2023-09-01T10:00:00+02:00',

      sessionStartedYesterday: false,
      sessionEndsTomorrow: false
    },
    {
      id: '7',
      sport: 'motorsports',
      championship: 'f2',
      regionalized: {
        en: {
          name: 'Qualifying 02',
          shortName: 'Q'
        },
        fr: {
          name: "Qualifications c'est trop long",
          shortName: 'Q'
        }
      },
      startTime: '2023-09-02T00:00:00+02:00',
      endTime: '2023-09-02T02:30:00+02:00',

      sessionStartedYesterday: true,
      sessionEndsTomorrow: false
    }
  ];

  return (
    <div className="flex flex-1 flex-col items-center border-r px-1 relative">
      <CalendarWeekDayHead day={day} />

      <div className="relative w-full h-[calc(100%-0.5rem)]">
        <CalendarWeekHourLine day={day} />

        {sessions.map((session, index) => (
          <CalendarWeekSession key={index} session={session} />
        ))}
      </div>
    </div>
  );
};

export default CalendarWeekDay;
