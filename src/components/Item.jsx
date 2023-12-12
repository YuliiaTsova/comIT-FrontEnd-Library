import style from './item.module.scss';
import cover from '../assets/img/coverbook.jpg';
import bookmark from '../assets/img/bookmark.svg';
import { ButtonBookmark } from './ButtonBookmark';
import { ButtonHold } from './ButtonHold';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setItemCart } from '../redux/slices/cartSlice';

export const Item = ({ cover, title, bookId, id, author }) => {
  const cartItems = useSelector((state) => state.cart.items);
  // console.log('cartItems', cartItems);
  bookId = bookId || id;
  // const isAdded = cartItems.map((el) => {
  //   el.bookId === bookId});
  // console.log('isAdded', isAdded);

  const isAdded = cartItems.find((el) => el.bookId === bookId);
  console.log('isAdded', isAdded);
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(setItemCart({ cover, title, bookId, author }));
  };

  return (
    <article className={style.item} aria-label="book item">
      {/* <Link to={`/pizza/${props.id}`}></Link> */}

      <Link to={`/book/${bookId}`} className={style.link}>
        {/* <img src={cover} alt="book cover" className={style.cover} /> */}
        <img src={cover} alt="book cover" className={style.cover} />
        <p className={style.title}> {title}</p>
        <div className={style.bookmarkPosition}>
          <ButtonBookmark />
        </div>
      </Link>

      {/* <button className={`${style.btnItem} btn`}>Place hold</button> */}
      <div
        className={style.btnPosition}
        onClick={addToCart}
        style={isAdded ? { pointerEvents: 'none', opacity: '0.5' } : {}}
      >
        <ButtonHold className={style.btnPosition}>
          {isAdded ? 'Added' : 'Place hold'}
        </ButtonHold>
      </div>
    </article>
  );
};
