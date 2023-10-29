import { FC, createContext, useEffect, useState } from 'react';
import { IThemeContextProps, IThemeContextState, Theme } from './theme.models';
import {
  DEFAULT_THEME,
  THEME_DARK,
  THEME_LIGHT,
  THEME_STORAGE_KEY,
  THEME_SYSTEM
} from '../../../constants';

const initialState: IThemeContextState = {
  theme: DEFAULT_THEME,
  setTheme: () => null,
  isDark: window.matchMedia('(prefers-color-scheme: dark)').matches
};

export const ThemeProviderContext =
  createContext<IThemeContextState>(initialState);

export const ThemeProvider: FC<IThemeContextProps> = ({
  children,
  ...props
}) => {
  const [theme, setTheme] = useState<Theme>(
    (localStorage.getItem(THEME_STORAGE_KEY) as Theme) || DEFAULT_THEME
  );
  const [isDark, setIsDark] = useState<boolean>(
    window.matchMedia('(prefers-color-scheme: dark)').matches
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
      setIsDark(systemTheme === THEME_DARK);
      return;
    }

    root.classList.add(theme);
    setIsDark(theme === THEME_DARK);
  }, [theme]);

  const value = {
    theme,
    isDark,
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
