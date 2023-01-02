//

import Shelf from "./Shelf";

//shelfs component which hold every book shelf

function Shelfs({ allBooks, changeShelf }) {
  //here i make a new array from the allbooks which is on the Currently reading shelf
  const currentReading = allBooks.filter(
    (Book) => Book.shelf === "currentlyReading"
  );
  //here i make a new array from the allbooks which is on the want to read shelf
  const wantToRead = allBooks.filter((Book) => Book.shelf === "wantToRead");
  //here i make a new array from the allbooks which is on the read shelf
  const read = allBooks.filter((Book) => Book.shelf === "read");
  // then i pass these value in the shelf component as a props
  return (
    <>
      <div className="list-books-content">
        <Shelf
          title={"Currently reading"}
          Books={currentReading}
          changeShelf={changeShelf}
        />
        <Shelf
          title={"Want To Read"}
          Books={wantToRead}
          changeShelf={changeShelf}
        />
        <Shelf title={"Read"} Books={read} changeShelf={changeShelf} />
      </div>
    </>
  );
}

export default Shelfs;
