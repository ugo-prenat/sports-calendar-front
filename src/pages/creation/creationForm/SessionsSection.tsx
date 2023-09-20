import { FC } from 'react';
import { IEventWithSessions } from '../creation.models';
import { UseFormReturn, useFieldArray } from 'react-hook-form';
import { useTranslation } from '@/common/hooks/lang.hooks';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import SessionSection from './SessionSection';
import { makeVirginSession } from '../creation.utils';
import { isEmpty } from '@/common/utils/utils';

interface ISessionsSectionProps {
  form: UseFormReturn<IEventWithSessions>;
}

const SessionsSection: FC<ISessionsSectionProps> = ({ form }) => {
  const { t } = useTranslation();
  const { fields, remove, append } = useFieldArray({
    control: form.control,
    name: 'sessions'
  });

  const handleRemove = (index: number) => () => remove(index);
  const handleAppend = () => append(makeVirginSession());

  return (
    <div>
      <p className="text-xl font-medium">{t('creation.event.sessions')}</p>

      <div className="flex flex-col gap-4 py-8">
        {isEmpty(fields) ? (
          <p className="text-muted-foreground/40">
            {t('creation.event.sessions.empty')}
          </p>
        ) : (
          <>
            {fields.map((field, index) => (
              <SessionSection
                form={form}
                field={field}
                index={index}
                key={field.id}
                handleRemove={handleRemove(index)}
              />
            ))}
          </>
        )}
      </div>

      <Button variant="outline" size="sm" onClick={handleAppend}>
        <Plus className="w-4 h-4 mr-1" />
        <p>{t('creation.event.sessions.add')}</p>
      </Button>
    </div>
  );
};

export default SessionsSection;
