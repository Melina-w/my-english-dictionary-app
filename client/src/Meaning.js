import React from "react";

export default function Meaning(props) {
  console.log(props.meaning.definitions[0]);
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map((definitions, index) => {
        return (
          <div key={index}>
            <p>
              {definitions.definition}
              {definitions.example}
            </p>
          </div>
        );
      })}
    </div>
  );
}
