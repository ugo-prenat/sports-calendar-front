import { useTranslation } from '@/common/hooks/lang.hooks';
import { FC } from 'react';
import { ISchemaEvent } from './creation.utils';
import { ISchemaSession } from './creation.models';

interface IEventsHistoryProps {
  setEventSample: (event: ISchemaEvent) => void;
  setSessionsSample: (sessions: ISchemaSession[]) => void;
}

const EventsHistory: FC<IEventsHistoryProps> = ({
  setEventSample,
  setSessionsSample
}) => {
  const { t } = useTranslation();

  return (
    // <div className="w-[350px] border-l pl-4">
    <div className="w-[50px] border-l pl-4">
      <h2 className="font-semibold text-xl">{t('creation.event.history')}</h2>
    </div>
  );
};

export default EventsHistory;
