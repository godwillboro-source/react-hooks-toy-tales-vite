import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, onLike, onDelete }) {
  return (
    <div id="toy-collection">
      {toys.map((toy) => (
        <ToyCard
          key={toy.id}
          toy={toy}
          onLike={onLike}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default ToyContainer;
