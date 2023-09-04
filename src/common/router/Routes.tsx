import { Outlet, Route, RootRoute } from '@tanstack/react-router';
import Header from '../../components/Header';
import Calendar from '../../pages/calendar/CalendarPage';
import Settings from '../../pages/settings/SettingsPage';
import Manage from '../../pages/manage/ManagePage';
import NotFoundPage from '@/pages/notFound/NotFoundPage';

export const rootRoute = new RootRoute({
  component: () => (
    <>
      <Header />
      <Outlet />
    </>
  )
});

const calendarRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Calendar
});

const settingsRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/settings',
  component: Settings
});

const manageRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/manage',
  component: Manage
});

const notFoundRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '*',
  component: NotFoundPage
});

export const routes = [
  calendarRoute,
  settingsRoute,
  manageRoute,
  notFoundRoute
];
