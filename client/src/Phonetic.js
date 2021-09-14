import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeUp } from "@fortawesome/free-solid-svg-icons";

export default function Phonetic(props) {
  const audio = useRef(null);
  function playPronunciation(e) {
    e.preventDefault();
    if (!audio) return;
    // return the current value of the element audio
    audio.current.play();
  }
  return (
    <div className="phonetic text-left">
      {/* call the useRef. */}
      <audio src={props.phonetic.audio} ref={audio} data-testid="audio"></audio>
      <FontAwesomeIcon
        icon={faVolumeUp}
        onClick={playPronunciation}
        className="ring-offset-4 ring-2 ring-grey rounded-full cursor-pointer"
      />
      <span className="absolute ml-2 italic">/{props.phonetic.text}/</span>
    </div>
  );
}
