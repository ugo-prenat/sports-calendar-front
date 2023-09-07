import { RouterProvider } from '@tanstack/react-router';
import { ThemeProvider } from './common/contexts/theme.contexts';
import { router } from './common/router/Router';
import { LangProvider } from './common/contexts/lang.contexts';

const App = () => (
  <ThemeProvider>
    <LangProvider>
      <RouterProvider router={router} />
    </LangProvider>
  </ThemeProvider>
);

export default App;
