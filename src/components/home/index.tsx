import Searcher from '@elements/searcher';
import ItemList from '@elements/list';
import Translations from '@assets/strings.json';
import { useCallback } from 'react';
import './style.scss';

const Home = () => {
  const onInput = useCallback((value: string) => {
    console.log('TODOOOOO!', value);
  }, []);

  return (
    <>
      <Searcher onInput={onInput} />
      <h1>{Translations.title}</h1>
      <h2>{Translations.subtitle}</h2>
      <ItemList />
    </>
  );
};

export default Home;
