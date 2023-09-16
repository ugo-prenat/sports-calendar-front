import { FC } from 'react';
import CalendarWeekDay from './CalendarWeekDay';
import CalendarWeekHours from './CalendarWeekHours';
import { useCalendarDaySessions } from '@/pages/home/home.hooks';

interface ICalendarWeekViewProps {
  days: Date[];
}

const CalendarWeekView: FC<ICalendarWeekViewProps> = ({ days }) => {
  const { data, isLoading } = useCalendarDaySessions(days);

  if (isLoading) return <div>Loading...</div>;

  if (!data) return <div>No data</div>;

  return (
    <>
      <CalendarWeekHours />

      {data.map((calendarDaySessions, index) => (
        <CalendarWeekDay
          key={index}
          calendarDaySessions={calendarDaySessions}
        />
      ))}
    </>
  );
};

export default CalendarWeekView;
