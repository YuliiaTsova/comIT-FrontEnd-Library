import { useDispatch } from 'react-redux';
import style from './pagination.module.scss';

export const Pagination = ({ current, total, setPage }) => {
  const dispatch = useDispatch();
  console.log('currentPage', current);
  return (
    <div className={style.pagination}>
      <ul className={`${style.list} listReset`}>
        {[...Array(total + 1).keys()].slice(1).map((el, i) => (
          //   <li className={style.item} key={i} onClick={() => setPage(i)}>
          <li
            className={`${style.item} ${el == current + 1 ? style.active : ''}`}
            key={el}
            onClick={() => dispatch(setPage(i))}
          >
            {el}
          </li>
        ))}
      </ul>
    </div>
  );
};
