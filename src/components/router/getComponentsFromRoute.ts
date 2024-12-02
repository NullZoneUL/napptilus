import Home from '@components/home';
import Detail from '@components/detail';
import PageNotFound from '@components/page-not-found';
import { ReactElement } from 'react';
import { Routes } from '@/routes/pageConfig';

interface ComponentsInterface {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: (props: any) => ReactElement;
}

const components: ComponentsInterface = {
  [Routes.index]: Home,
  [Routes.detail]: Detail,
  [Routes.error]: PageNotFound,
};

const getComponentFromRoute = (route: string) => components[route];

export default getComponentFromRoute;
