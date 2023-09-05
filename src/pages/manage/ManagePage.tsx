import { useTranslation } from '@/common/hooks/lang.hooks';
import { FC } from 'react';

const ManagePage: FC = () => {
  const { t } = useTranslation();

  return (
    <div className="flex p-8">
      <h2 className="font-semibold text-2xl mb-16">
        {t('manage.sports.title')}
      </h2>
    </div>
  );
};

export default ManagePage;
