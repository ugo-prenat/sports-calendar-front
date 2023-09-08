import { FC } from 'react';
import CalendarMonthDayHead from './CalendarMonthDayHead';
import { cn } from '@/common/utils/tailwind.utils';
import { useCalendar } from '@/common/hooks/calendar.hooks';
import CalendarMonthSession from './CalendarMonthSession';
import { ICalendarSession } from '@/pages/home/home.models';

interface ICalendarMonthDayProps {
  day: Date;
}

const CalendarMonthDay: FC<ICalendarMonthDayProps> = ({ day }) => {
  const { calendarRange } = useCalendar();

  const month = calendarRange.from.getMonth();
  const isDayOutOfMonth: boolean = month !== day.getMonth();

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
          name: 'Qualifications',
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
    <div className="flex flex-col border-r p-2 pt-0 w-full max-w-fit">
      <CalendarMonthDayHead day={day} />

      <div
        className={cn('flex flex-col', {
          'opacity-20': isDayOutOfMonth
        })}
      >
        {sessions.map((session, index) => (
          <CalendarMonthSession key={index} session={session} />
        ))}
      </div>
    </div>
  );
};

export default CalendarMonthDay;
