import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  items: [],
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

const trandSlice = createSlice({
  name: 'trand',
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
  },
});

export const { setItems } = trandSlice.actions;

export default trandSlice.reducer;
