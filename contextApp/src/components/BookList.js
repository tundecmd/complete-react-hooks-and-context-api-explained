import React, { useContext } from 'react'
import { ThemeContext } from "../context/theme-context";
import { BookContext } from '../context/BookContext';

const BookList = () => {
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const { books } = useContext(BookContext);
    const theme = isLightTheme ? light : dark;
    return ( 
        <div className="book-list" style={{color: theme.syntax, background: theme.bg}}>
           {
               books.map(book => {
                   return <li key={book.id} style={{background: theme.ui, listStyle: 'none'}}>{book.title}</li>
               })
           } 
        </div>
    );
}

export default BookList;