import { FC, useEffect } from 'react';
import CalendarMonthDay from './CalendarMonthDay';
import { getWeeksInMonth } from 'date-fns';
import { useCalendar } from '@/common/hooks/calendar.hooks';
import { useCalendarDaysSessions } from '@/pages/home/home.hooks';
import { makeLoadingCalendarDaySessions } from '@/pages/home/home.utils';
import { useChampionships } from '@/common/hooks/championships.hooks';
import { useTranslation } from '@/common/hooks/lang.hooks';
import { isEmpty, isNotEmpty } from '@/common/utils/utils';
import Alert from '@/components/Alert';

interface ICalendarMonthViewProps {
  days: Date[];
}

const CalendarMonthView: FC<ICalendarMonthViewProps> = ({ days }) => {
  const { t } = useTranslation();
  const { calendarRange } = useCalendar();
  const { championships } = useChampionships();

  const weeksInMonth = getWeeksInMonth(calendarRange.from, { weekStartsOn: 1 });

  const { calendarDaysSessions, status, handleFetch } =
    useCalendarDaysSessions(days);

  useEffect(() => {
    if (isNotEmpty(championships)) handleFetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [days, championships]);

  return (
    <>
      {status === 'loading' && (
        <div
          className="grid grid-cols-7 w-full first:border-t border-l"
          style={{
            gridTemplateRows: `repeat(${weeksInMonth}, minmax(0, 1fr))`
          }}
        >
          {days.map((date, index) => (
            <CalendarMonthDay
              key={index}
              calendarDaySessions={makeLoadingCalendarDaySessions(date)}
              isLoading={status === 'loading'}
            />
          ))}
        </div>
      )}

      {status === 'error' && isNotEmpty(championships) && (
        <Alert
          variant="error"
          text={t('calendar.receive.sessions.error')}
          retry={handleFetch}
        />
      )}

      {isEmpty(championships) && (
        <Alert
          variant="warning"
          text={t('calendar.receive.sessions.noChampionships')}
        />
      )}

      {status === 'success' &&
        calendarDaysSessions &&
        isNotEmpty(championships) && (
          <div
            className="grid grid-cols-7 w-full first:border-t border-l"
            style={{
              gridTemplateRows: `repeat(${weeksInMonth}, minmax(0, 1fr))`
            }}
          >
            {calendarDaysSessions.map((calendarDaySessions, index) => (
              <CalendarMonthDay
                key={index}
                calendarDaySessions={calendarDaySessions}
              />
            ))}
          </div>
        )}
    </>
  );
};

export default CalendarMonthView;
