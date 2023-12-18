import style from './bookmarkItem.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { deleteItemCart, setItemCart } from '../redux/slices/cartSlice';
import { deleteBookmark } from '../redux/slices/bookmarkSlice.';
import { ButtonBookmark } from './ButtonBookmark';
import { ButtonHold } from './ButtonHold';
import { Link } from 'react-router-dom';

export const BookmarkItem = (props) => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const bookmarkId = true;
  const isAdded = cartItems.find((el) => el.bookId == props.bookId);
  const addToCart = () => {
    dispatch(
      setItemCart({
        cover: props.cover,
        title: props.title,
        bookId: props.bookId,
        author: props.author,
      })
    );
  };

  const deleteFromCart = () => {
    dispatch(deleteItemCart(props.bookId));
  };

  const removeBookmark = () => {
    dispatch(deleteBookmark(props.id));
  };

  return (
    <li className={style.item} key={props.bookId}>
      <div className={style.cover}>
        {' '}
        <Link to={`/book/${props.bookId}`}>
          <img src={props.cover} alt="book cover" className={style.coverImg} />
        </Link>
      </div>
      <article className={style.detail}>
        <div className={style.header}>
          <h2 className="heading2">{props.title}</h2>
          <div className={style.bookmarkPosition} onClick={removeBookmark}>
            <ButtonBookmark bookmarkId={true} />
          </div>
        </div>
        <p className={style.author}>Author : {props.author}</p>
        <div className={style.btnPosition} onClick={isAdded ? deleteFromCart : addToCart}>
          <div
            style={
              props.copies != 0
                ? isAdded
                  ? { opacity: '0.6' }
                  : {}
                : { opacity: '0.3', pointerEvents: 'none' }
            }
          >
            <ButtonHold>
              {props.copies != 0
                ? isAdded
                  ? 'Delete hold'
                  : 'Place hold'
                : 'Unavailable'}
            </ButtonHold>
          </div>
        </div>
      </article>
    </li>
  );
};
