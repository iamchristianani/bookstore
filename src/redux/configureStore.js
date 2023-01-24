import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from './categories/categories';
import bookReducer from './books/books';

const store = configureStore({
  reducer: {
    category: categoryReducer,
    book: bookReducer,
  },
});

export default store;
