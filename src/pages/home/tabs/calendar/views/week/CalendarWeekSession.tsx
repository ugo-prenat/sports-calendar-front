import { cn } from '@/common/utils/tailwind.utils';
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover';
import { ICalendarSession } from '@/pages/home/home.models';
import { differenceInMinutes, startOfDay } from 'date-fns';
import { CSSProperties, FC } from 'react';

export interface ICalendarWeekSessionStyle {
  left: string;
  width: string;
}

interface ICalendarWeekSessionProps {
  session: ICalendarSession;
  sessionStyle: ICalendarWeekSessionStyle;
}

const CalendarWeekSession: FC<ICalendarWeekSessionProps> = ({
  session,
  sessionStyle
}) => {
  const sessionStartTime = new Date(session.startTime);
  const sessionEndTime = new Date(session.endTime);
  const isSessionSameDay =
    !session.sessionStartedYesterday && !session.sessionEndsTomorrow;

  const sessionStartMinutes = differenceInMinutes(
    sessionStartTime,
    startOfDay(sessionStartTime)
  );

  const sessionMinutesNb = differenceInMinutes(
    sessionEndTime,
    sessionStartTime
  );

  const style: CSSProperties = {
    top: `calc(100%/24/60*${sessionStartMinutes})`,
    left: sessionStyle.left,
    width: sessionStyle.width,
    height: `calc(100%/24/60*${sessionMinutesNb})`
  };

  return (
    <Popover>
      <PopoverTrigger
        className={cn('flex items-start text-primary-foreground absolute p-2', {
          'rounded-t-sm bg-gradient-to-t from-background via-background to-transparent to-5%':
            session.sessionEndsTomorrow,
          'rounded-b-sm bg-gradient-to-b from-background via-background to-transparent to-5% pt-3':
            session.sessionStartedYesterday,
          'rounded-sm': isSessionSameDay,
          'items-center': sessionMinutesNb <= 90,
          'text-xs': sessionMinutesNb <= 30,
          'bg-red-600': session.championship === 'f1',
          'bg-blue-600': session.championship === 'f2',
          'bg-green-600': session.championship === 'f3'
        })}
        style={style}
      >
        <div className="flex gap-2 overflow-hidden">
          <img
            src="https://www.formula1.com/etc/designs/fom-website/images/f1_logo.svg"
            className="w-6"
          />
          <p className="text-ellipsis overflow-hidden whitespace-nowrap">
            {session.regionalized.en.name}
          </p>
        </div>
      </PopoverTrigger>
      <PopoverContent side="right" className="-mx-4">
        {session.regionalized.en.name}
      </PopoverContent>
    </Popover>
  );
};

export default CalendarWeekSession;
