import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeAction } from '../redux/books/books';

const Book = ({
  id, title, author, category,
}) => {
  const dispatch = useDispatch();

  return (
    <div id={id} className="oneBook">
      <div className="bookInfo">
        <h4 className="bookCategory">{category}</h4>
        <h2>{title}</h2>
        <p className="bookAuthor">{author}</p>
        <div className="btnActions">
          <button type="button" className="eachActionBtn">Comments</button>
          <button type="button" className="eachActionBtn" onClick={() => dispatch(removeAction(id))}>Remove</button>
          <button type="button" className="eachActionBtn">Edit</button>
        </div>
      </div>
      <div className="progressPart">
        <div className="progressRate">
          <div className="progressCircleContainer">
            <div className="progressCircle">{null}</div>
          </div>
          <div className="progressStat">
            <p className="statAmount">64%</p>
            <p className="statCompleted">Completed</p>
          </div>
        </div>
        <div className="progressDivider">{null}</div>
        <div className="progressUpdate">
          <div className="chapterPart">
            <p className="chapterLabel">CURRENT CHAPTER</p>
            <p className="mainChapter">Chapter 17</p>
          </div>
          <div className="updateBtnBox">
            <button type="button" className="updateBtn">UPDATE PROGRESS</button>
          </div>
        </div>
      </div>
    </div>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
