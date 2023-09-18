import { useContext } from 'react';
import { PreferencesProviderContext } from '../contexts/preferences.contexts';

export const usePreferences = () => {
  const context = useContext(PreferencesProviderContext);

  if (context === undefined)
    throw new Error('usePreferences must be used within a PreferencesProvider');

  return context;
};
