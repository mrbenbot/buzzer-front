import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import ListView from "./ListView";
import Buzzer from "./Buzzer";
import "./App.css";

const socket = socketIOClient(process.env.REACT_APP_URL || "192.168.0.96:5000");

const id = `${Math.random()}`;

function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);

  socket.on("update", data => {
    setList(data);
  });

  useEffect(() => {
    socket.emit("get list");
  }, []);

  function reset() {
    socket.emit("reset");
  }

  function buzz() {
    socket.emit("buzz", { name, id });
  }

  return (
    <Router>
      <Switch>
        <Route path="/list">
          <ListView list={list} reset={reset} />
        </Route>
        <Route path="/">
          <Buzzer buzz={buzz} name={name} setName={setName} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
