import { useSessionDetails } from '@/pages/home/home.hooks';
import { CSSProperties, FC } from 'react';
import { ICalendarWeekSessionStyle } from './CalendarWeekSession';
import { ICalendarSession } from '@/pages/home/home.models';
import { Skeleton } from '@/components/ui/skeleton';

interface ICalendarWeekLoadingSessionProps {
  session: ICalendarSession;
  sessionStyle: ICalendarWeekSessionStyle;
}

const CalendarWeekLoadingSession: FC<ICalendarWeekLoadingSessionProps> = ({
  session,
  sessionStyle
}) => {
  const { sessionMinutesNb, sessionStartMinutes } = useSessionDetails(session);

  const style: CSSProperties = {
    top: `calc(100%/24/60*${sessionStartMinutes})`,
    left: sessionStyle.left,
    width: sessionStyle.width,
    height: `calc(100%/24/60*${sessionMinutesNb})`
  };

  return (
    <Skeleton
      className="animate-pulse flex items-start text-primary-foreground absolute p-2"
      style={style}
    />
  );
};

export default CalendarWeekLoadingSession;
