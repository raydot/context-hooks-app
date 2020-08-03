import React, { createContext, useState } from 'react';

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    { title: 'The Eternal Husband', id: 1 },
    { title: 'Their Eyes Were Watching God', id: 2 },
    { title: 'Cane', id: 3 },
    { title: 'The Egg and I', id: 4 },
  ]);
  return (
    <BookContext.Provider value={{ books }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
