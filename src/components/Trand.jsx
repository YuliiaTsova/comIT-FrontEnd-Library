import { useEffect, useState } from 'react';
import { Item } from './Item';
import style from './trand.module.scss';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks } from '../redux/slices/bookSlice';

export const Trand = () => {
  const [books, setBooks] = useState([]);

  const items = useSelector((state) => state.book.items);

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

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  console.log(items);

  return (
    <section className={style.trand} aria-label="tranding book">
      <h2 className={`${style.title} heading2`}>Tranding books</h2>
      <div className={style.content}>
        <div className={`${style.more} viewMore`}>view more</div>
        <ul className={`${style.list} listReset`}>
          {items.map((el) => (
            <li className={style.item} key={el.id}>
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
      </div>
    </section>
  );
};
