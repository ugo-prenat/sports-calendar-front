import { FC, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Command, CommandGroup, CommandItem } from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover';
import { Lang } from '@/common/models/lang.models';
import { cn } from '@/common/utils/tailwind.utils';
import { Check, ChevronsUpDown } from 'lucide-react';
import { LANG_EN, LANG_FR } from '@/common/constants';
import { useTranslation } from '@/common/hooks/lang.hooks';
import { ILanguageSelect } from './settings.models';
import { Label } from '@/components/ui/label';

const LangToggle: FC = () => {
  const { t, lang, setLang } = useTranslation();

  const [open, setOpen] = useState<boolean>(false);

  const handleChange = (lang: Lang) => () => {
    setLang(lang);
    setOpen(false);
  };

  const languages: ILanguageSelect[] = [
    { label: t('language.en'), value: LANG_EN },
    { label: t('language.fr'), value: LANG_FR }
  ];

  return (
    <div>
      <div className="flex flex-col gap-3">
        <Label>{t('language')}</Label>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className="w-[200px] justify-between"
            >
              {t(`language.${lang}`)}
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[200px] p-0">
            <Command>
              <CommandGroup>
                {languages.map((language) => (
                  <CommandItem
                    key={language.value}
                    onSelect={handleChange(language.value)}
                  >
                    <Check
                      className={cn(
                        'mr-2 h-4 w-4',
                        lang === language.value ? 'opacity-100' : 'opacity-0'
                      )}
                    />
                    {language.label}
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

export default LangToggle;
