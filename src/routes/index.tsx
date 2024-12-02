import RouterManager from '@components/router';
import { createBrowserRouter } from 'react-router-dom';
import { Routes } from './pageConfig';

const browserRouter = createBrowserRouter([
  {
    path: '/',
    element: <RouterManager route={Routes.index} />,
    errorElement: <RouterManager route={Routes.index} />,
  },
  {
    path: Routes.index,
    element: <RouterManager route={Routes.index} />,
  },
  {
    path: `${Routes.detail}/:id`,
    element: <RouterManager route={Routes.detail} />,
  },
  {
    path: '*',
    element: <RouterManager route={Routes.error} />,
  },
]);

export default browserRouter;
