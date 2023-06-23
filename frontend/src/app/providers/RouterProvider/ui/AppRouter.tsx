import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { routeConfig } from '../config/routeConfig';

const router = createBrowserRouter(Object.values(routeConfig));

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
