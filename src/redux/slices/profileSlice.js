import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  checkouts: [],
  userInfo: {},
  totalPages: 0,
  currentPage: 0,
  size: 4,
  status: 'loading', //loading, success, error
};

export const fetchCheckouts = createAsyncThunk(
  'profile/fetchCheckouts',
  async ({ page = 0, num = 4 }) => {
    //const res = await axios.get('/profile/checkout');
    const res = await axios.get(`/profile/checkout?page=${page}&size=${num}`);
    return res.data;
  }
);

export const fetchUserInfo = createAsyncThunk('profile/fetchUserInfo', async () => {
  const res = await axios.get('/profile/info');
  return res.data;
});

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setCurrentPageCheckout: (state, action) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCheckouts.pending, (state, action) => {
      state.status = 'loading';
    });

    builder.addCase(fetchCheckouts.fulfilled, (state, action) => {
      state.status = 'success';
      state.checkouts = action.payload.content;
      state.totalPages = action.payload.totalPages;
      state.size = action.payload.size;
    });

    builder.addCase(fetchCheckouts.rejected, (state, action) => {
      state.status = action.error.message;
      state.checkouts = [];
    });

    //fetch userInfo
    builder.addCase(fetchUserInfo.pending, (state, action) => {
      state.status = 'loading';
    });

    builder.addCase(fetchUserInfo.fulfilled, (state, action) => {
      state.status = 'success';
      state.userInfo = action.payload;
    });

    builder.addCase(fetchUserInfo.rejected, (state, action) => {
      state.status = action.error.message;
      state.checkouts = [];
    });
  },
});

export const { setCurrentPageCheckout } = profileSlice.actions;

export default profileSlice.reducer;
