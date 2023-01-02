import "./App.css";
import * as API from "./BooksAPI";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Shelfs from "./components/Shelfs";
import { Link, Route, Routes } from "react-router-dom";
import SearchPage from "./components/SearchPage";
import BookDetails from "./components/BookDetails";
//
//
function App() {
  const [allBooks, setAllBooks] = useState([]);
  // get all books from api
  useEffect(() => {
    API.getAll().then((res) => {
      setAllBooks(res);
      console.log(res);
    });
  }, []);

  // function which will change the book shelf and update the shelf value in the api

  const changeShelf = (book, shelf) => {
    book.shelf = shelf;
    setAllBooks((allbooks) => {
      return allbooks.filter((B) => B.id !== book.id).concat([book]);
    });
    API.update(book, shelf);
  };
  return (
    <>
      <Routes>
        <Route
          path="/my-reads-udacity"
          element={
            <>
              <Header />
              {allBooks.length !== 0 ? (
                <>
                  <Shelfs allBooks={allBooks} changeShelf={changeShelf} />
                  <div className="open-search">
                    <Link to="/my-reads-udacity/search">Add Book</Link>
                  </div>
                </>
              ) : (
                <h1 className="loader">Loading...</h1>
              )}
            </>
          }
        />
        <Route
          path="/my-reads-udacity/search"
          element={
            <>
              <SearchPage allBooks={allBooks} changeShelf={changeShelf} />
            </>
          }
        />
        <Route
          path="/my-reads-udacity/book/:bookId"
          element={
            <>
              <Header />
              <BookDetails />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
