import React from "react";
import { render, cleanup } from "@testing-library/react";
import Phonetic from "./Phonetic";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeUp } from "@fortawesome/free-solid-svg-icons";

afterEach(cleanup);

it("renders phonetic audio", () => {
  // arrange & act
  const { container, getByTestId, getAllByText } = render(
    <Phonetic
      phonetic={{
        text: "audiotest",
        audio: "https://my-audio-link.mp3",
      }}
    />
  );

  // assert
  expect(getByTestId("audio"));
  expect(getAllByText("audiotest"));
  expect(container.querySelector('[data-icon="volume-up"]')).toBeTruthy();
});

it("match snapshot", () => {
  const { asFragment } = render(
    <Phonetic
      phonetic={{ text: "audiotest", audio: "https://my-audio-link.mp3" }}
    />
  );
  expect(asFragment()).toMatchSnapshot();
});
