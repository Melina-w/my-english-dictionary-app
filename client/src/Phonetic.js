import React from "react";

export default function Phonetic(props) {
  return (
    <div className="phonetic">
      <a href={props.phonetic.audio}>Listen</a>
      {props.phonetic.text}
    </div>
  );
}
