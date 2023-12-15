import { useDispatch, useSelector } from 'react-redux';
import { CategoriesHome } from '../components/CategoriesHome';

import { Hero } from '../components/Hero';
import { Trand } from '../components/Trand';
import { useEffect } from 'react';
import { fetchBookmarks } from '../redux/slices/bookmarkSlice.';

export const HomePage = () => {
  // const dispatch = useDispatch();
  // const bookmarks = useSelector((state) => state.bookmark.items);

  // useEffect(() => {
  //   if (bookmarks.length === 0) {
  //     dispatch(fetchBookmarks());
  //   }
  // }, []);
  return (
    <>
      <Hero />
      <Trand />
      <CategoriesHome />
    </>
  );
};
