import { FC } from 'react';
import ThemeToggle from './ThemeToggle';
import LangToggle from './LangToggle';
import { Separator } from '@/components/ui/separator';
import ManageSports from './ManageSports';
import { useTranslation } from '@/common/hooks/lang.hooks';

const SettingsPage: FC = () => {
  const { t } = useTranslation();

  return (
    <div className="h-full flex justify-center mt-16">
      <div className="w-2/5 px-8 flex flex-col gap-16">
        <h2 className="font-semibold text-2xl mb-16">{t('settings')}</h2>

        <ManageSports />

        <Separator />
        <ThemeToggle />

        <Separator />
        <LangToggle />
      </div>
    </div>
  );
};

export default SettingsPage;
