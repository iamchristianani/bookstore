import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addAction } from '../redux/books/books';

const Form = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const titleChange = (e) => {
    setTitle(e.target.value);
  };

  const authorChange = (e) => {
    setAuthor(e.target.value);
  };

  const submitBooksHandler = (e) => {
    e.preventDefault();
    if (!title || !author) return;
    const id = uuidv4();
    // const currentState = { id, title, author };
    const book = {
      item_id: id,
      title,
      author,
      category: 'Romance',
    };
    dispatch(addAction(book));
    setTitle('');
    setAuthor('');
  };

  return (
    <div className="formBox">
      <form onSubmit={submitBooksHandler}>
        <input className="titleInput" name="title" type="text" placeholder="Title" onChange={titleChange} value={title} />
        <input type="text" placeholder="Author" onChange={authorChange} value={author} />
        <button type="submit" className="formButton">
          Add Book
        </button>
      </form>
    </div>
  );
};

export default Form;
