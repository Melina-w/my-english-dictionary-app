import React from "react";
import Definition from "./Definition";

export default function Meaning(props) {
  return (
    <div className="meaning">
      {props.meaning.definitions.map((definition, index) => {
        return <Definition key={index} definition={definition} />;
      })}
    </div>
  );
}
