import React from "react";

export default function Phonetic(props) {
  console.log(props.phonetic.text);
  return (
    <div className="phonetic">
      <a href={props.phonetic.audio} target="_blank">
        Listen
      </a>
      {props.phonetic.text}
    </div>
  );
}
