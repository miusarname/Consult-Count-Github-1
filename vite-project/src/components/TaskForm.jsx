import React from "react";
import { useState, useContext } from "react";
import { v5 as uuid } from "uuid";
import { countsContexts } from "../context/CountContext";

function TaskForm() {
  const [username, setUsername] = useState("");
  const { createCount } = useContext(countsContexts);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://api.github.com/users/${username}`)
      .then((res) => res.json())
      .then((data) => createCount(data));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          id="app"
          type="text"
          placeholder="Ingresa tu username de Github"
          className="input"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          autoFocus
        />
        <button className="button is-link">send</button>
      </form>
    </div>
  );
}

export default TaskForm;
