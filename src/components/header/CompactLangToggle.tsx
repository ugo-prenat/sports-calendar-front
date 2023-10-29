import { useTranslation } from '@/common/contexts/lang/lang.hooks';
import { LANG_EN, LANG_FR } from '@/constants';
import { ILanguageSelect } from '@/pages/settings/settings.models';
import { FC } from 'react';
import { Button } from '../ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '../ui/dropdown-menu';
import { Lang } from '@/common/contexts/lang/lang.models';

const CompactLangToggle: FC = () => {
  const { lang, setLang } = useTranslation();

  const handleChange = (newLang: Lang) => () => setLang(newLang);

  const languages: ILanguageSelect[] = [
    { label: '🇺🇸', value: LANG_EN },
    { label: '🇫🇷', value: LANG_FR }
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="border-none w-8 h-8">
          <span className="h-4 w-4 -ml-1">
            {lang === LANG_FR ? '🇫🇷' : '🇺🇸'}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-0">
        {languages.map(({ label, value }) => (
          <DropdownMenuItem key={value} onClick={handleChange(value)}>
            <span className="-mb-1">{label}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default CompactLangToggle;
