import { useTranslation } from '@/common/hooks/lang.hooks';
import { FC, useEffect } from 'react';
import { ISchemaEvent, ISchemaSession } from './creation.models';
import { useEvents } from './creation.hooks';
import { Skeleton } from '@/components/ui/skeleton';
import Error from '@/components/ui/Error';
import { IAPIEvent } from '@/common/models/sports.models';
import { makeEventFromAPIToSchema } from './creation.utils';

interface IEventsHistoryProps {
  setEventSample: (event: ISchemaEvent) => void;
  setSessionsSample: (sessions: ISchemaSession[]) => void;
}

const EventsHistory: FC<IEventsHistoryProps> = ({
  setEventSample,
  setSessionsSample
}) => {
  const { t } = useTranslation();
  const { handleFetch, status, data } = useEvents();

  useEffect(() => {
    handleFetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = (event: IAPIEvent) => () => {
    setEventSample(makeEventFromAPIToSchema(event));
  };

  return (
    <div className="w-[350px] border-l pl-4">
      <h2 className="font-semibold text-xl">{t('creation.event.history')}</h2>
      <p className="text-sm text-muted-foreground leading-4">
        {t('creation.event.history.details')}
      </p>

      {status === 'loading' && (
        <>
          {Array.from({ length: 3 }).map((_, i) => (
            <div className="space-y-2 bg-muted/40 p-3 rounded-sm mt-4" key={i}>
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
          ))}
        </>
      )}
      {status === 'error' && (
        <Error
          className="mt-4"
          retry={handleFetch}
          text={t('creation.event.history.error')}
        />
      )}
      {status === 'success' && data && (
        <div className="flex flex-col gap-2 mt-4">
          {data.map((event) => (
            <EventCard
              onClick={handleClick(event)}
              event={event}
              key={event._id}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const EventCard = ({
  event,
  onClick
}: {
  event: IAPIEvent;
  onClick: () => void;
}) => {
  return (
    <div
      className="rounded-sm p-2 cursor-pointer transition-all hover:bg-muted border"
      onClick={onClick}
    >
      <p className="font-medium">
        {event.regionalized.en.shortName || event.regionalized.en.name} 2023
      </p>
      <p className="text-xs text-muted-foreground leading-4">
        EL1, SS, Sprint, Quali, Course{' '}
      </p>
    </div>
  );
};

export default EventsHistory;
