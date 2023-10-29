import { ReactNode } from 'react';
import { LANGS } from '../../../constants';

export type Lang = (typeof LANGS)[number];

export interface ILangContextProps {
  children: ReactNode;
}

export interface ILangContextState {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
  fnsLocale: Locale | undefined;
}

export interface IFnsFormatOptions {
  locale?: Locale;
  weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  firstWeekContainsDate?: number;
  useAdditionalWeekYearTokens?: boolean;
  useAdditionalDayOfYearTokens?: boolean;
}
