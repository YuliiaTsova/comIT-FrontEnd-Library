import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  items: [],
  totalPages: 0,
  currentPage: 0,
  size: 4,
  status: 'loading', //loading, success, error
};

export const fetchTrandBooks = createAsyncThunk(
  'https://bold-start-production.up.railway.app/trand/fetchTrandBooks',
  async () => {
    const res = await axios.get('/books');
    return res.data;
  }
);

export const fetchTrandBooksPagination = createAsyncThunk(
  'trand/fetchTrandBooksPagination',
  async ({ page = 0, num = 4 }) => {
    const res = await axios.get(`/trends?page=${page}&size=${num} `);

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
