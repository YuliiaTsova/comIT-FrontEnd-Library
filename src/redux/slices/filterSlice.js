import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  items: [],
  currentCategory: 'Romance',
  search: '',
};

export const fetchCategories = createAsyncThunk('filter/fetchCategories', async (id) => {
  // const category = categoryId === 0 ? '' : `&category=${categoryId}`;
  // const sort = `&sortBy=${sortType.replace('-', '')}&order=${
  //   sortType.includes('-') ? 'desc' : 'asc'
  // }`;
  // const page = `page=${currentPage}&limit=8`;
  //const res = await axios.get('http://localhost:3000/db.json');
  const res = await axios.get('/api/categories');

  return res.data;
});

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategories: (state, action) => {
      state.items = action.payload;
    },
    setCategory: (state, action) => {
      state.currentCategory = action.payload;
      state.search = '';
    },
    setSearch: (state, action) => {
      state.search = action.payload;
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
    builder.addCase(fetchCategories.pending, (state, action) => {});

    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.items = action.payload;
    });

    builder.addCase(fetchCategories.rejected, (state, action) => {
      state.items = [];
    });
  },
});

export const { setCategories, setCategory, setSearch } = filterSlice.actions;

export default filterSlice.reducer;
