import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  items: [],
  status: 'loading', //loading, success, error
};

export const addBookmark = createAsyncThunk(
  'bookmark/addBookmark',
  async (bookId, userId = 1) => {
    const res = await axios.post(
      'http://localhost:8080/bookmark',
      { userId, bookId },
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

export const deleteBookmark = createAsyncThunk('bookmark/deleteBookmark', async (id) => {
  const res = await axios.delete(`http://localhost:8080/bookmark/${id}`);
  return { id };
  //  return res.data;
});

export const fetchBookmarks = createAsyncThunk(
  'bookmark/fetchBookmarks',
  async (bookId, userId = 1) => {
    const res = await axios.get('http://localhost:8080/bookmark');
    return res.data;
  }
);

// export const fetchBookByCategory = createAsyncThunk(
//   'book/fetchBookByCategory',
//   async (name) => {
//     const res = await axios.get(`http://localhost:3000/api/books/category?name=${name}`);
//     return res.data;
//   }
// );

const bookmarkSlice = createSlice({
  name: 'bookmark',
  initialState,
  reducers: {
    // setItem: (state, action) => {
    //   state.item = action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(addBookmark.pending, (state, action) => {
      state.status = 'loading';
    });

    builder.addCase(addBookmark.fulfilled, (state, action) => {
      state.status = 'success';
      state.items.push(action.payload);
    });

    builder.addCase(addBookmark.rejected, (state, action) => {
      state.status = action.error.message;
    });

    /////////fetching bookmarks
    builder.addCase(fetchBookmarks.pending, (state, action) => {
      state.status = 'loading';
    });

    builder.addCase(fetchBookmarks.fulfilled, (state, action) => {
      state.status = 'success';
      state.items = action.payload;
    });

    builder.addCase(fetchBookmarks.rejected, (state, action) => {
      state.status = action.error.message;
    });

    /////////delete bookmark
    builder.addCase(deleteBookmark.pending, (state, action) => {
      state.status = 'loading';
    });

    builder.addCase(deleteBookmark.fulfilled, (state, action) => {
      state.status = 'success';
      console.log('!!!!!!!!!!!!!!!!!!', action);
      state.items = state.items.filter((el) => el.id != action.payload.id);
      // state.items = action.payload;
    });

    builder.addCase(deleteBookmark.rejected, (state, action) => {
      state.status = action.error.message;
    });
  },
});

export const {} = bookmarkSlice.actions;

export default bookmarkSlice.reducer;
