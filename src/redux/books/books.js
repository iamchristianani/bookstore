import { createAsyncThunk, createReducer } from '@reduxjs/toolkit';
import axiosInstance from 'axios';

const axios = axiosInstance.create({
  baseURL:
    'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/JSOkg17c1TZrnJxI94zg',
});

const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
const GET_BOOKS = 'bookstore/books/GET_BOOKS';
const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/JSOkg17c1TZrnJxI94zg/books';

const getBooksAction = createAsyncThunk(
  GET_BOOKS,
  async () => {
    const response = await axios.get(URL);
    const books = Object.keys(response.data).map((id) => ({
      ...response.data[id][0],
      bookId: id,
    }));
    return books;
  },
);

const addAction = createAsyncThunk(
  ADD_BOOK,
  async (book) => {
    await axios.post('books', book);
    return {
      bookId: book.item_id,
      title: book.title,
      author: book.author,
      category: book.category,
    };
  },
);

const removeAction = createAsyncThunk(
  REMOVE_BOOK,
  async (bookId) => {
    await fetch(`${URL}/${bookId}`, {
      method: 'DELETE',
    });
    return bookId;
  },
);

const initialState = [];

const bookReducer = createReducer(initialState, (builder) => {
  builder.addCase(getBooksAction.fulfilled, (state, action) => {
    let updatedState = [...state];
    updatedState = action.payload;
    return updatedState;
  });
  builder.addCase(addAction.fulfilled, (state, action) => [
    ...state,
    action.payload,
  ]);
  builder.addCase(removeAction.fulfilled, (state, action) => {
    let newState = [...state];
    newState = newState.filter((book) => book.bookId !== action.payload);
    return newState;
  });
});

export default bookReducer;
export { addAction, removeAction, getBooksAction };
