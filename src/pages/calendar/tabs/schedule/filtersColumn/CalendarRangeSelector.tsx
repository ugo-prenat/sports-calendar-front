import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { FC, useEffect, useState } from 'react';
import { Calendar } from '@/components/ui/calendar';
import { ICalendarRangeSelect, IDateRange } from '../../../calendar.models';
import { useTranslation } from '@/common/hooks/lang.hooks';
import { getNextRange } from '../../../calendar.utils';
import { DateRange } from 'react-day-picker';
import { useCalendar } from '@/pages/calendar/calendar.hooks';

const CalendarRangeSelector: FC = () => {
  const { t } = useTranslation();
  const {
    calendarRange: range,
    setCalendarRange: setRange,
    calendarView
  } = useCalendar();

  const [value, setValue] = useState<string>('0');

  const handleSetRange = (maybeRange: DateRange | undefined) => {
    const newRange: IDateRange = {
      from: maybeRange?.from || range?.from,
      to: maybeRange?.to || range?.to
    };
    setRange(newRange);
  };

  const handleChangeRange = (value: string) => {
    setRange(getNextRange(calendarView, +value));
    setValue(value);
  };

  useEffect(() => {
    setValue('0');
  }, [calendarView]);

  const selectItems: ICalendarRangeSelect[] = ['0', '1', '2'].map((value) => ({
    value,
    label: t(`pick.date.${calendarView}.${value}`)
  }));

  return (
    <div className="pb-4 border-b">
      <div className="mb-1">
        <Select
          onValueChange={handleChangeRange}
          defaultValue={selectItems[0]?.value}
          value={value}
        >
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
