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
        {/* <img src="" alt="folder" className={style.folder} aria-hidden="true" /> */}
        <h2 className={`${style.title} heading2`}>categories</h2>
        {/* <ul className={`${style.list} listReset`}>
          <li className={style.item}>
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
          </li>
        </ul> */}
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
          {/* <li>
            <Item />
          </li>
          <li>
            <Item />
          </li>
          <li>
            <Item />
          </li>
          <li>
            <Item />
          </li>
          <li>
            <Item />
          </li> */}
        </ul>
        <div className={`${style.morePosition} viewMore`}>view more</div>
      </section>
    </>
  );
};
