import { useTranslation } from '@/common/contexts/lang/lang.hooks';
import { Popover, PopoverTrigger } from '@/components/ui/popover';
import EventDetailsPopup from '@/pages/home/EventDetailsPopup';
import { ICalendarSession } from '@/pages/home/home.models';
import { FC, useState } from 'react';

interface ICalendarMonthSessionProps {
  session: ICalendarSession;
}

const CalendarMonthSession: FC<ICalendarMonthSessionProps> = ({ session }) => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const { t } = useTranslation();
  return (
    <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
      <PopoverTrigger className="flex items-center gap-2 bg-red-600 text-primary-foreground rounded-sm px-2 mb-2 overflow-hidden w-full">
        <img
          src="https://www.formula1.com/etc/designs/fom-website/images/f1_logo.svg"
          className="w-6"
        />
        <p className="whitespace-nowrap text-ellipsis overflow-hidden">
          {t(`short.${session.type}`)}
        </p>
      </PopoverTrigger>
      <EventDetailsPopup
        eventId={session.eventId}
        session={session}
        isOpen={isPopoverOpen}
      />
    </Popover>
  );
};

export default CalendarMonthSession;
