import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  items: [],
  status: 'loading', //loading, success, error
};

export const fetchBooks = createAsyncThunk('book/fetchBooks', async () => {
  // const category = categoryId === 0 ? '' : `&category=${categoryId}`;
  // const sort = `&sortBy=${sortType.replace('-', '')}&order=${
  //   sortType.includes('-') ? 'desc' : 'asc'
  // }`;
  // const page = `page=${currentPage}&limit=8`;
  console.log('1111111111');
  //const res = await axios.get('http://localhost:3000/db.json');
  const res = await axios.get('http://localhost:3000/books');
  console.log('22222222222');

  return res.data;
});

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
    },
  },
  // extraReducers: {
  //   [fetchPizzas.pending]: (state, action) => {
  //     state.status = 'loading';
  //     state.items = [];
  //   },
  //   [fetchPizzas.fulfilled]: (state, action) => {
  //     state.status = 'success';
  //     state.items = action.payload;
  //   },
  //   [fetchPizzas.rejected]: (state, action) => {
  //     state.status = action.error.message;
  //     state.items = [];
  //   },
  // },
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.pending, (state, action) => {
      state.status = 'loading';
    });

    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      state.status = 'success';
      state.items = action.payload;
    });

    builder.addCase(fetchBooks.rejected, (state, action) => {
      state.status = action.error.message;
      state.items = [];
    });
  },
});

export const { setItems } = bookSlice.actions;

export default bookSlice.reducer;
