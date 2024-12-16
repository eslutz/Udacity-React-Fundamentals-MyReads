import PropTypes from 'prop-types';
import shelves from '../utilities/Shelves';

/**
 * BookShelfPicker component that allows the selection of a shelf for a book.
 *
 * @param {Object} props - The component props.
 * @param {Object} props.book - The current book.
 * @param {function} props.updateBookShelf - Function to change the bookshelf of the book.
 *
 * @returns {JSX.Element} A div element displaying the shelf picker for a book.
 */
const BookShelfPicker = ({book, updateBookShelf}) => {
  // Update the shelf of the book.
  const handleChangeShelf = newBookShelf => {
    updateBookShelf(book, newBookShelf);
  };

  return (
    <div className="book-shelf-changer">
      <select
        id={`${book.id}-shelfPicker`}
        name="shelfPicker"
        value={book.shelf}
        onChange={e => handleChangeShelf(e.target.value)}
      >
        <option
          value="moveTo"
          disabled
        >
          Move to...
        </option>
        {
          // Map over the shelves and create an option for each shelf.
          shelves.map(shelf => {
            return (
              <option
                key={shelf.id}
                value={shelf.value}
              >
                {shelf.title}
              </option>
            );
          })
        }
      </select>
    </div>
  );
};

BookShelfPicker.propTypes = {
  book: PropTypes.object.isRequired,
  updateBookShelf: PropTypes.func.isRequired,
};

export default BookShelfPicker;
