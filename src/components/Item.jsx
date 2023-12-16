import style from './item.module.scss';
import cover from '../assets/img/coverbook.jpg';
import bookmark from '../assets/img/bookmark.svg';
import { ButtonBookmark } from './ButtonBookmark';
import { ButtonHold } from './ButtonHold';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteItemCart, setItemCart } from '../redux/slices/cartSlice';
import { addBookmark, deleteBookmark } from '../redux/slices/bookmarkSlice.';

export const Item = ({ cover, title, bookId, id, author, copies }) => {
  const cartItems = useSelector((state) => state.cart.items);
  const bookmarks = useSelector((state) => state.bookmark.items);

  bookId = bookId || id;
  let bookmarkId;
  // const isBookmark = bookmarks.includes(bookId);
  const isBookmark = bookmarks.filter((el) => el.bookId === bookId);

  if (isBookmark.length !== 0) {
    bookmarkId = isBookmark[0].id;
  }
  const isAdded = cartItems.find((el) => el.bookId === bookId);

  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(setItemCart({ cover, title, bookId, author }));
  };

  const deleteFromCart = () => {
    dispatch(deleteItemCart(bookId));
  };

  const setBookmark = () => {
    dispatch(addBookmark(bookId, 1 /*userId*/));
  };

  const removeBookmark = () => {
    dispatch(deleteBookmark(bookmarkId));
  };

  return (
    <article className={style.item} aria-label="book item">
      {console.log('RENDERRRRRRR')}
      {/* <Link to={`/pizza/${props.id}`}></Link> */}

      <Link to={`/book/${bookId}`} className={style.link}>
        {/* <img src={cover} alt="book cover" className={style.cover} /> */}
        <img src={cover} alt="book cover" className={style.cover} />
        <p className={style.title}> {title}</p>{' '}
      </Link>
      <div
        className={style.bookmarkPosition}
        onClick={bookmarkId ? removeBookmark : setBookmark}
      >
        <ButtonBookmark bookmarkId={bookmarkId} />
      </div>

      {/* <button className={`${style.btnItem} btn`}>Place hold</button> */}
      <div
        className={style.btnPosition}
        onClick={isAdded ? deleteFromCart : addToCart}
        style={
          copies != 0
            ? isAdded
              ? { opacity: '0.6' }
              : {}
            : { opacity: '0.3', pointerEvents: 'none' }
        }
      >
        <ButtonHold className={style.btnPosition}>
          {copies != 0 ? (isAdded ? 'Delete hold' : 'Place hold') : 'Unavailable'}
        </ButtonHold>
      </div>
    </article>
  );
};
