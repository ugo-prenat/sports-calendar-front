import { RouterProvider } from '@tanstack/react-router';
import { ThemeProvider } from './common/contexts/theme.contexts';
import { router } from './common/router/Router';
import { LangProvider } from './common/contexts/lang.contexts';
import { CalendarProvider } from './common/contexts/calendar.contexts';

const App = () => (
  <ThemeProvider>
    <LangProvider>
      <CalendarProvider>
        <RouterProvider router={router} />
      </CalendarProvider>
    </LangProvider>
  </ThemeProvider>
);

export default App;
