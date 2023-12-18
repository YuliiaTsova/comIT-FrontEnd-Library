import { useDispatch, useSelector } from 'react-redux';
import style from './checkouts.module.scss';
import { useEffect } from 'react';
import { fetchCheckouts, setCurrentPageCheckout } from '../redux/slices/profileSlice';
import { Pagination } from './Pagination';

export const Checkouts = () => {
  const checkouts = useSelector((state) => state.profile.checkouts);
  const currentPage = useSelector((state) => state.profile.currentPage);
  const totalPages = useSelector((state) => state.profile.totalPages);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCheckouts({ page: currentPage }));
  }, [currentPage]);

  return (
    <section className={style.info}>
      <p className={style.header}>
        <strong>Your checkouts:</strong>
      </p>{' '}
      {checkouts.length === 0 ? (
        <div>No checkouts as for now</div>
      ) : (
        <div className={style.content}>
          <ul className={`${style.list} listReset`}>
            <li className={style.item}>
              <p className={`${style.heading} ${style.cover}`}>Cover</p>
              <p className={`${style.heading} ${style.title}`}>Author and Title </p>
              <p className={`${style.heading} ${style.date}`}>Due Date</p>
              <p className={`${style.heading} ${style.status}`}>Returned</p>
            </li>
            {checkouts.map((el) => (
              <li className={style.item} key={el.id}>
                <p className={`${style.coverImg}`}>
                  <img src={el.book.cover} alt="book cover" />
                </p>
                <p className={` ${style.title}`}>
                  <span>{el.book.author}</span>
                  <span>{el.book.title}</span>
                </p>
                <p className={` ${style.date}`}>{el.checkout.dueDate}</p>
                <p className={`${style.status}`}>No</p>
              </li>
            ))}
          </ul>{' '}
        </div>
      )}
      <div className={style.paginationPosition}>
        <Pagination
          current={currentPage}
          total={totalPages}
          setPage={setCurrentPageCheckout}
        />
      </div>
    </section>
  );
};
