import i18next from 'i18next';
import { FC, createContext, useEffect, useState } from 'react';
import { initReactI18next, useTranslation } from 'react-i18next';

import en from '../../i18n/en.json';
import fr from '../../i18n/fr.json';
import { ILangContextProps, ILangContextState, Lang } from './lang.models';
import { LANG_FR, LANG_STORAGE_KEY } from '../../../constants';
import { getDefaultLang } from './lang.utils';
import { fr as fnsFrLocale } from 'date-fns/locale';

export const defaultLang: Lang = getDefaultLang();

const initialState: ILangContextState = {
  lang: defaultLang,
  setLang: () => null,
  t: () => '',
  fnsLocale: defaultLang === LANG_FR ? fnsFrLocale : undefined
};

export const LangProviderContext =
  createContext<ILangContextState>(initialState);

i18next.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    fr: { translation: fr }
  },
  lng: defaultLang
});

export const LangProvider: FC<ILangContextProps> = ({ children, ...props }) => {
  const [lang, changeLang] = useState(defaultLang);
  const [fnsLocale, setFnsLocale] = useState<Locale | undefined>(
    lang === LANG_FR ? fnsFrLocale : undefined
  );
  const { t } = useTranslation();

  const setLang = (newLang: Lang) => {
    changeLang(newLang);
    localStorage.setItem(LANG_STORAGE_KEY, newLang);
    i18next.changeLanguage(newLang);
  };

  useEffect(() => {
    setFnsLocale(lang === LANG_FR ? fnsFrLocale : undefined);
  }, [lang]);

  const value = { lang, setLang, t, fnsLocale };

  return (
    <LangProviderContext.Provider {...props} value={value}>
      {children}
    </LangProviderContext.Provider>
  );
};
