import { configureStore } from '@reduxjs/toolkit';
import trandReducer from './slices/trandSlice';
import BookSlice from './slices/BookSlice';
import filterSlice from './slices/filterSlice';
import cartSlice from './slices/cartSlice';
import authSlice from './slices/authSlice';
import bookmarkSlice from './slices/bookmarkSlice.';
import profileSlice from './slices/profileSlice';

export const store = configureStore({
  reducer: {
    trand: trandReducer,
    book: BookSlice,
    filter: filterSlice,
    cart: cartSlice,
    bookmark: bookmarkSlice,
    profile: profileSlice,
    auth: authSlice,
  },
});

// export const store = configureStore({
//     reducer: {
//       filter: filterReducer,
//       pizza: pizzaReducer,
//       cart: cartReducer,
//     },
//   });
