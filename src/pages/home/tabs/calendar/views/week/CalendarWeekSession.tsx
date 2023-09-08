import { ISession } from '@/common/models/sports.models';
import { CSSProperties, FC } from 'react';

interface ICalendarWeekSessionProps {
  session: ISession;
}

const CalendarWeekSession: FC<ICalendarWeekSessionProps> = ({ session }) => {
  const sessionStartHour = new Date(session.startTime).getHours();
  const sessionSpanHeight =
    new Date(session.endTime).getHours() - sessionStartHour;
  console.log(sessionStartHour, sessionSpanHeight);

  const style: CSSProperties = {
    top: `calc(100%/24*${sessionStartHour})`,
    height: `calc(100%/24*${sessionSpanHeight})`
  };

  return (
    <div className={`bg-red-500 w-full absolute`} style={style}>
      session
    </div>
  );
};

export default CalendarWeekSession;
