import { useContext } from 'react';
import { LangProviderContext } from '../contexts/lang.contexts';

export const useTranslation = () => {
  const context = useContext(LangProviderContext);

  if (context === undefined)
    throw new Error('useTranslation must be used within a LangProvider');

  return context;
};
