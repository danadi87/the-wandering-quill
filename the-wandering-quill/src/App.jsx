import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        function getAxios()
        {axios
          .get("https://openlibrary.org/search/authors.json?q=orwell")
          .then((response) => {
            console.log(response.data);
          })
          .catch((error) => {
            console.logh(err);
          })}
      </div>
    </>
  );
}

export default App;
