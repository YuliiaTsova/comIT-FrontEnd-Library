import style from './bookmarkItem.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBook } from '../redux/slices/BookSlice';
import { deleteItemCart, setItemCart } from '../redux/slices/cartSlice';
import { addBookmark, deleteBookmark } from '../redux/slices/bookmarkSlice.';
import { ButtonBookmark } from './ButtonBookmark';
import { ButtonHold } from './ButtonHold';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export const BookmarkItem = (props) => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  //   const isBookmark = bookmarks.filter((el) => {
  //     return el.bookId == +id;
  //   });

  //   let bookmarkId;
  //   if (isBookmark.length !== 0) {
  //     bookmarkId = isBookmark[0].id;
  //   }

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

  //   const dispatch = useDispatch();
  //   useEffect(() => {
  //     dispatch(fetchBook(id));
  //     window.scrollTo({ top: 0 });
  //   }, [id]);

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
        {/* <img src={props.imageUrl} alt="pizza" /> */}
      </div>
      <article className={style.detail}>
        <div className={style.header}>
          <h2 className="heading2">{props.title}</h2>
          <div className={style.bookmarkPosition} onClick={removeBookmark}>
            <ButtonBookmark bookmarkId={true} />
          </div>
        </div>
        <p className={style.author}>Author : {props.author}</p>
        {/* <p className={style.description}>{item.description}</p>
        <div className={style.additionInfo}>
          <p className={style.language}>
            Language :<span className={style.text}>{item.language}</span>
          </p> 
        </div>*/}
        <div
          className={style.btnPosition}
          // style={isAdded ? { opacity: '0.5' } : {}}
          onClick={isAdded ? deleteFromCart : addToCart}
        >
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
      {/* <div className={style.img}>
                <Link to={`/book/${el.bookId}`}>
                  <img src={el.cover} alt="book cover" className={style.cover} />
                </Link>
              </div>
              <div className={style.info}>
                <p className={style.author}>{el.author}</p>
                <p className={style.name}>{el.title} </p>
                
              </div> */}
    </li>
  );
};
