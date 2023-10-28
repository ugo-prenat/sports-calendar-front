import { FC, MouseEvent, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { ISchemaEvent, ISchemaSession, eventSchema } from '../creation.models';
import { Form } from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import EventRegionalizedSection from './EventRegionalizedSection';
import ChampionshipAndSportSection from './ChampionshipAndSportSection';
import StartAndEndTime from './StartAndEndTime';
import { makeEvent, makeSessions, resetForm } from '../creation.utils';
import { useTranslation } from '@/common/hooks/lang.hooks';
import SessionsSection from './SessionsSection';
import { WithoutId, WithoutIds } from '@/common/models/models';
import { IEvent, ISession } from '@/common/models/sports.models';
import { useEventCreation, useSessionsCreation } from '../creation.hooks';
import { useToast } from '@/components/ui/use-toast';
import { isEmpty } from '@/common/utils/utils';

interface ICreationFormProps {
  eventSample: ISchemaEvent;
  sessionsSample: ISchemaSession[];
}

const CreationForm: FC<ICreationFormProps> = ({
  eventSample,
  sessionsSample
}) => {
  const { toast } = useToast();
  const { t } = useTranslation();

  const { handleFetch: handleCreateSessions, status: sessionCreationStatus } =
    useSessionsCreation();
  const { handleFetch: handleCreateEvent, status: eventCreationStatus } =
    useEventCreation();

  const isDisabled =
    sessionCreationStatus === 'loading' || eventCreationStatus === 'loading';

  const form = useForm<z.infer<typeof eventSchema>>({
    resolver: zodResolver(eventSchema),
    defaultValues: { ...eventSample, sessions: sessionsSample }
  });

  const displayToast = (variant: 'default' | 'destructive' = 'default') =>
    toast({
      variant,
      description: t(`creation.event.toast.${variant}.title`)
    });

  useEffect(() => {
    form.reset({
      ...eventSample,
      sessions: sessionsSample
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [eventSample, sessionsSample]);

  const onSubmit = (data: z.infer<typeof eventSchema>) => {
    const event: WithoutId<IEvent> = makeEvent(data);
    const sessions: WithoutIds<ISession>[] = makeSessions(data);

    handleCreateEvent(event)
      .then((event) => {
        isEmpty(sessions)
          ? handleResetFormAfterSuccess()
          : handleCreateSessions(sessions, event._id)
              .then(() => handleResetFormAfterSuccess())
              .catch(() => displayToast('destructive'));
      })
      .catch(() => displayToast('destructive'));
  };

  const handleReset = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    resetForm(form);
  };

  const handleResetFormAfterSuccess = () => {
    displayToast();
    resetForm(form);
  };

  return (
    <div className="flex-1 px-4 mb-16 overflow-auto">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <EventRegionalizedSection form={form} />
          <div className="flex gap-4">
            <ChampionshipAndSportSection form={form} />
            <StartAndEndTime form={form} />
          </div>

          <SessionsSection form={form} />

          <div className="sticky bottom-0 flex justify-end bg-background pt-4">
            <Button
              className="mr-2 text-primary/50"
              variant="ghost"
              onClick={handleReset}
            >
              {t('creation.event.btn.reset')}
            </Button>
            <Button loadingBtn type="submit" disabled={isDisabled}>
              {t('creation.event.btn.create')}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default CreationForm;
