import bookReducer from './books';

describe('testing the ADD reducer', () => {
  test('when added to an empty array', () => {
    const stateBefore = [];
    const ADD_BOOK = 'bookstore/book/ADD_BOOK';
    const book = {
      id: '0',
      title: 'Book Title',
      author: 'Book Author',
    };
    const action = {
      type: ADD_BOOK,
      book,
    };
    const stateAfter = [
      {
        id: '0',
        title: 'Book Title',
        author: 'Book Author',
      },
    ];
    expect(bookReducer(stateBefore, action)).toEqual(stateAfter);
  });
  test('when added to an array with 2 books', () => {
    const stateBefore = [
      {
        id: '0',
        title: 'Book Title 1',
        author: 'Book Author 1',
      },
      {
        id: '1',
        title: 'Book Title 2',
        author: 'Book Author 2',
      },
    ];
    const ADD_BOOK = 'bookstore/book/ADD_BOOK';
    const book = {
      id: '2',
      title: 'Book Title 3',
      author: 'Book Author 3',
    };
    const action = {
      type: ADD_BOOK,
      book,
    };
    const stateAfter = [
      {
        id: '0',
        title: 'Book Title 1',
        author: 'Book Author 1',
      },
      {
        id: '1',
        title: 'Book Title 2',
        author: 'Book Author 2',
      },
      {
        id: '2',
        title: 'Book Title 3',
        author: 'Book Author 3',
      },
    ];
    expect(bookReducer(stateBefore, action)).toEqual(stateAfter);
  });
});

describe('Testing the REMOVE_BOOK reducer', () => {
  test('when 1 is removed', () => {
    const REMOVE_BOOK = 'bookstore/book/REMOVE_BOOK';
    const stateBefore = [
      {
        id: '0',
        title: 'Book 1',
        author: 'Author 1',
      },
      {
        id: '1',
        title: 'Book 2',
        author: 'Author 2',
      },
    ];
    const action = {
      type: REMOVE_BOOK,
      bookId: '1',
    };
    const stateAfter = [
      {
        id: '0',
        title: 'Book 1',
        author: 'Author 1',
      },
    ];
    expect(bookReducer(stateBefore, action)).toEqual(stateAfter);
  });
});
