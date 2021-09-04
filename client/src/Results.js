import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="pt-96 cursor-default">
        <h2 className="capitalize text-left text-black text-3xl font-bold">
          {props.results.word}
        </h2>
        {props.results.phonetics.map((phonetic, index) => {
          return (
            <div key={index}>
              <Phonetic phonetic={phonetic} />
            </div>
          );
        })}
        {props.results.meanings.map((meaning, index) => {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
        {props.results.image.map((image, index) => {
          return (
            <div key={index}>
              <a
                href={image.original}
                target="_blank"
                rel="noreferrer"
                alt="image from pexels"
              >
                <img src={image.landscape} alt="pexels response" />
              </a>
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
