import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";

import Phonetic from "./Phonetic";

// test suite
describe("Phonetic", () => {
  afterEach(cleanup);

  test("renders phonetic audio", () => {
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
  test("match snapshot", () => {
    const { asFragment } = render(
      <Phonetic
        phonetic={{ text: "audiotest", audio: "https://my-audio-link.mp3" }}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  // very very difficult test!
  test("calls playPronunciation when clicked", () => {
    // Arrange// playSpy create a spy on the playFunction HTML media,
    // to check that playAudio is executed
    const playSpy = jest
      .spyOn(window.HTMLMediaElement.prototype, "play")
      // I need to implement playSpy, so I created an empty function
      .mockImplementation(() => {});

    const { container } = render(
      <Phonetic
        phonetic={{ text: "audiotest", audio: "https://my-audio-link.mp3" }}
      />
    );
    // act
    fireEvent.click(container.querySelector('[data-icon="volume-up"]'));
    // Assert // I spect playSPy to be called 1 time and then set it back to 0
    expect(playSpy).toHaveBeenCalledTimes(1);
    playSpy.mockRestore();
  });
});
