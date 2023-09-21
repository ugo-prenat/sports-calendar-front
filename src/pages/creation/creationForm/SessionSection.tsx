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
import { Trash } from 'lucide-react';
import { useTranslation } from '@/common/hooks/lang.hooks';
import { SESSIONS } from '@/constants';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';

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

  const handleTimeChange =
    (id: 'startTime' | 'endTime') => (e: ChangeEvent<HTMLInputElement>) =>
      form.setValue(`sessions.${index}.${id}`, e.target.value + ':00Z');

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
          <FormControl>
            <Input
              type="datetime-local"
              className="cursor-pointer"
              onChange={handleTimeChange(id)}
              value={field.value.substring(0, 16)}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );

  return (
    <div className="flex gap-4">
      <RegionalizedSection />
      <DateSection id="startTime" />
      <DateSection id="endTime" />

      <Tooltip title={t('creation.event.sessions.remove.tooltip')}>
        <Button
          size="icon"
          variant="outline"
          onClick={handleRemove}
          className="group w-10 h-10 hover:bg-destructive mt-[22px]"
        >
          <Trash className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:stroke-white" />
        </Button>
      </Tooltip>
    </div>
  );
};

export default SessionSection;
