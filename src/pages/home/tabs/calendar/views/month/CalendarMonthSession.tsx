import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover';
import { ICalendarSession } from '@/pages/home/home.models';
import { FC } from 'react';

interface ICalendarMonthSessionProps {
  session: ICalendarSession;
}

const CalendarMonthSession: FC<ICalendarMonthSessionProps> = ({ session }) => {
  return (
    <Popover>
      <PopoverTrigger className="flex items-center gap-2 bg-red-600 text-primary-foreground rounded-sm px-2 mb-2 overflow-hidden w-full">
        <img
          src="https://www.formula1.com/etc/designs/fom-website/images/f1_logo.svg"
          className="w-6"
        />
        <p className="whitespace-nowrap text-ellipsis overflow-hidden">
          {session.type}
        </p>
      </PopoverTrigger>
      <PopoverContent side="right" className="-mx-4">
        {session.type}
      </PopoverContent>
    </Popover>
  );
};

export default CalendarMonthSession;
