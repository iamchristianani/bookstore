import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import Form from './Form';
import { getBooksAction } from '../redux/books/books';

const Books = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(getBooksAction());
  }, [dispatch]);

  return (
    <>
      <ul className="allBooks">
        {
          data.map((book) => (
            <li key={book.bookId}>
              <Book key={book.bookId} id={book.bookId} title={book.title} author={book.author} />
            </li>
          ))
        }
      </ul>
      <Form />
    </>
  );
};

export default Books;
