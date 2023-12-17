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
      <p className={style.title}>
        <strong>
          Total items chekouts: <span> 2</span>
        </strong>
      </p>
      {checkouts.map((el) => (
        <div className={style.content}>
          <div className={style.heading}>Cover</div>
          <div className={style.heading}>Title/Author</div>
          <div className={style.heading}>Due Date</div>
          <div>{el.book.cover}</div>
          <div>
            {el.book.author}
            {el.book.title}
          </div>
          <div>{el.checkout.dueDate}</div>
        </div>
      ))}
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
