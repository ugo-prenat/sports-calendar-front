import { FC } from 'react';
import { useTranslation } from '@/common/hooks/lang.hooks';
import { Button } from '@/components/ui/button';
import { Link } from '@tanstack/react-router';

const ManageSports: FC = () => {
  const { t } = useTranslation();

  return (
    <div className="flex items-center justify-between">
      <div>
        <h4 className="font-medium leading-none">{t('manage.sports.title')}</h4>
        <p className="text-sm text-muted-foreground leading-4 mt-2">
          {t('manage.sports.details')}
        </p>
      </div>
      <Button>
        <Link to="/manage">{t('manage.sports')}</Link>
      </Button>
    </div>
  );
};

export default ManageSports;
