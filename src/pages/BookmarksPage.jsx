import { useDispatch } from 'react-redux';
import { Bookmarks } from '../components/Bookmarks';
import { fetchBookmarks } from '../redux/slices/bookmarkSlice.';
import { useEffect } from 'react';

export const BookmarksPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBookmarks());
  }, []);
  return <Bookmarks />;
};
