import { FC } from 'react';
import { IEventWithSessions } from '../creation.models';
import { UseFormReturn, useFieldArray } from 'react-hook-form';
import { useTranslation } from '@/common/hooks/lang.hooks';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import SessionSection from './SessionSection';
import { Accordion } from '@/components/ui/accordion';

interface ISessionsSectionProps {
  form: UseFormReturn<IEventWithSessions>;
}

const SessionsSection: FC<ISessionsSectionProps> = ({ form }) => {
  const { t } = useTranslation();
  const { fields } = useFieldArray({
    control: form.control,
    name: 'sessions'
  });

  return (
    <div>
      <p className="text-xl font-medium">{t('creation.event.sessions')}</p>

      <Accordion
        type="single"
        collapsible
        defaultValue="session-0"
        className="py-4"
      >
        {fields.map((field, index) => (
          <SessionSection
            form={form}
            field={field}
            index={index}
            key={field.id}
          />
        ))}
      </Accordion>

      <Button variant="outline" size="sm">
        <Plus className="w-4 h-4 mr-1" />
        <p>{t('creation.event.sessions.add')}</p>
      </Button>
    </div>
  );
};

export default SessionsSection;
