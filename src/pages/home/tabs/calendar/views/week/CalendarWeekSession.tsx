import { useCalendar } from '@/common/contexts/calendar/calendar.hooks';
import { useTranslation } from '@/common/contexts/lang/lang.hooks';
import { useChampionshipConf } from '@/common/hooks/sports.hooks';
import { cn } from '@/common/utils/tailwind.utils';
import ChampionshipLogo from '@/components/ChampionshipLogo';
import { Popover, PopoverTrigger } from '@/components/ui/popover';
import EventDetailsPopup from '@/pages/home/EventDetailsPopup';
import { useSessionDetails } from '@/pages/home/home.hooks';
import { ICalendarSession } from '@/pages/home/home.models';
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
  const {
    sessionMinutesNb,
    sessionStartMinutes,
    isSessionSameDay,
    isSessionPast
  } = useSessionDetails(session);

  const { t } = useTranslation();
  const { calendarView } = useCalendar();
  const championshipConf = useChampionshipConf(session.championship);

  const sessionName = t(
    `${calendarView === 'week' ? 'short.' : ''}${session.type}`
  );

  const style: CSSProperties = {
    top: `calc(100%/24/60*${sessionStartMinutes})`,
    left: sessionStyle.left,
    width: sessionStyle.width,
    height: `calc(100%/24/60*${sessionMinutesNb})`,
    borderColor: `rgba(${championshipConf.color}, 0.8)`,
    backgroundColor: `rgba(${championshipConf.color}, 0.1)`
  };

  return (
    <Popover>
      <PopoverTrigger
        className={cn(`flex items-start absolute p-2 border`, {
          'rounded-t-sm bg-gradient-to-t from-background via-background to-transparent to-5%':
            session.sessionEndsTomorrow,
          'rounded-b-sm bg-gradient-to-b from-background via-background to-transparent to-5% pt-3':
            session.sessionStartedYesterday,
          'rounded-sm': isSessionSameDay,
          'items-center': sessionMinutesNb <= 90,
          'text-sm': sessionMinutesNb < 60,
          'text-xs': sessionMinutesNb <= 30,
          'opacity-30': isSessionPast
        })}
        style={style}
      >
        <div className="flex gap-2 overflow-hidden">
          <ChampionshipLogo
            championshipId={session.championship}
            className="w-6"
          />
          <p className="text-ellipsis overflow-hidden whitespace-nowrap">
            {sessionName}
          </p>
        </div>
      </PopoverTrigger>

      <EventDetailsPopup eventId={session.eventId} session={session} />
    </Popover>
  );
};

export default CalendarWeekSession;
