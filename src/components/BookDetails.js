//
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./styles/details.css";
import * as API from "../BooksAPI";
//

/* this component show the book details as description and pages count and prodction year */

function BookDetails() {
  const [book, setBook] = useState({});
  // i got the book id from the link on clicking it
  const params = useParams();
  console.log(params);

  let image = book.imageLinks
    ? book.imageLinks.thumbnail
    : "https://books.google.com/googlebooks/images/no_cover_thumb.gif";
  // i get the full details for a single book from api usine its id from params
  useEffect(() => {
    API.get(params.bookId).then((res) => {
      setBook(res);
      console.log(res);
    });
  }, [params.bookId]);
  return (
    <>
      <div className="holder">
        <div className="info">
          <h2>{book.title}</h2>
          <p>page count : {book.pageCount}</p>
          <p>{book.description}</p>
          <p>{book.publishedDate}</p>
        </div>
        <div
          className="image-holder"
          style={{
            backgroundImage: `url("${image}")`,
          }}
        ></div>
      </div>
    </>
  );
}

export default BookDetails;
