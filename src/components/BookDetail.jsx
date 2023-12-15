import { ButtonBookmark } from './ButtonBookmark';
import style from './bookDetail.module.scss';
import cover from '../assets/img/coverbook.jpg';
import { ButtonHold } from './ButtonHold';
import { Item } from './Item';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchBook } from '../redux/slices/BookSlice';
import { Trand } from './Trand';
import { deleteItemCart, setItemCart } from '../redux/slices/cartSlice';
import { addBookmark } from '../redux/slices/bookmarkSlice.';

export const BookDetail = () => {
  const { id } = useParams();

  const item = useSelector((state) => state.book.item);
  const cartItems = useSelector((state) => state.cart.items);

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

  // useEffect(() => {
  //   axios
  //     .get('http://localhost:3000/db.json')
  //     .then((data) => {
  //       setBooks(data.data);
  //       console.log(books);
  //     })
  //     .catch((er) => {
  //       console.log(er.message);
  //     });
  // }, []);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBook(id));
    window.scrollTo({ top: 0 });
  }, [id]);

  const setBookmark = () => {
    dispatch(addBookmark(id, 1 /*userId*/));
  };

  return (
    <>
      <section className={style.bookDetail}>
        <div className={style.cover}>
          <img src={item.cover} alt="book cover" className={style.coverImg} />
          {/* <img src={props.imageUrl} alt="pizza" /> */}
        </div>
        <article className={style.detail}>
          <div className={style.header}>
            <h2 className="heading2">{item.title}</h2>
            <div className={style.bookmarkPosition} onClick={setBookmark}>
              <ButtonBookmark />
            </div>
          </div>
          <p className={style.author}>Author : {item.author}</p>
          <p className={style.description}>{item.description}</p>
          <div className={style.additionInfo}>
            <p className={style.language}>
              Language :<span className={style.text}>{item.language}</span>
            </p>
            <p className={style.copies}>
              Copies :<span className={style.text}>{item.copies}</span>
            </p>
          </div>
          <div
            className={style.btnPosition}
            style={isAdded ? { opacity: '0.5' } : {}}
            onClick={isAdded ? deleteFromCart : addToCart}
          >
            <ButtonHold>{isAdded ? 'Added' : 'Place hold'}</ButtonHold>
          </div>
        </article>
      </section>
      {/* <section className={style.moreBooks}>
        <div className="viewMore">view more</div>
      </section> */}
    </>
  );
};
