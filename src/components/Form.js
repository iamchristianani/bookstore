import React from 'react';

const Form = () => (
  <div className="formBox">
    <form>
      <input className="titleInput" type="text" placeholder="Title" />
      <select className="authorSelect">
        <option className="author" value="author-list">Select Author</option>
        <option className="author" value="J.R Tolkein">J.R Tolkein</option>
        <option className="author" value="Adeyemi">Adeyemi</option>
        <option className="author" value="Chimamanda Adichie">Chimamanda Adichie</option>
      </select>
      <button type="button" className="formButton">
        Add Book
      </button>
    </form>
  </div>
);

export default Form;
