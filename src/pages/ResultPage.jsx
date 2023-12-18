import { Search } from '../components/Search';
import { Select } from '../components/Select';
import style from './resultPage.module.scss';
import { Item } from '../components/Item';
import { useSelector } from 'react-redux';
import { NothingFound } from '../components/NothingFound';

export const ResultPage = () => {
  const books = useSelector((state) => state.book.items);

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
              <li key={el.bookId}>
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
