//
import swal from "sweetalert";
import { Link } from "react-router-dom";
// this is the single book component

function SingleBook({ book, changeShelf }) {
  // function that take our choose from the options box and give it as parameter to the change shelf function.
  // to handle it through api and shelfes
  const Changer = (e) => {
    const shelf = e.target.value;
    changeShelf(book, shelf);
    //alert shown after the shelf change
    swal("Done!", `You changed the book shelf to ${shelf}!`, "success");
  };

  let image = book.imageLinks
    ? book.imageLinks.thumbnail
    : "https://books.google.com/googlebooks/images/no_cover_thumb.gif";

  return (
    <>
      <li key={book.id}>
        <div className="book">
          <div className="book-top">
            <Link to={`/my-reads-udacity/book/${book.id}`}>
              <div
                className="book-cover"
                style={{
                  width: 128,
                  height: 193,
                  backgroundImage: `url("${image}")`,
                }}
              ></div>
            </Link>

            <div className="book-shelf-changer">
              <select onChange={Changer} value={book.shelf}>
                <option value="none" disabled>
                  Move to...
                </option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">
            {book.authors ? book.authors[0] : "Auther is Unknown"}
          </div>
        </div>
      </li>
    </>
  );
}

export default SingleBook;
