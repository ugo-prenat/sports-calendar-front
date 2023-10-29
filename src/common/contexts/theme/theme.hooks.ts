import { useContext } from 'react';
import { ThemeProviderContext } from './theme.contexts';
import { IThemeContextState } from './theme.models';

export const useTheme = (): IThemeContextState => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined)
    throw new Error('useTheme must be used within a ThemeProvider');

  return context;
};
