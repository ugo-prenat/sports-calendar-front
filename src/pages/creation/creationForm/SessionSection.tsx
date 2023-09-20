import { ChangeEvent, FC } from 'react';
import { IEventWithSessions } from '../creation.models';
import { UseFormReturn, FieldArrayWithId } from 'react-hook-form';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import Tooltip from '@/components/Tooltip';
import { Button } from '@/components/ui/button';
import { CalendarIcon, Trash } from 'lucide-react';
import { useFnsFormat, useTranslation } from '@/common/hooks/lang.hooks';
import { SESSIONS } from '@/constants';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { setHours, setMinutes } from 'date-fns';

interface ISessionSectionProps {
  handleRemove: () => void;
  form: UseFormReturn<IEventWithSessions>;
  field: FieldArrayWithId<IEventWithSessions, 'sessions', 'id'>;
  index: number;
}

const SessionSection: FC<ISessionSectionProps> = ({
  form,
  index,
  handleRemove
}) => {
  const { t } = useTranslation();
  const format = useFnsFormat();

  const handleTimeChange =
    (id: 'startTime' | 'endTime') => (e: ChangeEvent<HTMLInputElement>) => {
      console.log(e.target.value);
      const date = new Date(form.watch(`sessions.${index}.${id}`));
      const [hours, minutes] = e.target.value.split(':');

      const newDate = setHours(
        setMinutes(date, Number(minutes)),
        Number(hours)
      );

      form.setValue(`sessions.${index}.${id}`, newDate.toISOString());
    };

  const RegionalizedSection = () => (
    <FormField
      control={form.control}
      name={`sessions.${index}.type`}
      render={({ field }) => (
        <FormItem className="flex flex-col flex-1">
          <FormLabel>{t('creation.event.sessions.type')}</FormLabel>
          <FormControl>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {SESSIONS.map((session, i) => (
                  <SelectItem key={i} value={session}>
                    {t(session)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );

  const DateSection = ({ id }: { id: 'startTime' | 'endTime' }) => (
    <FormField
      control={form.control}
      name={`sessions.${index}.${id}`}
      render={({ field }) => (
        <FormItem className="flex flex-col flex-1">
          <FormLabel>{t(`creation.event.sessions.${id}`)}</FormLabel>
          <Popover>
            <PopoverTrigger asChild>
              <FormControl>
                <Button
                  variant={'outline'}
                  className="pl-3 text-left font-normal"
                >
                  {format(new Date(field.value), 'PPp')}
                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={new Date(field.value)}
                onSelect={field.onChange}
                initialFocus
              />
              <div className="px-4 pt-0 pb-4">
                <Label>{t('creation.event.sessions.hour')}</Label>
                <Input
                  type="time"
                  onChange={handleTimeChange(id)}
                  value={format(new Date(field.value), 'HH:mm')}
                />
              </div>
            </PopoverContent>
          </Popover>
          <FormMessage />
        </FormItem>
      )}
    />
  );

  return (
    <div className="flex gap-4 items-end">
      <RegionalizedSection />
      <DateSection id="startTime" />
      <DateSection id="endTime" />

      <Tooltip title={t('creation.event.sessions.remove.tooltip')}>
        <Button
          size="icon"
          variant="outline"
          onClick={handleRemove}
          className="group w-10 h-10 hover:bg-destructive"
        >
          <Trash className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:stroke-white" />
        </Button>
      </Tooltip>
    </div>
  );
};

export default SessionSection;
