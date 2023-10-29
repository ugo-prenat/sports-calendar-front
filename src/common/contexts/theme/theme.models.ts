import { ReactNode } from 'react';
import { THEME_DARK, THEME_LIGHT, THEME_SYSTEM } from '../../../constants';

export type Theme =
  | typeof THEME_LIGHT
  | typeof THEME_DARK
  | typeof THEME_SYSTEM;

export interface IThemeContextProps {
  children: ReactNode;
}

export interface IThemeContextState {
  theme: Theme;
  isDark: boolean;
  setTheme: (theme: Theme) => void;
}
