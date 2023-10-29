import { FC, createContext, useState } from 'react';
import {
  Density,
  IPreferencesContextProps,
  IPreferencesContextState,
  IStoredPreferences
} from './preferences.models';
import { DEFAULT_CALENDAR_VIEW, DEFAULT_DENSITY } from '@/constants';
import { TabId } from '@/pages/home/home.models';
import {
  getStoredPreferences,
  updateStoredPreferences
} from './preferences.utils';

const initialState: IPreferencesContextState = {
  isFiltersColumnOpen: true,
  density: DEFAULT_DENSITY,
  defaultTab: DEFAULT_CALENDAR_VIEW,
  toggleFiltersColumn: () => null,
  setDensity: () => null,
  setDefaultTab: () => null
};

export const PreferencesProviderContext =
  createContext<IPreferencesContextState>(initialState);

export const PreferencesProvider: FC<IPreferencesContextProps> = ({
  children,
  ...props
}) => {
  const storedPreferences: IStoredPreferences | undefined =
    getStoredPreferences();

  const [isFiltersColumnOpen, setIsFiltersColumnOpen] = useState<boolean>(
    storedPreferences?.isFiltersColumnOpen ?? true
  );
  const [density, setDensity] = useState<Density>(
    storedPreferences?.density || DEFAULT_DENSITY
  );
  const [defaultTab, setDefaultTab] = useState<TabId>(
    storedPreferences?.defaultTab || DEFAULT_CALENDAR_VIEW
  );

  const handleToggleFiltersColumn = () => {
    setIsFiltersColumnOpen(!isFiltersColumnOpen);
    updateStoredPreferences(storedPreferences, {
      isFiltersColumnOpen: !isFiltersColumnOpen
    });
  };

  const handleSetDensity = (density: Density) => {
    setDensity(density);
    updateStoredPreferences(storedPreferences, { density });
  };

  const handleSetDefaultTab = (defaultTab: TabId) => {
    setDefaultTab(defaultTab);
    updateStoredPreferences(storedPreferences, { defaultTab });
  };

  const value = {
    isFiltersColumnOpen,
    density,
    defaultTab,
    toggleFiltersColumn: handleToggleFiltersColumn,
    setDensity: handleSetDensity,
    setDefaultTab: handleSetDefaultTab
  };

  return (
    <PreferencesProviderContext.Provider {...props} value={value}>
      {children}
    </PreferencesProviderContext.Provider>
  );
};
