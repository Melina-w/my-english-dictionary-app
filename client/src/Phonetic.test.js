import React from "react";
import { render, screen } from "@testing-library/react";
import Phonetic from "./Phonetic";

it("renders phonetic audio", () => {
  render(
    <Phonetic
      phonetic={{
        phonetic: {
          text: "",
          audio: "",
        },
      }}
    />
  );
  expect(screen.getByTestId("audio")).toBeInTheDocument();
});
