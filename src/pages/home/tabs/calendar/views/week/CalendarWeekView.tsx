import { FC, useEffect } from 'react';
import CalendarWeekDay from './CalendarWeekDay';
import CalendarWeekHours from './CalendarWeekHours';
import { useCalendarDaysSessions } from '@/pages/home/home.hooks';
import { makeLoadingCalendarDaySessions } from '@/pages/home/home.utils';
import { useTranslation } from '@/common/contexts/lang/lang.hooks';
import { useChampionships } from '@/common/contexts/championships/championships.hooks';
import { isEmpty, isNotEmpty } from '@/common/utils/utils';
import Alert from '@/components/Alert';

interface ICalendarWeekViewProps {
  days: Date[];
}

const CalendarWeekView: FC<ICalendarWeekViewProps> = ({ days }) => {
  const { t } = useTranslation();
  const { championships } = useChampionships();
  const { calendarDaysSessions, status, handleFetch } =
    useCalendarDaysSessions(days);

  useEffect(() => {
    if (isNotEmpty(championships)) handleFetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [days, championships]);

  return (
    <>
      <CalendarWeekHours />

      {status === 'loading' &&
        days.map((date, index) => (
          <CalendarWeekDay
            key={index}
            calendarDaySessions={makeLoadingCalendarDaySessions(date)}
            isLoading={status === 'loading'}
          />
        ))}

      {status === 'error' && isNotEmpty(championships) && (
        <Alert
          variant="error"
          retry={handleFetch}
          className="mx-6 mt-6"
          text={t('calendar.receive.sessions.error')}
        />
      )}

      {isEmpty(championships) && (
        <Alert
          variant="warning"
          className="mx-6 mt-6"
          text={t('calendar.receive.sessions.noChampionships')}
        />
      )}

      {status === 'success' &&
        isNotEmpty(championships) &&
        calendarDaysSessions &&
        calendarDaysSessions.map((calendarDaySessions, index) => (
          <CalendarWeekDay
            key={index}
            calendarDaySessions={calendarDaySessions}
          />
        ))}
    </>
  );
};

export default CalendarWeekView;
