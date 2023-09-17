import { useSessionDetails } from '@/pages/home/home.hooks';
import { CSSProperties, FC } from 'react';
import { ICalendarWeekSessionStyle } from './CalendarWeekSession';
import { ICalendarSession } from '@/pages/home/home.models';
import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/common/utils/tailwind.utils';

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
    width:
      sessionStyle.width === '100%'
        ? '100%'
        : sessionStyle.left === '50%'
        ? '49%'
        : '50%',
    height: `calc(100%/24/60*${sessionMinutesNb})`
  };

  return (
    <Skeleton
      className={cn(
        'animate-[pulse_3s_infinite] flex items-start text-primary-foreground absolute p-2',
        { 'ml-1': sessionStyle.left === '50%' }
      )}
      style={style}
    />
  );
};

export default CalendarWeekLoadingSession;
