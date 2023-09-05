import { FC } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '../ui/dropdown-menu';
import { Button } from '../ui/button';
import { Moon, Sun } from 'lucide-react';
import { useTranslation } from '@/common/hooks/lang.hooks';
import { useTheme } from '@/common/hooks/theme.hooks';
import { Theme } from '@/common/models/theme.models';
import { THEME_DARK, THEME_LIGHT, THEME_SYSTEM } from '@/common/constants';
import { IThemeSelect } from '@/pages/settings/settings.models';

const CompactThemeToggle: FC = () => {
  const { t } = useTranslation();
  const { setTheme } = useTheme();

  const handleChange = (theme: Theme) => () => setTheme(theme);

  const themes: IThemeSelect[] = [
    { label: t('theme.light'), value: THEME_LIGHT },
    { label: t('theme.dark'), value: THEME_DARK },
    { label: t('theme.system'), value: THEME_SYSTEM }
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="border-none w-8 h-8">
          <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {themes.map(({ label, value }) => (
          <DropdownMenuItem key={value} onClick={handleChange(value)}>
            {label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default CompactThemeToggle;
