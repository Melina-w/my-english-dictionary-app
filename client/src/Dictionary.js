import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import OpenSourceCode from "./OpenSourceCode";
import spellBook from "./image/spellBook.jpg";

// documentation https://dictionaryapi.dev/
const apiUrl = `/api/v1/meaning/`;

export default function Dictionary() {
  const [keyWord, setKeyWord] = useState("");
  const [results, setResults] = useState(null);

  function search(event) {
    event.preventDefault();

    axios.get(apiUrl + keyWord).then(handleResponse);

    function handleResponse(response) {
      setResults(response.data);
    }
  }
  function handleKeyWordChange(event) {
    setKeyWord(event.target.value);
  }

  return (
    <div
      style={{ backgroundImage: `url(${spellBook})` }}
      className=" relative h-2/5 bg-center bg-contain bg-no-repeat w-3/6 m-auto"
    >
      <form
        onSubmit={search}
        className=" absolute right-1/4 bottom-2/3 rounded-lg w-1/4 "
      >
        <input
          placeholder="Type a word"
          type="text"
          className="input "
          autoFocus={true}
          onChange={handleKeyWordChange}
        ></input>
        {/* <button type="search" className="btn">
          Search
        </button> */}
      </form>
      <Results results={results} />
      <OpenSourceCode />
    </div>
  );
}
