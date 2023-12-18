import { useEffect } from 'react';
import style from './categories.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories, setCategory } from '../redux/slices/filterSlice';

export const Categories = () => {
  const categoryList = useSelector((state) => state.filter.items);
  const currentCategory = useSelector((state) => state.filter.currentCategory);

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
          {el}
        </li>
      ))}
    </ul>
  );
};
