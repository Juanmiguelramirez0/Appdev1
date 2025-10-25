import React from "react";
import { getImageUrl } from "../utils/utils";

const person = {
  name: "Gregorio Y. Zara",
  theme: {
    backgroundColor: "black",
    color: "pink",
  },
};

export default function TodoList() {
  return (
    <div style={person.theme}>
      <h1>{person.name}'s Todos</h1>
      <img
        className="avatar"
        src="AlbertEinstein.webp"
        alt="AlbertEinstein"
      />
      <ul>
        <li>physicist</li>
        <li>theory of relativity</li>
        <li>Quantum Theory of Light</li>
      </ul>
    </div>
  );
}