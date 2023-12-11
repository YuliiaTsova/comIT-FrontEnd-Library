import { Search } from '../components/Search';
import { Select } from '../components/Select';
import style from './resultPage.module.scss';
import { Item } from '../components/Item';
import { useDispatch, useSelector } from 'react-redux';
import { NothingFound } from '../components/NothingFound';
import { useEffect } from 'react';
import { fetchBookByCategory } from '../redux/slices/BookSlice';

export const ResultPage = () => {
  const books = useSelector((state) => state.book.items);
  const currentCategory = useSelector((state) => state.filter.currentCategory);

  const dispatch = useDispatch();
  // useEffect(() => {
  //   console.log('1111111111111111111111111111');
  //   console.log('222222222222222222222222');
  //   dispatch(fetchBookByCategory(currentCategory));
  // }, [currentCategory]);

  return (
    <>
      <div className={style.searchPosition}>
        <Search />
      </div>
      <Select />
      <div className={style.result}>
        {books.length === 0 ? (
          <NothingFound />
        ) : (
          <ul className={`${style.listItems} listReset`}>
            {books.map((el) => (
              <li key={el.id}>
                <Item {...el} id={el.id} />
              </li>
            ))}
          </ul>
        )}
        <div className={`${style.morePosition} viewMore`}>view more</div>
      </div>
    </>
  );
};
