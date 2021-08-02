import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeUp } from "@fortawesome/free-solid-svg-icons";

export default function Phonetic(props) {
  function playPronunciation(e) {
    e.preventDefault();
    const audio = document.getElementById("pronunciation");
    if (!audio) return;
    audio.play();
  }
  return (
    <div className="phonetic">
      <audio src={props.phonetic.audio} id="pronunciation"></audio>
      <FontAwesomeIcon icon={faVolumeUp} onClick={playPronunciation} />
      {props.phonetic.text}
    </div>
  );
}
