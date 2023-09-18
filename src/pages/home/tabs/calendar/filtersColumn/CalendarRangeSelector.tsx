import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { FC } from 'react';
import { Calendar } from '@/components/ui/calendar';
import { ICalendarRangeSelect, IDateRange } from '../../../home.models';
import { useTranslation } from '@/common/hooks/lang.hooks';
import { getNextRange } from '../../../home.utils';
import { DateRange } from 'react-day-picker';
import { useCalendar } from '@/common/hooks/calendar.hooks';

const CalendarRangeSelector: FC = () => {
  const { t } = useTranslation();
  const {
    calendarView,
    calendarRange: range,
    setCalendarRange: setRange
  } = useCalendar();

  const handleSetRange = (maybeRange: DateRange | undefined) => {
    const newRange: IDateRange = {
      from: maybeRange?.from || range?.from,
      to: maybeRange?.to || range?.to
    };
    setRange(newRange);
  };

  const handleChangeRange = (value: string) =>
    setRange(getNextRange(calendarView, +value));

  const selectItems: ICalendarRangeSelect[] = ['-1', '0', '1', '2'].map(
    (value) => ({
      value,
      label: t(`pick.date.${calendarView}.${value}`)
    })
  );

  return (
    <div className="pb-4 border-b">
      <div className="mb-2">
        <Select onValueChange={handleChangeRange} defaultValue="0">
          <SelectTrigger>
            <SelectValue placeholder={t('pick.date')} />
          </SelectTrigger>
          <SelectContent
            position="popper"
            className="min-w-0 w-[calc(100%-2px)] "
          >
            {selectItems.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <Calendar
        className="border rounded-md"
        initialFocus
        disabled
        mode="range"
        defaultMonth={range?.from}
        month={range?.from}
        selected={range}
        onSelect={handleSetRange}
        numberOfMonths={1}
      />
    </div>
  );
};

export default CalendarRangeSelector;
