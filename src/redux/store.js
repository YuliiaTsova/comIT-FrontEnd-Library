import { configureStore } from '@reduxjs/toolkit';
import trandReducer from './slices/trandSlice';
import BookSlice from './slices/BookSlice';
import filterSlice from './slices/filterSlice';
import cartSlice from './slices/cartSlice';

export const store = configureStore({
  reducer: {
    trand: trandReducer,
    book: BookSlice,
    filter: filterSlice,
    cart: cartSlice,
  },
});

// export const store = configureStore({
//     reducer: {
//       filter: filterReducer,
//       pizza: pizzaReducer,
//       cart: cartReducer,
//     },
//   });
