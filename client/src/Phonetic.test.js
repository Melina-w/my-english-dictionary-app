import React from "react";
import { render } from "@testing-library/react";
import Phonetic from "./Phonetic";

it("renders phonetic audio", () => {
  const { container, getByTestId, getAllByText } = render(
    <Phonetic
      phonetic={{
        text: "audiotest",
        audio: "https://my-audio-link.mp3",
      }}
    />
  );
  expect(getByTestId("audio"));
  console.log(getAllByText("audiotest"));
});
