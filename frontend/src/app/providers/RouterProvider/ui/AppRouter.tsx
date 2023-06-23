import { Suspense, useCallback } from 'react';
import { Route, RouteObject, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

import App from '../../../index';
import { routeConfig } from '../config/routeConfig';

export const AppRouter = () => {
  const renderWithWrapper = useCallback((route: RouteObject) => {
    const element = <Suspense>{route.element}</Suspense>;

    return <Route element={element} path={route.path} key={route.path} />;
  }, []);

  const childrenRoutes = Object.values(routeConfig).map(renderWithWrapper);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<App />}>
        {childrenRoutes}
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};
