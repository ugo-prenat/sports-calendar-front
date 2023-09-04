import { useContext } from 'react';
import { ThemeProviderContext } from '../contexts/theme.contexts';
import { IThemeContextState } from '../models/theme.models';

export const useTheme = (): IThemeContextState => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined)
    throw new Error('useTheme must be used within a ThemeProvider');

  return context;
};
