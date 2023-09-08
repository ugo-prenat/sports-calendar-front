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
  addWeeks,
  eachDayOfInterval,
  eachHourOfInterval,
  startOfToday,
  endOfToday,
  format
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
        to: endOfMonth(addMonths(todayRange.to, iterations))
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

export const getCalendarWeekDays = (range: IDateRange): Date[] =>
  eachDayOfInterval({
    start: range.from,
    end: range.to
  });

export const getCalendarMonthDays = (range: IDateRange): Date[] => {
  const monthDays: Date[] = eachDayOfInterval({
    start: range.from,
    end: range.to
  });

  const daysBeforeStartOfMonth: Date[] = eachDayOfInterval({
    start: startOfWeek(range.from, { weekStartsOn: 1 }),
    end: range.from
  });

  const daysAfterEndOfMonth: Date[] = eachDayOfInterval({
    start: range.to,
    end: endOfWeek(range.to, { weekStartsOn: 1 })
  });

  daysBeforeStartOfMonth.pop();
  daysAfterEndOfMonth.shift();

  return [...daysBeforeStartOfMonth, ...monthDays, ...daysAfterEndOfMonth];
};

export const getHours = (locale?: Locale): string[] => {
  const hours = eachHourOfInterval({
    start: startOfToday(),
    end: endOfToday()
  });

  return hours.map((hour) => format(hour, 'p', { locale }));
};

export const sliceDaysIntoChunks = <T>(arr: T[], chunkSize: number): T[][] =>
  Array.from({ length: Math.ceil(arr.length / chunkSize) }, (_, index) =>
    arr.slice(index * chunkSize, (index + 1) * chunkSize)
  );
