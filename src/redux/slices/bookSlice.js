import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  item: 0,
  items: [],
  status: 'loading', //loading, success, error
};

export const fetchBook = createAsyncThunk('book/fetchBook', async (id) => {
  // const category = categoryId === 0 ? '' : `&category=${categoryId}`;
  // const sort = `&sortBy=${sortType.replace('-', '')}&order=${
  //   sortType.includes('-') ? 'desc' : 'asc'
  // }`;
  // const page = `page=${currentPage}&limit=8`;

  //const res = await axios.get('http://localhost:3000/db.json');
  const res = await axios.get(`/books/${id}`);

  return res.data;
});

export const fetchBookByCategory = createAsyncThunk(
  'book/fetchBookByCategory',
  async (name) => {
    const res = await axios.get(`/api/books/category?name=${name}`);
    return res.data;
  }
);

export const searchBooks = createAsyncThunk('book/searchBooks', async (search) => {
  const res = await axios.get(`/books/name?title=${search}`);
  return res.data;
});

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    setItem: (state, action) => {
      state.item = action.payload;
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
    builder.addCase(fetchBook.pending, (state, action) => {
      state.status = 'loading';
    });

    builder.addCase(fetchBook.fulfilled, (state, action) => {
      state.status = 'success';
      state.item = action.payload;
    });

    builder.addCase(fetchBook.rejected, (state, action) => {
      state.status = action.error.message;
      state.item = [];
    });
    builder.addCase(fetchBookByCategory.pending, (state, action) => {
      state.status = 'loading';
    });

    builder.addCase(fetchBookByCategory.fulfilled, (state, action) => {
      state.status = 'success';
      state.items = action.payload.books;
    });

    builder.addCase(fetchBookByCategory.rejected, (state, action) => {
      state.status = action.error.message;
      state.items = [];
    });
    ///////////
    builder.addCase(searchBooks.pending, (state, action) => {
      state.status = 'loading';
    });

    builder.addCase(searchBooks.fulfilled, (state, action) => {
      state.status = 'success';
      state.items = action.payload;
    });

    builder.addCase(searchBooks.rejected, (state, action) => {
      state.status = action.error.message;
      state.item = [];
    });
  },
});

export const { setItem } = bookSlice.actions;

export default bookSlice.reducer;
