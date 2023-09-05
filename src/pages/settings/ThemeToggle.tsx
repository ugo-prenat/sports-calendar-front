import { FC } from 'react';
import { Moon, Sun } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { useTheme } from '@/common/hooks/theme.hooks';
import { Theme } from '@/common/models/theme.models';
import { THEME_DARK, THEME_LIGHT, THEME_SYSTEM } from '@/common/constants';
import { useTranslation } from '@/common/hooks/lang.hooks';

const ThemeToggle: FC = () => {
  const { setTheme } = useTheme();
  const { t } = useTranslation();

  const handleChange = (theme: Theme) => () => setTheme(theme);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">{t('theme.toggle')}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={handleChange(THEME_LIGHT)}>
          {t('theme.light')}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handleChange(THEME_DARK)}>
          {t('theme.dark')}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handleChange(THEME_SYSTEM)}>
          {t('theme.system')}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ThemeToggle;
