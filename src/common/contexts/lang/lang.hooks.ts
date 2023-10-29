import { useContext } from 'react';
import { LangProviderContext } from './lang.contexts';
import { IFnsFormatOptions } from './lang.models';
import { format as fnsFormat } from 'date-fns';

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
