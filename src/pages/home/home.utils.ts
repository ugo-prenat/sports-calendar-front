import {
  addDays,
  subDays,
  isFriday,
  isSaturday,
  isSunday,
  nextFriday,
  startOfWeek,
  endOfWeek,
  startOfMonth,
  endOfMonth,
  addMonths,
  addWeeks
} from 'date-fns';
import { CalendarView, IDateRange } from './home.models';
import { MONTH, WEEK, WEEKEND } from '@/constants';

export const getDateRange = (view: CalendarView): IDateRange => {
  const today = new Date();

  switch (view) {
    case WEEKEND:
      return {
        from: getFirstDayOfNextWeekend(),
        to: addDays(getFirstDayOfNextWeekend(), 2)
      };
    case WEEK:
      return {
        from: startOfWeek(today, { weekStartsOn: 1 }),
        to: endOfWeek(today, { weekStartsOn: 1 })
      };
    case MONTH:
      return {
        from: startOfMonth(today),
        to: endOfMonth(today)
      };
  }
};

export const getNextRange = (
  view: CalendarView,
  iterations: number
): IDateRange => {
  const todayRange: IDateRange = getDateRange(view);

  switch (view) {
    case WEEKEND:
    case WEEK:
      return {
        from: addWeeks(todayRange.from, iterations),
        to: addWeeks(todayRange.to, iterations)
      };
    case MONTH:
      return {
        from: addMonths(todayRange.from, iterations),
        to: addMonths(todayRange.to, iterations)
      };
    default:
      return todayRange;
  }
};
const getFirstDayOfNextWeekend = (): Date => {
  const today = new Date();

  if (isFriday(today)) return today;
  if (isSaturday(today)) return subDays(today, 1);
  if (isSunday(today)) return subDays(today, 2);
  return nextFriday(today);
};
