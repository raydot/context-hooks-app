import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

const Navbar = () => {
  const { books } = useContext(BookContext);
  return (
    <div className="navbar">
      <h1>Dave's Reading Board</h1>
      <p>Currently, Dave has {books.length} books to read...</p>
    </div>
  );
};

export default Navbar;
