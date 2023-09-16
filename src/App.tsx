import { RouterProvider } from '@tanstack/react-router';
import { ThemeProvider } from './common/contexts/theme.contexts';
import { router } from './common/router/Router';
import { LangProvider } from './common/contexts/lang.contexts';
import { CalendarProvider } from './common/contexts/calendar.contexts';
import { ChampionshipsProvider } from './common/contexts/championships.contexts';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

const App = () => (
  <ThemeProvider>
    <LangProvider>
      <CalendarProvider>
        <ChampionshipsProvider>
          <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
          </QueryClientProvider>
        </ChampionshipsProvider>
      </CalendarProvider>
    </LangProvider>
  </ThemeProvider>
);

export default App;
