import React, { createContext, useState } from 'react';

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, setBooks] = useState([
        { title: 'one piece', id: 1 },
        { title: 'naruto', id: 2 },
        { title: 'bleach', id: 3 },
        { title: 'one punch', id: 4 },
    ])
    return (
        <BookContext.Provider value={{ books, setBooks }}>
            {props.children}
        </BookContext.Provider >
    );
}

export default BookContextProvider;