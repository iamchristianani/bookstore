import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeAction } from '../redux/books/books';

const Book = ({ id, title, author }) => {
  const dispatch = useDispatch();

  return (
    <div id={id} className="oneBook">
      <h2>{title}</h2>
      <p>{author}</p>
      <button type="button" className="bookButton" onClick={() => dispatch(removeAction(id))}>Remove</button>
    </div>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
