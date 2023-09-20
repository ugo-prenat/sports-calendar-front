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
import {
  COMBAT_SPORTS_CHAMPIONSHIP,
  MOTORSPORTS,
  MOTORSPORTS_CHAMPIONSHIPS
} from '@/constants';
import { useTranslation } from '@/common/hooks/lang.hooks';
import { ChampionshipId, SportType } from '@/common/models/sports.models';

interface IChampionshipAndSportSectionProps {
  form: UseFormReturn<IEventWithSessions>;
}

const ChampionshipAndSportSection: FC<IChampionshipAndSportSectionProps> = ({
  form
}) => {
  const { t } = useTranslation();

  const selectedSport: SportType = form.watch('sport');
  const championships: readonly ChampionshipId[] =
    selectedSport === MOTORSPORTS
      ? MOTORSPORTS_CHAMPIONSHIPS
      : COMBAT_SPORTS_CHAMPIONSHIP;

  const SportSelect = () => (
    <FormField
      control={form.control}
      name="sport"
      render={({ field }) => (
        <FormItem className="flex-1">
          <FormLabel>{t('sportType')}</FormLabel>
          <FormControl>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {[MOTORSPORTS].map((sport, i) => (
                  <SelectItem key={i} value={sport}>
                    {t(sport)}
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
                {championships.map((championship, i) => (
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
      <SportSelect />
      <ChampionshipSelect />
    </>
  );
};

export default ChampionshipAndSportSection;
