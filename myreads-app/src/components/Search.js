import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Book from "./Book";
import * as BooksAPI from "../utilities/BooksAPI";

/**
 * Component for searching books and displaying search results.
 *
 * @param {Object} props - The component props.
 * @param {Object[]} props.books - Array of books currently in the library.
 * @param {Function} props.updateBookShelf - Function to update the shelf of a book.
 *
 * @returns {JSX.Element} The search component.
 */
const Search = ({ books, updateBookShelf }) => {
  // State to store the search query.
  const [query, setQuery] = useState("");
  // State to store the search results.
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchSearchResults = async () => {
      // If the query contains at least 2 characters, search for books.
      // Otherwise, clear the search results.
      if (query.length > 0) {
        // Search for books using the Books API.
        const searchResults = await BooksAPI.search(query, 10);
        // If the search results contain an error, clear the search results.
        if (searchResults.error) {
          setSearchResults([]);
          return;
        }

        try {
          // If a search result is already in the library, set its shelf to the shelf of the book.
          searchResults.forEach((searchResult) => {
            const book = books.find((book) => book.id === searchResult.id);
            searchResult.shelf = book ? book.shelf : "none";
          });

          // Set the search results.
          setSearchResults(searchResults);
        } catch (error) {
          console.error("Error fetching search results:", error);
        }
      } else {
        setSearchResults([]);
      }
    };

    fetchSearchResults();
  }, [query, books]);

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to="/">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {searchResults.map((book) => (
            <li key={book.id}>
              <Book book={book} updateBookShelf={updateBookShelf} />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

Search.propTypes = {
  books: PropTypes.array.isRequired,
  updateBookShelf: PropTypes.func.isRequired,
};

export default Search;
