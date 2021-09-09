import React from "react";
import Synonyms from "./Synonyms";

export default function Definition(props) {
  return (
    <div>
      <strong>Definition: </strong>
      {props.definition.definition}
      <strong>Example: </strong>
      {props.definition.example}
      <Synonyms synonyms={props.definition.synonyms} />
    </div>
  );
}
