import { FC, useEffect } from 'react';
import { ICalendarSession } from './home.models';
import { PopoverContent } from '@/components/ui/popover';
import {
  useFnsFormat,
  useTranslation
} from '@/common/contexts/lang/lang.hooks';

interface IEventDetailsPopupProps {
  eventId: string;
  session: ICalendarSession;
}

const EventDetailsPopup: FC<IEventDetailsPopupProps> = ({
  eventId,
  session
}) => {
  const { t } = useTranslation();
  const format = useFnsFormat();

  useEffect(() => {
    console.log('fetch event', eventId);
  }, [eventId]);

  return (
    <PopoverContent side="right" className="-mx-4">
      <p>{t(session.type)}</p>
      <p>
        {format(new Date(session.startTime), 'p')} -{' '}
        {format(new Date(session.endTime), 'p')}
      </p>
    </PopoverContent>
  );
};

export default EventDetailsPopup;
