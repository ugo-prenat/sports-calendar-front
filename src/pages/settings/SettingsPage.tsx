import { FC } from 'react';
import ThemeToggle from './ThemeToggle';
import LangToggle from './LangToggle';
import { Separator } from '@/components/ui/separator';
import { useTranslation } from '@/common/contexts/lang/lang.hooks';

const SettingsPage: FC = () => {
  const { t } = useTranslation();

  return (
    <div className="h-full flex justify-center mt-16">
      <div className="w-3/5 min-w-[600px] max-w-[700px] px-8 flex flex-col gap-16">
        <h2 className="font-semibold text-2xl mb-16">{t('settings')}</h2>

        <ThemeToggle />

        <Separator />
        <LangToggle />

        {/* 
        
          - default tab
          - density
          - timezone
        
        */}
      </div>
    </div>
  );
};

export default SettingsPage;
