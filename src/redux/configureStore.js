import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import categoryReducer from './categories/categories';
import bookReducer from './books/books';

const store = configureStore(
  {
    reducer: {
      categories: categoryReducer,
      books: bookReducer,
    },
  },
  applyMiddleware(thunk),
);

export default store;
