import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './slices/bookSlice';

export const store = configureStore({
  reducer: {
    book: bookReducer,
  },
});

// export const store = configureStore({
//     reducer: {
//       filter: filterReducer,
//       pizza: pizzaReducer,
//       cart: cartReducer,
//     },
//   });
