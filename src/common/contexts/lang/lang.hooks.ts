import { useContext } from 'react';
import { LangProviderContext } from './lang.contexts';
import { IFnsFormatOptions } from './lang.models';
import { format as fnsFormat } from 'date-fns';
import { IRegionalized } from '@/common/models/sports.models';
import { DEFAULT_LANG } from '@/constants';

export const useTranslation = () => {
  const context = useContext(LangProviderContext);

  if (context === undefined)
    throw new Error('useTranslation must be used within a LangProvider');

  return context;
};

export const useFnsFormat = () => {
  const { fnsLocale } = useContext(LangProviderContext);

  return (date: Date | number, format: string, options?: IFnsFormatOptions) =>
    fnsFormat(date, format, { locale: fnsLocale, ...options });
};

export const useRegionalized = <T extends { [key: string]: unknown }>(
  regionalizedObj: IRegionalized<T>
): T => {
  const { lang } = useTranslation();

  const regionalized = regionalizedObj[lang];
  const defaultRegionalized = regionalizedObj[DEFAULT_LANG];

  return { ...defaultRegionalized, ...regionalized };
};
