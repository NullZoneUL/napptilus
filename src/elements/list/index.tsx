import InfiniteScroll from 'react-infinite-scroll-component';
import Translations from '@assets/strings.json';
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '@state/state';
import { fetchOompaLoompas } from '@state/list';
import './style.scss';

const ItemList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { items, loading, error, currentPage, totalPages } = useSelector(
    (state: RootState) => state.oompaLoompas,
  );
  const pageNumber = useRef(0);

  const fetchNewPage = () => {
    pageNumber.current++;
    dispatch(fetchOompaLoompas(pageNumber.current));
  };

  useEffect(() => {
    fetchNewPage();
  }, []);

  if (error !== null) {
    return (
      <div className="request-error">
        <p>{Translations.error}</p>
      </div>
    );
  }

  console.log(items, loading, error, currentPage, totalPages);

  return (
    <div className="items-container">
      {items?.length > 0 && (
        <InfiniteScroll
          dataLength={items.length}
          next={fetchNewPage}
          loader={<></>}
          hasMore={totalPages > currentPage}
        >
          {items?.map((item, index) => (
            <div className={'' + index} key={'test' + index}></div>
          ))}
        </InfiniteScroll>
      )}
    </div>
  );
};

export default ItemList;
