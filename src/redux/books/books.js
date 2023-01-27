import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from 'axios';

const axios = axiosInstance.create({
  baseURL: 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/JSOkg17c1TZrnJxI94zg',
});

const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
const GET_BOOKS = 'bookstore/books/GET_BOOKS';
const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/JSOkg17c1TZrnJxI94zg/books';

// const books = [
//   {
//     id: uuidv4(),
//     title: 'Game of Thrones',
//     author: 'J.R Tolkein',
//   },
//   {
//     id: uuidv4(),
//     title: 'There was a Country',
//     author: 'Chinua Achebe',
//   },
//   {
//     id: uuidv4(),
//     title: 'Half of a Yellow Sun',
//     author: 'Chimamanda Adichie',
//   },
// ];

const bookReducer = (state = [], action) => {
  switch (action.type) {
    case GET_BOOKS:
      return action.payload;
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return [...state.filter((book) => book.item_id !== action.payload)];
    default:
      return state;
  }
};

const getBooksAction = createAsyncThunk(
  GET_BOOKS,
  async (post, { dispatch }) => {
    const response = await fetch(URL);
    const data = await response.json();
    const books = Object.keys(data).map((id) => ({
      ...data[id][0],
      bookId: id,
    }));
    dispatch({
      type: GET_BOOKS,
      payload: books,
    });
  },
);

// const addAction1 = (book) => ({
//   type: ADD_BOOK,
//   book,
// });

// const addAction = createAsyncThunk(ADD_BOOK, async (book) => {
//   await axios.post('books', book);
//   return book;
// });
const addAction = createAsyncThunk(ADD_BOOK, async (book) => {
  await axios.post('books', book);
  return book;
});

// const addAction = createAsyncThunk(
//   ADD_BOOK,
//   async (book, { dispatch }) => {
//     await fetch(URL, {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(book),
//     });
//     dispatch({
//       type: ADD_BOOK,
//       payload: book,
//     });
//   },
// );

// const removeAction = (bookId) => ({
//   type: REMOVE_BOOK,
//   bookId,
// });

const removeAction = createAsyncThunk(
  REMOVE_BOOK,
  async (bookId, { dispatch }) => {
    await fetch(`${URL}/${bookId}`, {
      method: 'DELETE',
    });
    dispatch({
      type: REMOVE_BOOK,
      payload: { bookId },
    });
  },
);

// const removeAction = createAsyncThunk(REMOVE_BOOK, async (bookId) => {
//   await axios.delete(`books/${bookId}`);
//   return bookId;
// });

export default bookReducer;
export { addAction, removeAction, getBooksAction };
