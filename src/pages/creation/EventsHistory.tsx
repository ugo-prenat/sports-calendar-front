import { useTranslation } from '@/common/hooks/lang.hooks';
import { ISession } from '@/common/models/sports.models';
import { FC } from 'react';
import { ISchemaEvent } from './creation.utils';

interface IEventsHistoryProps {
  setEventSample: (event: ISchemaEvent) => void;
  setSessionsSample: (sessions: ISession[]) => void;
}

const EventsHistory: FC<IEventsHistoryProps> = ({
  setEventSample,
  setSessionsSample
}) => {
  const { t } = useTranslation();

  return (
    <div className="w-[250px] border-l pl-4">
      <h2 className="font-semibold text-xl">{t('creation.event.history')}</h2>
    </div>
  );
};

export default EventsHistory;
