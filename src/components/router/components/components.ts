import Home from '@components/home';
import PageNotFound from '@components/page-not-found';
import { ReactElement } from 'react';
import { Routes } from '@/routes/pageConfig';

interface ComponentsInterface {
  [key: string]: (props: unknown) => ReactElement;
}

const components: ComponentsInterface = {
  [Routes.index]: Home,
  [Routes.error]: PageNotFound,
};

export { components };
