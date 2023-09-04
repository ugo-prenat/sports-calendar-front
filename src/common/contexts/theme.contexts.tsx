import { createContext, useEffect, useState } from 'react';
import {
  IThemeContextProps,
  IThemeContextState,
  Theme
} from '../models/theme.models';
import {
  DEFAULT_THEME,
  THEME_DARK,
  THEME_LIGHT,
  THEME_STORAGE_KEY,
  THEME_SYSTEM
} from '../constants';

const initialState: IThemeContextState = {
  theme: DEFAULT_THEME,
  setTheme: () => null
};

export const ThemeProviderContext =
  createContext<IThemeContextState>(initialState);

export const ThemeProvider = ({ children, ...props }: IThemeContextProps) => {
  const [theme, setTheme] = useState<Theme>(
    (localStorage.getItem(THEME_STORAGE_KEY) as Theme) || DEFAULT_THEME
  );

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove(THEME_LIGHT, THEME_DARK);

    if (theme === THEME_SYSTEM) {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')
        .matches
        ? THEME_DARK
        : THEME_LIGHT;

      root.classList.add(systemTheme);
      return;
    }

    root.classList.add(theme);
  }, [theme]);

  const value = {
    theme,
    setTheme: (theme: Theme) => {
      localStorage.setItem(THEME_STORAGE_KEY, theme);
      setTheme(theme);
    }
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
};
