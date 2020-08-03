import React, { createContext, useReducer, useEffect } from 'react';
//import uuid from 'uuid/v1';
import { bookReducer } from '../reducers/bookReducer';

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, dispatch] = useReducer(bookReducer, [], () => {
    // Third item is function
    const localData = localStorage.getItem('books');
    return localData ? JSON.parse(localData) : [];
  });
  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books));
  }, [books]);
  // Consolidate into reducers to make easier to maintain
  //   const addBook = (title, author) => {
  //     setBooks([...books, { title, author, id: uuid() }]);
  //   };
  //   const removeBook = (id) => {
  //     setBooks(books.filter((book) => book.id !== id));
  //   };
  return (
    <BookContext.Provider value={{ books, dispatch }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
