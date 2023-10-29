import { useTranslation } from '@/common/contexts/lang/lang.hooks';
import { FC, useState } from 'react';
import EventsHistory from './EventsHistory';
import CreationForm from './creationForm/CreationForm';
import { makeVirginEvent, makeVirginSession } from './creation.utils';
import { ISchemaEvent, ISchemaSession } from './creation.models';
import { useEvents } from './creation.hooks';

const CreationPage: FC = () => {
  const { t } = useTranslation();

  const { handleFetch: handleFetchEvents, status, data } = useEvents();

  const [eventSample, setEventSample] = useState<ISchemaEvent>(
    makeVirginEvent()
  );
  const [sessionsSample, setSessionsSample] = useState<ISchemaSession[]>([
    makeVirginSession()
  ]);

  return (
    <div className="flex-1 max-h-[calc(100%-3rem)] h-full-[calc(100%-3rem)] flex flex-col my-8 overflow-hidden">
      <h2 className="font-semibold text-2xl mb-8 ml-4">
        {t('creation.event.title')}
      </h2>

      <div className="flex h-full">
        <CreationForm
          eventSample={eventSample}
          sessionsSample={sessionsSample}
          updateHistoryList={handleFetchEvents}
        />

        <EventsHistory
          setEventSample={setEventSample}
          setSessionsSample={setSessionsSample}
          eventFetching={{ handleFetchEvents, status, data }}
        />
      </div>
    </div>
  );
};

export default CreationPage;
