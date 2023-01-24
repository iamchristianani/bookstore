const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

const bookArr = [];

const bookReducer = (state = bookArr, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          author: action.author,
          completed: false,
        },
      ];
    case REMOVE_BOOK:
      return [
        ...state.filter((book) => book.id !== action.id),
      ];
    default:
      return state;
  }
};

let nextTodoId = 0;

const addAction = (bookTitle, bookAuthor) => {
  nextTodoId += 1;
  return {
    type: ADD_BOOK,
    id: nextTodoId,
    title: bookTitle,
    author: bookAuthor,
  };
};

const removeAction = (bookId) => ({
  type: REMOVE_BOOK,
  id: bookId,
});

export default bookReducer;
export { addAction, removeAction };
