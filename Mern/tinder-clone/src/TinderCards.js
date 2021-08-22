import React, { useState } from "react";
import "./TinderCards.css";

function TinderCards() {
  const [people, setpeople] = useState([
    {
      name: "Elon Musk",
    },
  ]);

  return (
    <div classname="tinderCards">
      {people.map((person) => (
        <h1>{person.name}</h1>
      ))}
    </div>
  );
}

export default TinderCards;
