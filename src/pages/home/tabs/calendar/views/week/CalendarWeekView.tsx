import { FC, useEffect, useState } from 'react';
import CalendarWeekDay from './CalendarWeekDay';
import { ICalendarDaySessions } from '@/pages/home/home.models';
import CalendarWeekHours from './CalendarWeekHours';
import { MOCK_CALENDAR_DAY_SESSIONS } from '@/pages/home/mock';
import { useChampionships } from '@/common/hooks/championships.hooks';

interface ICalendarWeekViewProps {
  days: Date[];
}

const CalendarWeekView: FC<ICalendarWeekViewProps> = ({ days }) => {
  const [calendarDaysSessions, setCalendarDaysSessions] = useState<
    ICalendarDaySessions[]
  >([]);

  const { championships, addChampionship } = useChampionships();
  console.log({ championships });

  const handleGetDaysSessions = (): ICalendarDaySessions[] => {
    // fetch here
    console.log('fetch sessions for ', days.length, 'days');
    addChampionship('wec');

    return days.map((day, i) => ({
      date: day,
      overlapedSessions: MOCK_CALENDAR_DAY_SESSIONS[i]?.overlapedSessions || []
    }));
  };

  useEffect(() => {
    setCalendarDaysSessions(handleGetDaysSessions());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [days]);

  return (
    <>
      <CalendarWeekHours />

      {calendarDaysSessions.map((calendarDaySessions, index) => (
        <CalendarWeekDay
          key={index}
          calendarDaySessions={calendarDaySessions}
        />
      ))}
    </>
  );
};

export default CalendarWeekView;
