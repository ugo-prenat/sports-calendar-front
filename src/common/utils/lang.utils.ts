import { DEFAULT_LANG, LANG_FR, LANG_STORAGE_KEY } from '../../constants';
import { Lang } from '../models/lang.models';

export const getDefaultLang = (): Lang => {
  const lang = localStorage.getItem(LANG_STORAGE_KEY);
  if (lang) return lang as Lang;

  const defaultLang = navigator.language.toLowerCase().includes(LANG_FR)
    ? LANG_FR
    : DEFAULT_LANG;
  localStorage.setItem(LANG_STORAGE_KEY, defaultLang);

  return defaultLang;
};
