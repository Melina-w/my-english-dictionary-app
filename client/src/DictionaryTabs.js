import React, { useState } from "react";
import Meaning from "./Meaning";

export default function DictionaryTabs(props) {
  const [contentToBeDisplayed, setContentToBeDisplayed] = useState(
    props.meanings[0]
  );

  function showContent(index) {
    return function (event) {
      event.preventDefault();
      setContentToBeDisplayed(props.meanings[index]);
    };
  }

  return (
    <div>
      <ul className="flex border-b">
        {props.meanings.map((meaning, index) => {
          return (
            <li className="-mb-px mr-1" key={index}>
              <button
                className="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700 font-semibold"
                onClick={showContent(index)}
              >
                {meaning.partOfSpeech}
              </button>
            </li>
          );
        })}
      </ul>

      <div className="w-full">
        <Meaning meaning={contentToBeDisplayed} />
      </div>
    </div>
  );
}
