import { useFnsFormat } from '@/common/hooks/lang.hooks';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip';
import { differenceInMinutes, isSameDay, startOfDay } from 'date-fns';
import { FC } from 'react';

interface ICalendarWeekHourLineProps {
  day: string;
}

const CalendarWeekHourLine: FC<ICalendarWeekHourLineProps> = ({ day }) => {
  const format = useFnsFormat();

  const isToday: boolean = isSameDay(new Date(day), new Date());
  const actualMinutesStart = differenceInMinutes(
    new Date(),
    startOfDay(new Date())
  );

  if (!isToday) return null;

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger
          className="w-full h-[10px] absolute flex items-center z-10 border-l-2 border-muted-foreground -mt-[0.3rem]"
          style={{ top: `calc(100%/24/60*${actualMinutesStart})` }}
        >
          <span className="inline-block w-full border-t-2 border-muted-foreground border-dashed absolute top-[50%-1px]"></span>
        </TooltipTrigger>
        <TooltipContent side="left" className="bg-popover">
          {format(new Date(), 'p')}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default CalendarWeekHourLine;
