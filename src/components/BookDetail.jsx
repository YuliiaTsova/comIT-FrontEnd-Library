import { ButtonBookmark } from './ButtonBookmark';
import style from './bookDetail.module.scss';
import { ButtonHold } from './ButtonHold';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchBook } from '../redux/slices/BookSlice';
import { deleteItemCart, setItemCart } from '../redux/slices/cartSlice';
import { addBookmark, deleteBookmark } from '../redux/slices/bookmarkSlice.';

export const BookDetail = () => {
  const { id } = useParams();

  const item = useSelector((state) => state.book.item);
  const cartItems = useSelector((state) => state.cart.items);
  const bookmarks = useSelector((state) => state.bookmark.items);
  const dispatch = useDispatch();
  const isBookmark = bookmarks.filter((el) => {
    return el.bookId == +id;
  });

  let bookmarkId;
  if (isBookmark.length !== 0) {
    bookmarkId = isBookmark[0].id;
  }

  const isAdded = cartItems.find((el) => el.bookId == id);
  const addToCart = () => {
    dispatch(
      setItemCart({
        cover: item.cover,
        title: item.title,
        bookId: id,
        author: item.author,
      })
    );
  };

  const deleteFromCart = () => {
    dispatch(deleteItemCart(id));
  };

  useEffect(() => {
    dispatch(fetchBook(id));
    window.scrollTo({ top: 0 });
  }, [id]);

  const setBookmark = () => {
    dispatch(addBookmark(id, 1 /*userId*/));
  };

  const removeBookmark = () => {
    dispatch(deleteBookmark(bookmarkId));
  };

  return (
    <>
      <section className={style.bookDetail} aria-label="book details">
        <div className={style.cover}>
          <img src={item.cover} alt="book cover" className={style.coverImg} />
        </div>
        <article className={style.detail}>
          <div className={style.header}>
            <h2 className="heading2">{item.title}</h2>
            <div
              className={style.bookmarkPosition}
              onClick={bookmarkId ? removeBookmark : setBookmark}
            >
              <ButtonBookmark bookmarkId={bookmarkId} />
            </div>
          </div>
          <p className={style.author}>Author : {item.author}</p>
          <p className={style.description}>{item.description}</p>
          <div className={style.additionInfo}>
            <p className={style.language}>
              Language :<span className={style.text}>{item.language}</span>
            </p>
          </div>
          <div
            className={style.btnPosition}
            style={isAdded ? { opacity: '0.5' } : {}}
            onClick={isAdded ? deleteFromCart : addToCart}
          >
            <div
              style={
                item.copies != 0
                  ? isAdded
                    ? { opacity: '0.6' }
                    : {}
                  : { opacity: '0.3', pointerEvents: 'none' }
              }
            >
              <ButtonHold>
                {item.copies != 0
                  ? isAdded
                    ? 'Delete hold'
                    : 'Place hold'
                  : 'Unavailable'}
              </ButtonHold>
            </div>
          </div>
        </article>
      </section>
    </>
  );
};
