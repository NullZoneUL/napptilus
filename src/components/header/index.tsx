import Translations from '@assets/strings.json';
import { Link } from 'react-router-dom';
import { Routes } from '@/routes/pageConfig';
import './style.scss';

const Header = () => (
  <header>
    <Link to={`/${Routes.index}`}>
      <picture>
        <source
          srcSet="/android-chrome-512x512.png"
          media="(min-width: 768px)"
        />
        <img id="logo" src="/android-chrome-192x192.png" alt="Logo" />
      </picture>
    </Link>
    <h1>{Translations.header}</h1>
  </header>
);

export default Header;
