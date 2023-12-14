import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  items: [],
  totalCount: 0,
  status: '',
};

export const placeOrder = createAsyncThunk('cart/placeOrder', async (bookIdList) => {
  const res = await axios.post(
    'http://localhost:8080/checkout/add',
    { userID: 1, books: bookIdList },
    {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    }
  );
  return res.data;
});

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
  extraReducers: (builder) => {
    builder.addCase(placeOrder.pending, (state, action) => {
      state.status = 'loading';
    });

    builder.addCase(placeOrder.fulfilled, (state, action) => {
      state.status = 'success';
      state.items = [];
      state.totalCount = 0;
    });

    builder.addCase(placeOrder.rejected, (state, action) => {
      state.status = action.error.message;
    });
  },
});

export const { setItemCart, deleteItemCart } = cartSlice.actions;

export default cartSlice.reducer;
