import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [books, setBooks] = useState([]);
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
      <h1>Hello</h1>
    </>
  );
}
export default App;
