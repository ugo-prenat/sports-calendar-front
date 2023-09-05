import { FC } from 'react';
import ThemeToggle from './ThemeToggle';
import LangToggle from './LangToggle';
import { useTranslation } from '@/common/hooks/lang.hooks';

const SettingsPage: FC = () => {
  const { t, lang } = useTranslation();
  return (
    <div className="flex flex-col gap-10 mt-10">
      <h3>settings</h3>
      <p>lang: {lang}</p>
      {t('theme.light')}
      <ThemeToggle />
      <LangToggle />
    </div>
  );
};

export default SettingsPage;
