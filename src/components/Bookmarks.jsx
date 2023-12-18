import style from './bookmarks.module.scss';
import { useSelector } from 'react-redux';
import { BookmarkItem } from './BookmarkItem';

export const Bookmarks = () => {
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
