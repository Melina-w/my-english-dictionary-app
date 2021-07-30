import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

// documentation https://dictionaryapi.dev/
const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/`;

export default function Dictionary() {
  const [keyWord, setKeyWord] = useState("");
  const [results, setResults] = useState(null);

  function search(event) {
    event.preventDefault();

    axios.get(apiUrl + keyWord).then(handleResponse);

    function handleResponse(response) {
      setResults(response.data[0]);
    }
  }
  function handleKeyWordChange(event) {
    setKeyWord(event.target.value);
  }

  return (
    <form onSubmit={search}>
      <input
        placeholder="Type a word"
        type="text"
        className="input"
        autoFocus={true}
        onChange={handleKeyWordChange}
      ></input>
      <button type="search" className="btn">
        Search
      </button>
      <Results results={results} />
    </form>
  );
}
