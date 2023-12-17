import style from './bookmarks.module.scss';
import { Link } from 'react-router-dom';
import { deleteItemCart, setItemCart } from '../redux/slices/cartSlice';
import { addBookmark, deleteBookmark } from '../redux/slices/bookmarkSlice.';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { BookmarkItem } from './BookmarkItem';

export const Bookmarks = () => {
  // const item = useSelector((state) => state.book.item);
  const bookmarks = useSelector((state) => state.bookmark.items);

  return (
    <div className={style.content}>
      <h2 className="heading2">Your bookmarks</h2>
      {bookmarks.length === 0 ? (
        <div className={style.empty}>
          Add your first bookmark and enjoy <span>;-)</span>
        </div>
      ) : (
        <ul className={`${style.list} listReset`}>
          {bookmarks.map((el) => (
            <BookmarkItem {...el} key={el.id} />
          ))}
        </ul>
      )}
    </div>
  );
};
