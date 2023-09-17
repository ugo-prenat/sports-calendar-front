import { FC } from 'react';
import CalendarWeekDayHead from './CalendarWeekDayHead';
import { ICalendarDaySessions } from '@/pages/home/home.models';
import CalendarWeekHourLine from './CalendarWeekHourLine';
import CalendarWeekSessions from './CalendarWeekSessions';
import { isEmpty } from '@/common/utils/utils';

interface ICalendarWeekDayProps {
  calendarDaySessions: ICalendarDaySessions;
  isLoading?: boolean;
}

const CalendarWeekDay: FC<ICalendarWeekDayProps> = ({
  calendarDaySessions,
  isLoading = false
}) => {
  const { date, overlapedSessions } = calendarDaySessions;

  return (
    <div className="flex flex-1 flex-col items-center border-r px-1 relative">
      <CalendarWeekDayHead day={date} />

      <div className="relative w-full h-[calc(100%-0.5rem)]">
        <CalendarWeekHourLine day={date} />

        {isEmpty(overlapedSessions) ? (
          <p className="flex items-center justify-center h-full opacity-30 select-none">
            -
          </p>
        ) : (
          <>
            {overlapedSessions.map((sessions, index) => (
              <CalendarWeekSessions
                sessions={sessions}
                key={index}
                isLoading={isLoading}
              />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default CalendarWeekDay;
