import { useEffect, useState } from 'react';
import { Item } from './Item';
import style from './trand.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchTrandBooksPagination,
  setCurrentPageTrand,
} from '../redux/slices/trandSlice';
import { Pagination } from './Pagination';

export const Trand = () => {
  const [books, setBooks] = useState([]);

  const items = useSelector((state) => state.trand.items);
  const currentPage = useSelector((state) => state.trand.currentPage);
  const totalPages = useSelector((state) => state.trand.totalPages);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTrandBooksPagination({ page: currentPage }));
  }, [currentPage]);

  return (
    <section className={style.trand} aria-label="trending book">
      <h2 className={`${style.title} heading2`}>Trending books</h2>
      <div className={style.content}>
        <ul className={`${style.list} listReset`}>
          {items.map((el) => (
            <li className={style.item} key={el.bookId}>
              <Item {...el} />
            </li>
          ))}
        </ul>
        <Pagination
          current={currentPage}
          total={totalPages}
          setPage={setCurrentPageTrand}
        />
      </div>
    </section>
  );
};
