import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  username: '',
  password: '',
  status: '',
};

export const verifyUser = createAsyncThunk(
  'auth/verifyUser',
  async (username, password) => {
    const res = await axios.post(
      'http://localhost:8080/login',
      { username, password },
      {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      }
    );
    return res.data;
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(verifyUser.pending, (state, action) => {
      state.status = 'Checking....';
    });

    builder.addCase(verifyUser.fulfilled, (state, action) => {
      state.status = 'success';
      state.username = action.payload.username;
    });

    builder.addCase(verifyUser.rejected, (state, action) => {
      state.status = action.error.message;
    });
  },
});

export const {} = authSlice.actions;

export default authSlice.reducer;
