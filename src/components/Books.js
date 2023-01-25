import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import Form from './Form';

const Books = () => {
  const data = useSelector((state) => state.books);
  return (
    <>
      <ul className="allBooks">
        {
          data.map((book) => (
            <li key={book.id}>
              <Book id={book.id} title={book.title} author={book.author} />
            </li>
          ))
        }
      </ul>
      <Form />
    </>
  );
};

export default Books;
