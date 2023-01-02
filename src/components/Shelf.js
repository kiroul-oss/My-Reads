//

import SingleBook from "./SingleBook";

/* in this component i can use it many times to map over every shelf book 
and render its different books 
 */
function Shelf({ title, Books, changeShelf }) {
  return (
    <>
      <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {Books.map((book) => {
              return (
                <SingleBook
                  key={book.id}
                  book={book}
                  changeShelf={changeShelf}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
}

export default Shelf;
