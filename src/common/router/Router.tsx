import { Router } from '@tanstack/react-router';
import { rootRoute, routes } from './Routes';

const routeTree = rootRoute.addChildren(routes);
export const router = new Router({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
