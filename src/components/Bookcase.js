import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import BookShelf from './BookShelf';
import shelves from '../utilities/Shelves';

/**
 * Bookcase component that displays books organized into different shelves.
 *
 * @param {Object} props - The component props.
 * @param {Array} props.books - The array of book objects to be displayed.
 * @param {Function} props.updateBookShelf - The function to update the shelf of a book.
 *
 * @returns {JSX.Element} The rendered Bookcase component.
 */
const Bookcase = ({books, updateBookShelf}) => {
  return (
    <div className="app">
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          {
            // Map over the shelves, excluding the "None" shelf, and create a BookShelf component for each shelf with the filtered books.
            shelves
              .filter(shelf => shelf.value !== 'none')
              .map(shelf => {
                const filteredBooks = books.filter(
                  book => book.shelf === shelf.value,
                );
                return (
                  <BookShelf
                    key={shelf.id}
                    title={shelf.title}
                    books={filteredBooks}
                    updateBookShelf={updateBookShelf}
                  />
                );
              })
          }
        </div>
        <div className="open-search">
          <Link
            to="/search"
            className="open-search-link"
          >
            Add a book
          </Link>
        </div>
      </div>
    </div>
  );
};

Bookcase.propTypes = {
  books: PropTypes.array.isRequired,
  updateBookShelf: PropTypes.func.isRequired,
};

export default Bookcase;
