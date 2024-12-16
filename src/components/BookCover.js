import PropTypes from 'prop-types';

/**
 * BookCover component that displays the cover of a book.
 *
 * @param {Object} props - The properties object.
 * @param {Object} props.imageLinks - The image links object containing URLs for the book's images.
 * @param {string} [props.imageLinks.thumbnail] - The URL for the book's thumbnail image.
 *
 * @returns {JSX.Element} A div element displaying the book cover.
 */
const BookCover = ({imageLinks}) => {
  // Get the thumbnail URL from the imageLinks object or set to an empty string if not available.
  const thumbnail = imageLinks?.thumbnail ?? '';

  // Style object for the book cover.
  const coverStyle = {
    width: 128,
    height: 193,
    backgroundImage: `url("${thumbnail}")`,
  };

  return (
    <div
      className="book-cover"
      style={coverStyle}
    ></div>
  );
};

BookCover.propTypes = {
  imageLinks: PropTypes.shape({
    thumbnail: PropTypes.string,
  }),
};

export default BookCover;
