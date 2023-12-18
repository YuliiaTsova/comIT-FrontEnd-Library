import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  items: [],
  currentCategory: 'Romance',
  search: '',
};

export const fetchCategories = createAsyncThunk('filter/fetchCategories', async (id) => {
  const res = await axios.get('/categories');
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
