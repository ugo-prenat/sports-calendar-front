import { FC } from 'react';
import { IEventWithSessions } from '../creation.models';
import { UseFormReturn } from 'react-hook-form';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { CalendarIcon } from 'lucide-react';
import { Calendar } from '@/components/ui/calendar';
import { useFnsFormat, useTranslation } from '@/common/hooks/lang.hooks';

interface IStartAndEndTimeProps {
  form: UseFormReturn<IEventWithSessions>;
}

const StartAndEndTime: FC<IStartAndEndTimeProps> = ({ form }) => {
  const { t } = useTranslation();
  const format = useFnsFormat();

  return (
    <FormField
      control={form.control}
      name="range"
      render={({ field }) => (
        <FormItem className="flex flex-col flex-1 justify-end">
          <FormLabel className="leading-1">
            {t('creation.event.period')}
          </FormLabel>
          <Popover>
            <PopoverTrigger asChild>
              <FormControl>
                <Button
                  variant={'outline'}
                  className="pl-3 text-left font-normal"
                >
                  {field.value ? (
                    <>
                      {format(field.value.from, 'PP')} -{' '}
                      {format(field.value.to, 'PP')}
                    </>
                  ) : (
                    <span>{t('pick.date')}</span>
                  )}
                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="range"
                selected={field.value}
                onSelect={field.onChange}
                initialFocus
              />
            </PopoverContent>
          </Popover>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default StartAndEndTime;
