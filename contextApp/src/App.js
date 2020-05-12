import React, {useState} from 'react'
import Navbar from './components/Navbar'
import BookList from './components/BookList'
import ThemeContextProvider from './context/theme-context'
import ToggleTheme from './components/theme-toggle'
import AuthContextProvider from './context/AuthContext'
import BookContextProvider from './context/BookContext'

const App = () => {
    return(
      <div className='App'>
        <ThemeContextProvider>
          <AuthContextProvider>
            <Navbar />
              <BookContextProvider>
                <BookList />
            </BookContextProvider>
            <ToggleTheme />
          </AuthContextProvider>
        </ThemeContextProvider>
      </div>
    )
}

export default App