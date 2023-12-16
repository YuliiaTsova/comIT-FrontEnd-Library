import { useEffect, useState } from 'react';
import { Item } from './Item';
import style from './trand.module.scss';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchTrandBooks,
  fetchTrandBooksPagination,
  setCurrentPage,
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

  // const setPage = (page) => {
  //   console.log('setPage', page);
  //   dispatch(setCurrentPageTrand(page));
  // };
  // useEffect(() => {
  //   axios
  //     .get('http://localhost:3000/db.json')
  //     .then((data) => {
  //       setBooks(data.data);
  //       console.log(books);
  //     })
  //     .catch((er) => {
  //       console.log(er.message);
  //     });
  // }, []);

  // useEffect(() => {
  //   // if (items.length === 0) {
  //   // dispatch(fetchTrandBooks());
  //   const page = 0;
  //   const num = 4;
  //   dispatch(fetchTrandBooksPagination({ page, num }));
  //   // }
  // }, []);

  return (
    <section className={style.trand} aria-label="tranding book">
      <h2 className={`${style.title} heading2`}>Tranding books</h2>
      <div className={style.content}>
        <div className={`${style.more} viewMore`}>view more</div>
        <ul className={`${style.list} listReset`}>
          {items.map((el) => (
            <li className={style.item} key={el.bookId}>
              <Item {...el} />
            </li>
          ))}
          {/* <li className={style.item}>
            <Item />
          </li>
          <li className={style.item}>
            <Item />
          </li>
          <li className={style.item}>
            <Item />
          </li>
          <li className={style.item}>
            <Item />
          </li> */}
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
