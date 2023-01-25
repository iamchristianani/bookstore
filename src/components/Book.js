import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeAction } from '../redux/books/books';

const Book = ({ id, title, author }) => {
  const dispatch = useDispatch();

  const removeBook = () => {
    dispatch(removeAction(id));
  };

  return (
    <div className="oneBook">
      <h2>{title}</h2>
      <p>{author}</p>
      <button type="button" className="bookButton" onClick={removeBook}>Remove</button>
    </div>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
