import Searcher from '@elements/searcher';
import { useCallback } from 'react';

const Home = () => {
  const onInput = useCallback((value: string) => {
    console.log('TODOOOOO!', value);
  }, []);

  return (
    <>
      <Searcher onInput={onInput} />
    </>
  );
};

export default Home;
