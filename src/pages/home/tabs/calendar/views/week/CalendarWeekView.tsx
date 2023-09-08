import { ISession } from '@/common/models/sports.models';
import { F1_SESSIONS_MOCK } from '@/pages/home/mock';
import { FC } from 'react';
import CalendarWeekDay from './CalendarWeekDay';
import { useTranslation } from '@/common/hooks/lang.hooks';
import { getHours } from '@/pages/home/home.utils';

interface ICalendarWeekViewProps {
  days: Date[];
}

const CalendarWeekView: FC<ICalendarWeekViewProps> = ({ days }) => {
  const { fnsLocale } = useTranslation();

  const sessions: ISession[] = F1_SESSIONS_MOCK;
  const hours = getHours(fnsLocale);

  return (
    <>
      <div className="mt-7">
        <div className="h-full flex flex-col">
          {hours.map((hour, index) => (
            <p
              key={index}
              className="flex-1 flex justify-end px-2 text-xs text-muted-foreground/50 -mt-[0.40rem]"
            >
              {hour}
            </p>
          ))}
        </div>
      </div>

      {days.map((day, index) => (
        <CalendarWeekDay key={index} day={day} sessions={sessions} />
      ))}
    </>
  );
};

export default CalendarWeekView;
