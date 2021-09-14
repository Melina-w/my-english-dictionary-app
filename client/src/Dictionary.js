import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import OpenSourceCode from "./OpenSourceCode";
import spellBook from "./image/spellBook.jpg";

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
      className="relative bg-center bg-contain bg-no-repeat m-auto w-2/3 h-1/4 md:w-3/6 md:h-2/5 lg:w-1/3 lg:h-1/3"
    >
      <form
        onSubmit={search}
        className="absolute rounded-lg bottom-1/2 right-14 w-1/4 md:right-1/4 md:bottom-3/5 md:w-1/4 lg:w-1/4 lg:right-1/4"
      >
        <input
          placeholder="Type a word"
          type="text"
          className="input text-sm w-full"
          autoFocus={true}
          onChange={handleKeyWordChange}
        ></input>
        <button type="submit" className="btn">
          Search
        </button>
      </form>
      <Results results={results} />
      <OpenSourceCode />
    </div>
  );
}
