import React, {useState} from 'react'
import BookContextProvider from './contexts/BookContext'
import Navbar from './components/Navbar'
import BookList from './components/BookList'
import NewBookForm from './components/BookForm'



const App = () => {
    return(
      <BookContextProvider className='App'>
        <Navbar />
        <BookList />
        <NewBookForm />
      </BookContextProvider>
    )
}

export default App