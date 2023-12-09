import style from './item.module.scss';
import cover from '../assets/img/coverbook.jpg';
import bookmark from '../assets/img/bookmark.svg';
import { ButtonBookmark } from './ButtonBookmark';
import { ButtonHold } from './ButtonHold';
import { Link } from 'react-router-dom';

export const Item = ({ cover, title, bookId }) => {
  // export const Item = ({ title }) => {
  return (
    <article className={style.item} aria-label="book item">
      {/* <Link to={`/pizza/${props.id}`}></Link> */}
      <Link to={`/book/${bookId}`}>
        {/* <img src={cover} alt="book cover" className={style.cover} /> */}
        <img src={cover} alt="book cover" className={style.cover} />
        <p> {title}</p>
        <div className={style.bookmarkPosition}>
          <ButtonBookmark />
        </div>
      </Link>
      {/* <button className={`${style.btnItem} btn`}>Place hold</button> */}
      <ButtonHold> Place hold</ButtonHold>
    </article>
  );
};
