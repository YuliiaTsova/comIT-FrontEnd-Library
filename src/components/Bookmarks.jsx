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
      {console.log('RENDER BOOKMARKS')}
      <h2 className="heading2">Your bookmarks</h2>
      <ul className={`${style.list} listReset`}>
        {bookmarks.map((el) => (
          <BookmarkItem {...el} key={el.id} />
        ))}
      </ul>
    </div>
  );
};
