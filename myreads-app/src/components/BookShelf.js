import PropTypes from "prop-types";
import Book from "./Book";

/**
 * Bookshelf component that displays the books on a shelf.
 *
 * @param {Object} props - The component props.
 * @param {string} props.title - The title of the bookshelf.
 * @param {Array} props.books - The array of books to display on the bookshelf.
 * @param {Function} props.updateBookShelf - The function to update the bookshelf.
 *
 * @returns {JSX.Element} The rendered bookshelf component.
 */
const BookShelf = ({ title, books, updateBookShelf }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((book) => (
            <li key={book.id}>
              <Book book={book} updateBookShelf={updateBookShelf} />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

BookShelf.propTypes = {
  books: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  updateBookShelf: PropTypes.func.isRequired,
};

export default BookShelf;
