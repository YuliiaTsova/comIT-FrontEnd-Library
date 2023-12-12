import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalCount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setItemCart: (state, action) => {
      state.items.push(action.payload);
      state.totalCount = state.items.length;

      // return { ...state, items: [...state.items, action.payload] };
    },
    deleteItemCart: (state, action) => {
      state.items = state.items.filter((el) => el.bookId != action.payload);
      state.totalCount--;
    },
  },
});

export const { setItemCart, deleteItemCart } = cartSlice.actions;

export default cartSlice.reducer;
