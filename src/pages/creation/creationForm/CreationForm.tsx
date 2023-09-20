import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { ISchemaSession, eventSchema } from '../creation.models';
import { Form } from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import EventRegionalizedSection from './EventRegionalizedSection';
import ChampionshipAndSportSection from './ChampionshipAndSportSection';
import StartAndEndTime from './StartAndEndTime';
import { ISchemaEvent } from '../creation.utils';
import { useTranslation } from '@/common/hooks/lang.hooks';
import SessionsSection from './SessionsSection';

interface ICreationFormProps {
  eventSample: ISchemaEvent;
  sessionsSample: ISchemaSession[];
}

const CreationForm: FC<ICreationFormProps> = ({
  eventSample,
  sessionsSample
}) => {
  const { t } = useTranslation();

  const form = useForm<z.infer<typeof eventSchema>>({
    resolver: zodResolver(eventSchema),
    defaultValues: {
      ...eventSample,
      sessions: sessionsSample
    }
  });

  const onSubmit = (values: z.infer<typeof eventSchema>) => {
    console.log(values);
    // remove tout les string empty
  };

  return (
    <div className="flex-1 pr-4">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <EventRegionalizedSection form={form} />
          <div className="flex gap-4">
            <ChampionshipAndSportSection form={form} />
            <StartAndEndTime form={form} />
          </div>

          <SessionsSection form={form} />

          <Button type="submit">{t('creation.event.btn.create')}</Button>
        </form>
      </Form>
    </div>
  );
};

export default CreationForm;