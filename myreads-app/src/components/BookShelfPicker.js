import PropTypes from "prop-types";

/**
 * Component to allow the selection of a bookshelf for a book.
 *
 * @param {Object} props - The component props.
 * @param {string} props.currentBookShelf - The current bookshelf of the book.
 * @param {function} props.changeBookShelf - Function to change the bookshelf of the book.
 *
 * @returns {JSX.Element} A div element displaying the shelf picker for a book.
 */
const BookShelfPicker = ({ currentBookShelf, changeBookShelf }) => {
  return (
    <div className="book-shelf-changer">
      <select value={currentBookShelf} onChange={(e) => changeBookShelf(e.target.value)}>
        <option value="none" disabled>
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
  currentBookShelf: PropTypes.string,
  changeBookShelf: PropTypes.func,
};

export default BookShelfPicker;
