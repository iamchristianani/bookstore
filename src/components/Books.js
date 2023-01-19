import React from 'react';
import Book from './Book';
import Form from './Form';

const data = [
  {
    id: 1,
    title: 'Game of Thrones',
    author: 'J.R Tolkein',
  },
  {
    id: 2,
    title: 'There was a Country',
    author: 'Chinua Achebe',
  },
  {
    id: 3,
    title: 'Half of a Yellow Sun',
    author: 'Chimamanda Adichie',
  },
  {
    id: 4,
    title: 'Welcome to Lagos',
    author: 'Chibundu Onuzo',
  },
];

const Books = () => (
  <>
    <ul className="allBooks">
      {
          data.map((book) => (
            <li key={book.id}>
              <Book title={book.title} author={book.author} />
            </li>
          ))
        }
    </ul>
    <Form />
  </>
);

export default Books;
