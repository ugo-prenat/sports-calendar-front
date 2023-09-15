import { FC, useEffect, useState } from 'react';
import CalendarWeekDay from './CalendarWeekDay';
import { ICalendarDaySessions } from '@/pages/home/home.models';
import CalendarWeekHours from './CalendarWeekHours';
import { ChampionshipId } from '@/common/models/sports.models';

interface ICalendarWeekViewProps {
  days: Date[];
}

const CalendarWeekView: FC<ICalendarWeekViewProps> = ({ days }) => {
  const [calendarDaysSessions, setCalendarDaysSessions] = useState<
    ICalendarDaySessions[]
  >([]);

  const [isLoading, setIsLoading] = useState(true);

  const handleGetDaysSessions = async (): Promise<ICalendarDaySessions[]> => {
    const firstDay = days.at(0)?.toISOString();
    const lastDay = days.at(-1)?.toISOString();
    const championships: ChampionshipId[] = ['f1', 'gt-world-challenge'];

    const sess = await fetch(
      `http://localhost:3000/sessions?range=${[firstDay, lastDay].join(
        ','
      )}&championships=${championships.join(',')}`
    )
      .then((response) => response.json())
      .then((response: ICalendarDaySessions[]) => response);

    return sess;

    // return days.map((day, i) => ({
    //   date: day,
    //   overlapedSessions: MOCK_CALENDAR_DAY_SESSIONS[i]?.overlapedSessions || []
    // }));
  };

  useEffect(() => {
    const get = async () => {
      setIsLoading(true);
      setCalendarDaysSessions(await handleGetDaysSessions());
      setIsLoading(false);
    };
    get();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [days]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

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
