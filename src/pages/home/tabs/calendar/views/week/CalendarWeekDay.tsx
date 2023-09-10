import { FC } from 'react';
import CalendarWeekDayHead from './CalendarWeekDayHead';
import { ICalendarDaySessions } from '@/pages/home/home.models';
import CalendarWeekHourLine from './CalendarWeekHourLine';
import CalendarWeekSessions from './CalendarWeekSessions';
import { isEmpty } from '@/common/utils/utils';

interface ICalendarWeekDayProps {
  calendarDaySessions: ICalendarDaySessions;
}

const CalendarWeekDay: FC<ICalendarWeekDayProps> = ({
  calendarDaySessions
}) => {
  const { date, overlapedSessions } = calendarDaySessions;

  return (
    <div className="flex flex-1 flex-col items-center border-r px-1 relative">
      <CalendarWeekDayHead day={date} />

      <div className="relative w-full h-[calc(100%-0.5rem)]">
        <CalendarWeekHourLine day={date} />

        {isEmpty(overlapedSessions) ? (
          <p className="flex items-center justify-center h-full opacity-40">
            🏎️
          </p>
        ) : (
          <>
            {overlapedSessions.map((sessions, index) => (
              <CalendarWeekSessions sessions={sessions} key={index} />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default CalendarWeekDay;
