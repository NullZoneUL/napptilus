import SearchIcon from '@assets/images/ic_search.png';
import Translations from '@assets/strings.json';
import { useCallback, useEffect, useRef, useState } from 'react';
import './style.scss';

interface SearcherProps {
  onInput: (value: string) => void;
  defaultValue?: string;
}

const TIME_UPDATE = 300;

const Searcher = ({ defaultValue = '', onInput }: SearcherProps) => {
  const [inputValue, setInputValue] = useState(defaultValue);
  const inputRef = useRef<HTMLInputElement>(null);
  const updateTimeout = useRef<number>();

  const onInput_ = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      setInputValue(value);

      window.clearTimeout(updateTimeout.current);
      updateTimeout.current = window.setTimeout(() => {
        onInput(value.toLowerCase());
      }, TIME_UPDATE);
    },
    [onInput],
  );

  useEffect(() => {
    return () => {
      window.clearTimeout(updateTimeout.current);
    };
  }, []);

  return (
    <div className="searcher-container">
      <div className="searcher-input-container">
        <input
          type="text"
          placeholder={Translations.search}
          onInput={onInput_}
          ref={inputRef}
          value={inputValue}
        />
        <img src={SearchIcon} />
      </div>
    </div>
  );
};

export default Searcher;
