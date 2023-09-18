import { DENSITYS, TAB_IDS } from '@/constants';
import { TabId } from '@/pages/home/home.models';
import { ReactNode } from 'react';
import { z } from 'zod';

export type Density = (typeof DENSITYS)[number];

export interface IPreferencesContextProps {
  children: ReactNode;
}
export interface IPreferencesContextState {
  isFiltersColumnOpen: boolean;
  density: Density;
  defaultTab: TabId;
  toggleFiltersColumn: () => void;
  setDensity: (density: Density) => void;
  setDefaultTab: (defaultTab: TabId) => void;
}

export interface IStoredPreferences {
  isFiltersColumnOpen?: boolean;
  density?: Density;
  defaultTab?: TabId;
}

export const storedPreferencesSchema: z.ZodType<IStoredPreferences> = z.object({
  isFiltersColumnOpen: z.boolean().optional(),
  density: z.enum(DENSITYS).optional(),
  defaultTab: z.enum(TAB_IDS).optional()
});
