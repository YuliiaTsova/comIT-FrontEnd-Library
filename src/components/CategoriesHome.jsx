import { useDispatch, useSelector } from 'react-redux';
import { Categories } from './Categories';
import { Item } from './Item';
import style from './categoriesHome.module.scss';
import { useEffect } from 'react';
import { fetchBookByCategory } from '../redux/slices/BookSlice';

export const CategoriesHome = () => {
  const currentCategory = useSelector((state) => state.filter.currentCategory);
  const booksList = useSelector((state) => state.book.items);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBookByCategory(currentCategory));
  }, [currentCategory]);
  return (
    <>
      <section className={style.categoriesHome}>
        <h2 className={`${style.title} heading2`}>categories</h2>
        <Categories />
      </section>
      <section className={style.content}>
        <h2 className={`${style.title} heading2`}>romance</h2>
        <ul className={`${style.listItems} listReset`}>
          {booksList.map((el) => (
            <li key={el.bookId}>
              <Item {...el} />
            </li>
          ))}
        </ul>
        <div className={`${style.morePosition} viewMore`}>view more</div>
      </section>
    </>
  );
};
