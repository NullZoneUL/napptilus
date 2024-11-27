import store from '@state/state';
import browserRouter from './routes/index.tsx';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import '@assets/styles/_imports.scss';

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <RouterProvider router={browserRouter} />
  </Provider>,
);
