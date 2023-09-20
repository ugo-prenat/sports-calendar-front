import { useTranslation } from '@/common/hooks/lang.hooks';
import { FC, useState } from 'react';
import EventsHistory from './EventsHistory';
import CreationForm from './creationForm/CreationForm';
import {
  ISchemaEvent,
  makeVirginEvent,
  makeVirginSession
} from './creation.utils';
import { ISchemaSession } from './creation.models';

const CreationPage: FC = () => {
  const { t } = useTranslation();
  const [eventSample, setEventSample] = useState<ISchemaEvent>(
    makeVirginEvent()
  );
  const [sessionsSample, setSessionsSample] = useState<ISchemaSession[]>([
    makeVirginSession()
  ]);

  return (
    <div className="h-full flex flex-col p-8">
      <h2 className="font-semibold text-2xl mb-8">
        {t('creation.event.title')}
      </h2>

      <div className="flex h-full">
        <CreationForm
          eventSample={eventSample}
          sessionsSample={sessionsSample}
        />

        <EventsHistory
          setEventSample={setEventSample}
          setSessionsSample={setSessionsSample}
        />
      </div>
    </div>
  );
};

export default CreationPage;
