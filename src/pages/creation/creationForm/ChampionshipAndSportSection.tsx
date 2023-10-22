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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { useTranslation } from '@/common/hooks/lang.hooks';
import { CHAMPIONSHIPS } from '@/constants';

interface IChampionshipAndSportSectionProps {
  form: UseFormReturn<IEventWithSessions>;
}

const ChampionshipAndSportSection: FC<IChampionshipAndSportSectionProps> = ({
  form
}) => {
  const { t } = useTranslation();

  const ChampionshipSelect = () => (
    <FormField
      control={form.control}
      name="championship"
      render={({ field }) => (
        <FormItem className="flex-1">
          <FormLabel>{t('championship')}</FormLabel>
          <FormControl>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {CHAMPIONSHIPS.map((championship, i) => (
                  <SelectItem key={i} value={championship}>
                    {t(championship)}
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

  return (
    <>
      <ChampionshipSelect />
    </>
  );
};

export default ChampionshipAndSportSection;
