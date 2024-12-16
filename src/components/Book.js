import PropTypes from 'prop-types';
import BookCover from './BookCover';
import BookShelfPicker from './BookShelfPicker';

const DEFAULT_TITLE = 'No Title Available';
const DEFAULT_AUTHOR = 'Unknown Author';

/**
 * Book component that displays the book details.
 *
 * @param {Object} props - The component props.
 * @param {Object} props.book - The book object.
 * @param {string} props.book.title - The title of the book.
 * @param {string[]} props.book.authors - The authors of the book.
 * @param {Object} props.book.imageLinks - The image links of the book.
 * @param {string} [props.book.shelf] - The current shelf of the book.
 * @param {Function} props.updateBookShelf - Function to update the book's shelf.
 *
 * @returns {JSX.Element} The rendered book component.
 */
const Book = ({book, updateBookShelf}) => {
  // Set the title to a default values if it is not available.
  const title = book.title ?? DEFAULT_TITLE;
  // Format the authors as a comma-separated list if there are multiple authors.
  // Otherwise, set the authors to a default value.
  const authors = book.authors
    ? book.authors.length > 1
      ? book.authors.join(', ')
      : book.authors[0]
    : DEFAULT_AUTHOR;

  return (
    <div className="book">
      <div className="book-top">
        <BookCover imageLinks={book.imageLinks} />
        <BookShelfPicker
          book={book}
          updateBookShelf={updateBookShelf}
        />
      </div>
      <div className="book-title">{title}</div>
      <div className="book-authors">{authors}</div>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string,
    authors: PropTypes.arrayOf(PropTypes.string),
    imageLinks: PropTypes.shape({
      thumbnail: PropTypes.string,
    }),
    shelf: PropTypes.string,
  }).isRequired,
  updateBookShelf: PropTypes.func.isRequired,
};

export default Book;
