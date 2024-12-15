import './App.css';
import {useEffect, useState} from 'react';
import {Routes, Route} from 'react-router-dom';
import Bookcase from './components/Bookcase';
import Search from './components/Search';
import * as BooksAPI from './utilities/BooksAPI';

function App() {
  // State to store the books
  const [books, setBooks] = useState([]);

  // Fetch all books from the BooksAPI and update the state with the books.
  const fetchBooks = async () => {
    const books = await BooksAPI.getAll();
    setBooks(books);
  };

  // Fetch books once on component load.
  useEffect(() => {
    fetchBooks();
  }, []);

  // Update the shelf of a book and update the state with the new book.
  const updateBookShelf = async (book, shelf) => {
    try {
      // Update the book shelf in the state.
      book.shelf = shelf;
      setBooks((prevBooks) => {
        // Check if the book already exists in the state.
        const existingBook = prevBooks.find((b) => b.id === book.id);
        // Update the book shelf if it exists, otherwise add the book to the state.
        if (existingBook) {
          return prevBooks.map((b) => (b.id === book.id ? {...b, shelf} : b));
        } else {
          return [...prevBooks, book];
        }
      });
      // Update the book shelf on the server.
      await BooksAPI.update(book, shelf);
    } catch (error) {
      console.error('Error updating book shelf:', error);
    }
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Bookcase
            books={books}
            updateBookShelf={updateBookShelf}
          />
        }
      />
      <Route
        path="/search"
        element={
          <Search
            books={books}
            updateBookShelf={updateBookShelf}
          />
        }
      />
    </Routes>
  );
}

export default App;
