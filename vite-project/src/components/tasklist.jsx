import React from "react";
import CountCard from "./countCard";
import { useContext } from "react";
import { countsContexts } from "../context/CountContext";
import { v4 } from "uuid";

function tasklist() {
  const { tasks } = useContext(countsContexts);

  if (tasks.length === 0) {
    return <h1>No hay nada por aquí</h1>;
  }

  return (
    <div>
      {tasks.map((task) => (
        <CountCard task={task} />
      ))}
    </div>
  );
}

export default tasklist;
