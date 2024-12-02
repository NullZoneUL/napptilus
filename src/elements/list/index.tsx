import InfiniteScroll from 'react-infinite-scroll-component';
import Translations from '@assets/strings.json';
import Item from './item';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '@state/state';
import { fetchOompaLoompas } from '@state/list';
import './style.scss';

const ItemList = ({ searchValue }: { searchValue: string }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { items, error, currentPage, totalPages } = useSelector(
    (state: RootState) => state.oompaLoompas,
  );
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const pageNumber = useRef(0);

  const activeSearch = useMemo(() => searchValue !== '', [searchValue]);

  const fetchNewPage = () => {
    pageNumber.current++;
    dispatch(fetchOompaLoompas(pageNumber.current));
  };

  useEffect(() => {
    pageNumber.current = currentPage - 1;
    fetchNewPage();
  }, [dispatch]);

  useEffect(() => {
    if (activeSearch) {
      setFilteredList(
        items.filter(item => {
          return (
            item.first_name.toLowerCase().indexOf(searchValue) !== -1 ||
            item.last_name.toLowerCase().indexOf(searchValue) !== -1 ||
            item.profession.toLowerCase().indexOf(searchValue) !== -1
          );
        }),
      );
    }
  }, [searchValue, items, activeSearch]);

  if (error !== null) {
    return (
      <div className="request-error">
        <p>{Translations.error.general}</p>
      </div>
    );
  }

  const finalList = activeSearch ? filteredList : items;

  return (
    <div className="items-container">
      {items?.length > 0 && (
        <InfiniteScroll
          dataLength={!activeSearch ? items.length : filteredList.length}
          next={fetchNewPage}
          loader={<></>}
          hasMore={totalPages > currentPage && !activeSearch}
        >
          {finalList?.map((item, index) => (
            <Item data={item} key={`ITEM_${item.id}_${index}`} />
          ))}
        </InfiniteScroll>
      )}
    </div>
  );
};

export default ItemList;
