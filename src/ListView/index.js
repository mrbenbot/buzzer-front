import React from "react";
import List from "../List";
function ListView({ list, reset }) {
  return (
    <div>
      <button onClick={reset}>Reset</button>
      <List list={list} />
    </div>
  );
}

export default ListView;
