import { PREFERENCES_STORAGE_KEY } from '@/constants';
import {
  IStoredPreferences,
  storedPreferencesSchema
} from '../models/preferences.models';

export const getStoredPreferences = (): IStoredPreferences | undefined => {
  const storedPreferences = localStorage.getItem(PREFERENCES_STORAGE_KEY);
  if (!storedPreferences) return undefined;

  const parse = storedPreferencesSchema.safeParse(
    JSON.parse(storedPreferences)
  );

  if (!parse.success) return undefined;
  return parse.data;
};

export const updateStoredPreferences = (
  sotredPreferences: IStoredPreferences | undefined,
  newPreferences: Partial<IStoredPreferences>
) => {
  localStorage.setItem(
    PREFERENCES_STORAGE_KEY,
    JSON.stringify({
      ...sotredPreferences,
      ...newPreferences
    })
  );
};
