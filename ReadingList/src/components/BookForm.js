import React, { useState, useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

const NewBookForm = () => {
    const { dispatch } = useContext(BookContext);
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');

    const HandleTitle = e => {
        setTitle(e.target.value)
    }
    const HandleAuthor = e => {
        setAuthor(e.target.value)
    }
    const HandleSubmit = e => {
        e.preventDefault();
        dispatch({type: 'ADD_BOOK', book: {
            title, author
        }})
        setTitle('');
        setAuthor('');
    }
    return(
        <form onSubmit={HandleSubmit}>
            <input type="text" required placeholder='book title' value={title} onChange={HandleTitle} />
            <input type="text" required placeholder='book author' value={author} onChange={HandleAuthor} />
            <input type="submit" value='Add Book' />
        </form>
    );
}
 
export default NewBookForm;