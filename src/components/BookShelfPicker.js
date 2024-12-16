import PropTypes from 'prop-types';

/**
 * BookShelfPicker component that allows the selection of a shelf for a book.
 *
 * @param {Object} props - The component props.
 * @param {string} props.currentBookShelf - The current bookshelf of the book.
 * @param {function} props.changeBookShelf - Function to change the bookshelf of the book.
 *
 * @returns {JSX.Element} A div element displaying the shelf picker for a book.
 */
const BookShelfPicker = ({currentBookShelf, changeBookShelf}) => {
  return (
    <div className="book-shelf-changer">
      <select
        value={currentBookShelf}
        onChange={(e) => changeBookShelf(e.target.value)}
      >
        <option
          value="moveTo"
          disabled
        >
          Move to...
        </option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
};

BookShelfPicker.propTypes = {
  currentBookShelf: PropTypes.string.isRequired,
  changeBookShelf: PropTypes.func.isRequired,
};

export default BookShelfPicker;
