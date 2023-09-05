import { FC, useState } from 'react';
import { useTheme } from '@/common/hooks/theme.hooks';
import { Theme } from '@/common/models/theme.models';
import { useTranslation } from '@/common/hooks/lang.hooks';
import { Button } from '@/components/ui/button';
import { Command, CommandGroup, CommandItem } from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover';
import { Check, ChevronsUpDown } from 'lucide-react';
import { THEME_DARK, THEME_LIGHT, THEME_SYSTEM } from '@/common/constants';
import { IThemeSelect } from './settings.models';
import { cn } from '@/common/utils/tailwind.utils';
import { Label } from '@/components/ui/label';

const ThemeToggle: FC = () => {
  const { t } = useTranslation();
  const { theme, setTheme } = useTheme();

  const [open, setOpen] = useState<boolean>(false);

  const handleChange = (theme: Theme) => () => {
    setTheme(theme);
    setOpen(false);
  };

  const themes: IThemeSelect[] = [
    { label: t('theme.light'), value: THEME_LIGHT },
    { label: t('theme.dark'), value: THEME_DARK },
    { label: t('theme.system'), value: THEME_SYSTEM }
  ];

  return (
    <div>
      <div className="flex flex-col gap-3">
        <Label>{t('theme')}</Label>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className="w-[200px] justify-between"
            >
              {t(`theme.${theme}`)}
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[200px] p-0">
            <Command>
              <CommandGroup>
                {themes.map((th) => (
                  <CommandItem key={th.value} onSelect={handleChange(th.value)}>
                    <Check
                      className={cn(
                        'mr-2 h-4 w-4',
                        theme === th.value ? 'opacity-100' : 'opacity-0'
                      )}
                    />
                    {th.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </Command>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};

export default ThemeToggle;
