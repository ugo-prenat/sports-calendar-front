import { RouterProvider } from '@tanstack/react-router';
import { ThemeProvider } from './common/contexts/theme/theme.contexts';
import { router } from './common/router/Router';
import { LangProvider } from './common/contexts/lang/lang.contexts';
import { CalendarProvider } from './common/contexts/calendar/calendar.contexts';
import { ChampionshipsProvider } from './common/contexts/championships/championships.contexts';
import { PreferencesProvider } from './common/contexts/preferences/preferences.contexts';

import { Toaster } from '@/components/ui/toaster';

const App = () => (
  <ThemeProvider>
    <LangProvider>
      <CalendarProvider>
        <ChampionshipsProvider>
          <PreferencesProvider>
            <RouterProvider router={router} />
            <Toaster />
          </PreferencesProvider>
        </ChampionshipsProvider>
      </CalendarProvider>
    </LangProvider>
  </ThemeProvider>
);

export default App;
