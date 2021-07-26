import React, {useState} from "react"

export default function Dictionary(){
let [keyWord, setKeyWord]= useState("")

function search(event){
    event.preventDefault();
    alert(`Searching for the definition of : ${keyWord} `);
}

function handleKeyWordChange(event){
    setKeyWord(event.target.value);
}

    return(
    <form onSubmit={search}>
        <input placeholder="Type a word" type="text" className="input" autoFocus={true} onChange={handleKeyWordChange}></input>
        <button type="search" className="btn" >Search</button>
    </form>
    
    )
}