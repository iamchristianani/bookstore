import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { categoryAction } from '../redux/categories/categories';

const Categories = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);
  const checkStatus = () => {
    dispatch(categoryAction());
  };

  return (
    <>
      <div className="categoryContainer">
        <span className="categoryText">{categories}</span>
        <br />
        <button className="categoryButton" type="button" onClick={checkStatus}>Check Status</button>
      </div>
    </>
  );
};

export default Categories;
