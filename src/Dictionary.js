import React, { useState } from "react";
import axios from "axios";

// documentation https://www.npmjs.com/package/owlbot-js
const Owlbot = require("owlbot-js");
const apiToken = "9b12117f96952035c3f59ffe358bac8e3665b0bd";
const client = Owlbot(apiToken);


// documentation https://dictionaryapi.dev/
const apiUrl=`https://api.dictionaryapi.dev/api/v2/entries/en_US/`;

export default function Dictionary() {
  let [keyWord, setKeyWord] = useState("");

  function search(event) {
    event.preventDefault();
    alert(`Searching for the definition of : ${keyWord} `);


    client.define(`${keyWord}`).then(handleResponse);
    axios.get(apiUrl + keyWord)
    .then((response)=> response.data)
    .then(handleResponse)
  }

//   how to await for two promises.
  
  function handleKeyWordChange(event) {
    setKeyWord(event.target.value);
  }

  function handleResponse(response) {
    console.log(response);
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
    </form>
  );
}
