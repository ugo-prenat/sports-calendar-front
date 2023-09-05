import i18next from 'i18next';
import { FC, createContext, useState } from 'react';
import { initReactI18next, useTranslation } from 'react-i18next';

import en from '../i18n/en.json';
import fr from '../i18n/fr.json';
import {
  ILangContextProps,
  ILangContextState,
  Lang
} from '../models/lang.models';
import { LANG_STORAGE_KEY } from '../constants';
import { getDefaultLang } from '../utils/lang.utils';

export const defaultLang: Lang = getDefaultLang();

const initialState: ILangContextState = {
  lang: defaultLang,
  setLang: () => null,
  t: () => ''
};

export const LangProviderContext =
  createContext<ILangContextState>(initialState);

i18next.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    fr: { translation: fr }
  },
  lng: defaultLang,
  interpolation: { escapeValue: false }
});

export const LangProvider: FC<ILangContextProps> = ({ children, ...props }) => {
  const [lang, changeLang] = useState(defaultLang);
  const { t } = useTranslation();

  const setLang = (newLang: Lang) => {
    changeLang(newLang);
    localStorage.setItem(LANG_STORAGE_KEY, newLang);
    i18next.changeLanguage(newLang);
  };

  const value = { lang, setLang, t };

  return (
    <LangProviderContext.Provider {...props} value={value}>
      {children}
    </LangProviderContext.Provider>
  );
};
