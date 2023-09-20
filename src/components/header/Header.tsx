import { FC } from 'react';
import { Link } from '@tanstack/react-router';
import { Button } from '../ui/button';
import CompactThemeToggle from './CompactThemeToggle';
import CompactLangToggle from './CompactLangToggle';
import { useTranslation } from '@/common/hooks/lang.hooks';
import { CalendarPlus } from 'lucide-react';

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  const { t } = useTranslation();
  return (
    <div className="flex justify-between py-2 items-center px-4 border-input border-b h-14">
      <div className="flex">
        <Button variant="link">
          <Link to="/">{t('home')}</Link>
        </Button>

        <Button variant="link">
          <Link to="/manage">{t('manage')}</Link>
        </Button>

        <Button variant="link">
          <Link to="/settings">{t('settings')}</Link>
        </Button>

        <Link to="/creation">
          <Button variant="ghost" size="icon">
            <CalendarPlus className="w-4 h-4 opacity-30" />
          </Button>
        </Link>
      </div>
      <div className="flex gap-x-2">
        <CompactLangToggle />
        <CompactThemeToggle />
      </div>
    </div>
  );
};

export default Header;
