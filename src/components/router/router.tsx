import App from '@components/app';
import pagesConfig from '@/routes/pageConfig';
import getComponentFromRoute from './components/getComponentsFromRoute';
//import updateMetaDescription from "./updateDescription";
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Routes } from '@/routes/pageConfig';

type RoutesType = Routes;

const RouterManager = ({ route }: { route: RoutesType }) => {
  const Page = getComponentFromRoute(route);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const props: any = useParams();

  useEffect(() => {
    //TODO!! Add literals before using the code below
    /*document.title = literals.page_title[route];
    updateMetaDescription(literals.page_description[route]);*/
  }, [route]);

  return (
    <App {...pagesConfig[route]}>
      <Page {...props}></Page>
    </App>
  );
};

export default RouterManager;
