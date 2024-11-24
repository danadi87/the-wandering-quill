import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Sidebar from "./components/Sidebar.jsx";
import BooksList from "./assets/BooksList.json";

function App() {
  const [books, setBooks] = useState([]);

  //initialize with all books before filtering
  const [filteredBooks, setFilteredBooks] = useState([BooksList]);

  const filterBooks = (genre) => {
    //show all Books
    if (genre === "All") {
      setFilteredBooks(BooksList);
    } else {
      const filtered = BooksList.filter((book) => book.genre === genre);
      setFilteredBooks(filtered);
    }
  };
  useEffect(() => {
    function getList() {
      axios
        .get("https://openlibrary.org/search.json?q=the+lord+of+the+rings")
        .then((response) => {
          console.log(response.data);
        })

        .catch((err) => {
          console.log(err);
        });
    }
    getList();
  }, []);
  return (
    <>
      {/*pass on the filter function to the sidebar*/}
      <Sidebar onFilter={filterBooks} />
      <div className="book-list">
        {filteredBooks.map((book, id) => (
          <div key={id} className="book-item">
            <img src={book.cover_image} />
            <h2>{book.title}</h2>
            <h4>{book.author}</h4>
            <p>{book.genre}</p>
            <p>{book.description}</p>
            <p>{book.pages}</p>
            <p>{book.publish_year}</p>
          </div>
        ))}
      </div>
    </>
  );
}
export default App;
