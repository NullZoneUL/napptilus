import Searcher from '@elements/searcher';
import ItemList from '@elements/list';
import Translations from '@assets/strings.json';
import { useCallback, useState } from 'react';
import './style.scss';

const Home = () => {
  const [searchValue, setSearchValue] = useState('');

  const onInput = useCallback((value: string) => setSearchValue(value), []);

  return (
    <>
      <Searcher onInput={onInput} />
      <h1>{Translations.title}</h1>
      <h2>{Translations.subtitle}</h2>
      <ItemList searchValue={searchValue} />
    </>
  );
};

export default Home;
