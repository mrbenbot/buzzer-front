import React from "react";

function List({ list = [] }) {
  return (
    <ol>
      {list
        .sort((a, b) => a.time > b.time)
        .map(({ name }, i) => (
          <li key={i}>{name}</li>
        ))}
    </ol>
  );
}

export default List;
