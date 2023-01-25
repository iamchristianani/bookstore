import { v4 as uuidv4 } from 'uuid';

const ADD_BOOK = 'bookstore/book/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/book/REMOVE_BOOK';

const books = [
  {
    id: uuidv4(),
    title: 'Game of Thrones',
    author: 'J.R Tolkein',
  },
  {
    id: uuidv4(),
    title: 'There was a Country',
    author: 'Chinua Achebe',
  },
  {
    id: uuidv4(),
    title: 'Half of a Yellow Sun',
    author: 'Chimamanda Adichie',
  },
];

const bookReducer = (state = books, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.book];
    case REMOVE_BOOK:
      return [...state.filter((book) => book.id !== action.bookId)];
    default:
      return state;
  }
};

const addAction = (book) => ({
  type: ADD_BOOK,
  book,
});

const removeAction = (bookId) => ({
  type: REMOVE_BOOK,
  bookId,
});

export default bookReducer;
export { addAction, removeAction };
