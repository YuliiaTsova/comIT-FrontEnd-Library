import { useEffect } from 'react';
import style from './categories.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories, setCategory } from '../redux/slices/filterSlice';

// const categoryList = [
//   'Romance',
//   'Adventure',
//   'Detective',
//   'Fantasy',
//   'Classic',
//   'Horror',
// ];

export const Categories = () => {
  const categoryList = useSelector((state) => state.filter.items);
  const currentCategory = useSelector((state) => state.filter.currentCategory);

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
    if (categoryList.length === 0) {
      dispatch(fetchCategories());
    }
  }, []);
  return (
    <ul className={`${style.list} listReset`}>
      {categoryList.map((el) => (
        <li
          className={`${style.item} ${el === currentCategory ? style.active : ''}`}
          onClick={() => dispatch(setCategory(el))}
          key={el}
        >
          {/* <a href="" className={style.link}> */}
          {el}
          {/* </a> */}
        </li>
      ))}
      {/* <li className={style.item}>
        <a href="" className={style.link}>
          Romance
        </a>
      </li>
      <li className={style.item}>
        <a href="" className={style.link}>
          Adventure
        </a>
      </li>
      <li className={style.item}>
        <a href="" className={style.link}>
          Detective
        </a>
      </li>
      <li className={style.item}>
        <a href="" className={style.link}>
          Fantasy
        </a>
      </li>
      <li className={style.item}>
        <a href="" className={style.link}>
          Classic
        </a>
      </li>
      <li className={style.item}>
        <a href="" className={style.link}>
          Horror
        </a>
      </li> */}
    </ul>
  );
};
