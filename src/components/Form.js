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
      <h2 className="formTitle">ADD NEW BOOK</h2>
      <form onSubmit={submitBooksHandler}>
        <input className="input titleInput" name="title" type="text" placeholder="Book Title" onChange={titleChange} value={title} />
        <input className="input authorInput" type="text" placeholder="Author" onChange={authorChange} value={author} />
        <button type="submit" className="formButton">
          Add Book
        </button>
      </form>
    </div>
  );
};

export default Form;
