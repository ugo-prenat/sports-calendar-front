import { ISession } from '@/common/models/sports.models';
import { FC } from 'react';
import CalendarWeekDayHead from './CalendarWeekDayHead';
import CalendarWeekSession from './CalendarWeekSession';

interface ICalendarWeekDayProps {
  day: Date;
  sessions: ISession[];
}

const CalendarWeekDay: FC<ICalendarWeekDayProps> = ({ day }) => {
  const sessions: ISession[] = [
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
      endTime: '2023-09-01T17:00:00+02:00'
    }
  ];

  return (
    <div className="flex flex-1 flex-col items-center border-r">
      <CalendarWeekDayHead day={day} />

      <div className="relative w-full h-full">
        {sessions.map((session, index) => (
          <CalendarWeekSession key={index} session={session} />
        ))}
      </div>
    </div>
  );
};

export default CalendarWeekDay;
