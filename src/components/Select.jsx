import { useDispatch, useSelector } from 'react-redux';
import style from './select.module.scss';
import { fetchCategories, setCategory } from '../redux/slices/filterSlice';
import { useEffect } from 'react';
import { fetchBookByCategory } from '../redux/slices/BookSlice';

export const Select = () => {
  const searchValue = useSelector((state) => state.filter.search);
  const categoryList = useSelector((state) => state.filter.items);
  const currentCategory = useSelector((state) => state.filter.currentCategory);
  const selected2 = true;
  const dispatch = useDispatch();
  useEffect(() => {
    if (categoryList.length === 0) {
      dispatch(fetchCategories());
    }
  }, []);

  useEffect(() => {
    if (searchValue === '') {
      dispatch(fetchBookByCategory(currentCategory));
    }
  }, [currentCategory]);

  return (
    <div className={style.selects}>
      <div className={style.categories}>
        <div className={style.title}>{`Results for: "${searchValue}"`}</div>
        <div className={style.parameters}>
          <select
            name=""
            id=""
            className={style.selectCategories}
            onChange={(e) => dispatch(setCategory(e.target.value))}
          >
            <option
              value="Categories"
              className={style.option}
              selected={`${selected2}?'selected':''`}
              disabled
            >
              Categories
            </option>
            {categoryList.map((el) => (
              <option value={el} className={style.option} key={el}>
                {el}
              </option>
            ))}
          </select>
          <select name="" id="" className={style.filter}>
            <option value="romance" className={style.option} selected disabled>
              Filter
            </option>
            <option value="popular" className={style.option}>
              Most popular
            </option>
            <option value="name A-Z" className={style.option}>
              Name A-Z
            </option>
            <option value="name Z-A" className={style.option}>
              Name Z-A
            </option>
          </select>
        </div>
      </div>
    </div>
  );
};
