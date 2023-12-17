import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  checkouts: [],
  userInfo: {},
  status: 'loading', //loading, success, error
};

export const fetchCheckouts = createAsyncThunk('profile/fetchCheckouts', async () => {
  const res = await axios.get('/profile/checkout');
  return res.data;
});

export const fetchUserInfo = createAsyncThunk('profile/fetchUserInfo', async () => {
  const res = await axios.get('/profile/info');
  return res.data;
});

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchCheckouts.pending, (state, action) => {
      state.status = 'loading';
    });

    builder.addCase(fetchCheckouts.fulfilled, (state, action) => {
      state.status = 'success';
      state.checkouts = action.payload;
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

export const {} = profileSlice.actions;

export default profileSlice.reducer;
