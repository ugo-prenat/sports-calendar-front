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
      <PopoverTrigger>
        <div className="flex gap-2 overflow-hidden">
          <img
            src="https://www.formula1.com/etc/designs/fom-website/images/f1_logo.svg"
            className="w-6"
          />
          <p className="text-ellipsis overflow-hidden whitespace-nowrap">
            {session.regionalized.fr?.name}
          </p>
        </div>
      </PopoverTrigger>
      <PopoverContent side="right" className="-mx-4">
        Event details
      </PopoverContent>
    </Popover>
  );
};

export default CalendarMonthSession;
