import { useDispatch, useSelector } from 'react-redux';
import style from './checkouts.module.scss';
import { useEffect } from 'react';
import { fetchCheckouts } from '../redux/slices/profileSlice';

export const Checkouts = () => {
  const checkouts = useSelector((state) => state.profile.checkouts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCheckouts());
  }, []);
  return (
    <section className={style.info}>
      <p className={style.header}>
        <strong>Your checkouts:</strong>
      </p>{' '}
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
      {/* <div className={style.content}>
        <div className={style.heading}>Cover</div>
        <div className={style.heading}>Title/Author</div>
        <div className={style.heading}>Due Date</div>
        <div>jjnnj</div>
        <div>King</div>
        <div>12/12/2023</div>
        <div>jjnnj</div>
        <div>King</div>
        <div>12/12/2023</div>
      </div> */}
    </section>
  );
};
