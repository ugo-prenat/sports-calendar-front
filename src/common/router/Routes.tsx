import { Outlet, Route, RootRoute } from '@tanstack/react-router';
import Header from '../../components/header/Header';
import HomePage from '../../pages/home/HomePage';
import SettingsPage from '../../pages/settings/SettingsPage';
import NotFoundPage from '@/pages/notFound/NotFoundPage';
import CreationPage from '@/pages/creation/CreationPage';

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
  component: HomePage
});

const settingsRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/settings',
  component: SettingsPage
});

const creationRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/creation',
  component: CreationPage
});

const notFoundRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '*',
  component: NotFoundPage
});

export const routes = [
  calendarRoute,
  settingsRoute,
  creationRoute,
  notFoundRoute
];
