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

  //////////////////!!!!!!!!!!!!
  useEffect(() => {
    console.log('!!!!!!!!!!!!!!!!!!!!!!!!', searchValue);
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
              <option value={el} className={style.option}>
                {el}
              </option>
            ))}
            {/* <option value="romance" className={style.option} selected disabled>
              Categories
            </option>
            <option value="adventure" className={style.option}>
              Adventure
            </option>
            <option value="detective" className={style.option}>
              Detective
            </option> */}
          </select>
          <select name="" id="" className={style.filter}>
            <option value="romance" className={style.option} selected disabled>
              Filter
            </option>
            <option value="adventure" className={style.option}>
              Most popular
            </option>
            <option value="detective" className={style.option}>
              New
            </option>
          </select>
        </div>
      </div>
    </div>
  );
};
