import { FC, useEffect } from 'react';
import { ICalendarSession } from './home.models';
import { PopoverContent } from '@/components/ui/popover';
import {
  useFnsFormat,
  useTranslation
} from '@/common/contexts/lang/lang.hooks';

interface IEventDetailsPopupProps {
  isOpen: boolean;
  eventId: string;
  session: ICalendarSession;
}

const EventDetailsPopup: FC<IEventDetailsPopupProps> = ({
  isOpen,
  eventId,
  session
}) => {
  const { t } = useTranslation();
  const format = useFnsFormat();

  useEffect(() => {
    if (isOpen) console.log('fetch event', eventId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  if (!isOpen) return null;

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
