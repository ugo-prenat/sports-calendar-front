import { ReactNode } from 'react';
import { LANG_EN, LANG_FR } from '../constants';

export type Lang = typeof LANG_EN | typeof LANG_FR;

export interface ILangContextProps {
  children: ReactNode;
}

export interface ILangContextState {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
}
