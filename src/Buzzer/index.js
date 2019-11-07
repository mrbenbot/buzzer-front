import React, { useState } from "react";
import css from "./Buzzer.module.css";
function Buzzer({ buzz, name, setName }) {
  const [gotName, setGotName] = useState(false);
  return (
    <div className={css.mainContainer}>
      {gotName ? (
        <div>
          <h1>{name}</h1>
          <button className={css.buzzButton} onClick={buzz}>
            BUZZ
          </button>
        </div>
      ) : (
        <>
          <input
            type="text"
            value={name}
            placeholder="enter your name"
            onChange={e => setName(e.target.value)}
          ></input>
          <button onClick={() => name !== "" && setGotName(true)}>enter</button>
        </>
      )}
    </div>
  );
}

export default Buzzer;
