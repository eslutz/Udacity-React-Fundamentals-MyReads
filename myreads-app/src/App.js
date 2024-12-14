import "./App.css";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Bookcase from "./components/Bookcase";
import Search from "./components/Search";
import * as BooksAPI from "./utilities/BooksAPI";

function App() {
  // State to store the books
  const [books, setBooks] = useState([]);

  // Fetch books once on component load.
  useEffect(() => {
    const fetchBooks = async () => {
      const books = await BooksAPI.getAll();
      setBooks(books);
    };

    fetchBooks();
  }, []);

  // Update the shelf of a book and update the state with the new book.
  const updateBookShelf = async (book, shelf) => {
    try {
      book.shelf = shelf;
      setBooks((prevBooks) => prevBooks.filter((b) => b.id !== book.id).concat(book));
      setBooks((prevBooks) => prevBooks.map((b) => (b.id === book.id ? { ...b, shelf } : b)));
    } catch (error) {
      console.error("Error updating book shelf:", error);
    }
  };

  return (
    <Routes>
      <Route exact path="/" element={<Bookcase books={books} updateBookShelf={updateBookShelf} />} />
      <Route path="/search" element={<Search books={books} updateBookShelf={updateBookShelf} />} />
    </Routes>
  );
}

export default App;
