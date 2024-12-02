import Translations from '@assets/strings.json';
import { Link } from 'react-router-dom';
import { Routes } from '@/routes/pageConfig';
import './style.scss';

const PageNotFound = () => {
  return (
    <div className="not-found-container">
      <p>{Translations.notFound}</p>
      <Link to={`/${Routes.index}`}>{Translations.backMain}</Link>
    </div>
  );
};

export default PageNotFound;
