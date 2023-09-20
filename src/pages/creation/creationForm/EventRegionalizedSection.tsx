import {
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { FC } from 'react';
import { IEventWithSessions } from '../creation.models';
import { UseFormReturn } from 'react-hook-form';
import { LANGS } from '@/constants';
import { useTranslation } from '@/common/hooks/lang.hooks';

interface IEventRegionalizedSectionProps {
  form: UseFormReturn<IEventWithSessions>;
}

const EventRegionalizedSection: FC<IEventRegionalizedSectionProps> = ({
  form
}) => {
  const { t } = useTranslation();
  return (
    <>
      <p className="text-sm font-medium -mb-6">{t('creation.event.names')}</p>
      <div>
        {LANGS.map((lang, i) => (
          <div className="flex gap-4 first:mb-2" key={i}>
            <FormField
              control={form.control}
              name={`regionalized.${lang}.name`}
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormControl>
                    <Input
                      placeholder={t(
                        `creation.event.regionalized.${lang}.name`
                      )}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name={`regionalized.${lang}.shortName`}
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormControl>
                    <Input
                      placeholder={t(
                        `creation.event.regionalized.${lang}.shortname`
                      )}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default EventRegionalizedSection;
