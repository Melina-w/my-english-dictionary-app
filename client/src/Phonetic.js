import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeUp } from "@fortawesome/free-solid-svg-icons";

export default function Phonetic(props) {
  // console.log(JSON.stringify(props));
  // insteaad of getting the html element with getDocumentById &hardcoding the id, use useRef hook

  const audio = useRef(null);
  function playPronunciation(e) {
    e.preventDefault();
    if (!audio) return;
    // return the current value of the element audio
    audio.current.play();
  }
  return (
    <div className="phonetic">
      {/* call the useRef. */}
      <audio src={props.phonetic.audio} ref={audio} data-testid="audio"></audio>
      <FontAwesomeIcon icon={faVolumeUp} onClick={playPronunciation} />

      {props.phonetic.text}
    </div>
  );
}
