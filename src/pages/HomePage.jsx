import { useDispatch, useSelector } from 'react-redux';
import { CategoriesHome } from '../components/CategoriesHome';

import { Hero } from '../components/Hero';
import { Trand } from '../components/Trand';
import { useEffect } from 'react';
import { fetchBookmarks } from '../redux/slices/bookmarkSlice.';

export const HomePage = () => {
  return (
    <>
      <Hero />
      <Trand />
      <CategoriesHome />
    </>
  );
};
