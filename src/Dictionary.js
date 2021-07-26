import React, {useState} from "react"
import axios from "axios"




export default function Dictionary(){
let [keyWord, setKeyWord]= useState("")

function search(event){
    event.preventDefault();
    alert(`Searching for the definition of : ${keyWord} `);
}

function handleKeyWordChange(event){
    setKeyWord(event.target.value);
}

// function handleResponse(response){
// console.log(response);
// }

const Owlbot = require('owlbot-js'); 
const apiToken= '9b12117f96952035c3f59ffe358bac8e3665b0bd';
const client = Owlbot(apiToken);
 
client.define(`${keyWord}`).then(function(result){
   console.log(result);
});

// const apiUrl= "https://owlbot.info/api/v4/dictionary/owl -s | json_pp"
// axios.get(apiUrl).then(handleResponse)

    return(
    <form onSubmit={search}>
        <input placeholder="Type a word" type="text" className="input" autoFocus={true} onChange={handleKeyWordChange}></input>
        <button type="search" className="btn" >Search</button>
    </form>
    
    )
}