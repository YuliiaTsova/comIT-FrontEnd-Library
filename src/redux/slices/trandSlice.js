import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  items: [],
  totalPages: 0,
  currentPage: 0,
  size: 4,
  status: 'loading', //loading, success, error
};

export const fetchTrandBooks = createAsyncThunk('trand/fetchTrandBooks', async () => {
  // const category = categoryId === 0 ? '' : `&category=${categoryId}`;
  // const sort = `&sortBy=${sortType.replace('-', '')}&order=${
  //   sortType.includes('-') ? 'desc' : 'asc'
  // }`;
  // const page = `page=${currentPage}&limit=8`;
  //const res = await axios.get('http://localhost:3000/db.json');
  const res = await axios.get('http://localhost:3000/books');

  return res.data;
});

export const fetchTrandBooksPagination = createAsyncThunk(
  'trand/fetchTrandBooksPagination',
  async ({ page = 0, num = 4 }) => {
    const res = await axios.get(`http://localhost:3000/trands?page=${page}&size=${num} `);

    return res.data;
  }
);

const trandSlice = createSlice({
  name: 'trand',
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
    },
    setCurrentPageTrand: (state, action) => {
      state.currentPage = action.payload;
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
    builder.addCase(fetchTrandBooks.pending, (state, action) => {
      state.status = 'loading';
    });

    builder.addCase(fetchTrandBooks.fulfilled, (state, action) => {
      state.status = 'success';
      state.items = action.payload;
    });

    builder.addCase(fetchTrandBooks.rejected, (state, action) => {
      state.status = action.error.message;
      state.items = [];
    });
    ///Pagination
    builder.addCase(fetchTrandBooksPagination.pending, (state, action) => {
      state.status = 'loading';
    });

    builder.addCase(fetchTrandBooksPagination.fulfilled, (state, action) => {
      state.status = 'success';
      state.items = action.payload.content;
      state.totalPages = action.payload.totalPages;
      //  state.currentPage = action.payload.number;
      state.size = action.payload.size;
    });

    builder.addCase(fetchTrandBooksPagination.rejected, (state, action) => {
      state.status = action.error.message;
      state.items = [];
    });
  },
});

export const { setItems, setCurrentPageTrand } = trandSlice.actions;

export default trandSlice.reducer;
