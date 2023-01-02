import React from "react";
import { createContext, useState } from "react";
import { tasks as data } from "../data/task";
import { useEffect } from "react";

export const countsContexts = createContext();

export function CountContextProvider(props) {
  const [tasks, setTasks] = useState([]);

  function createCount(username) {
    username.key = tasks.length;
    console.log(username);
    setTasks([...tasks, username]);
  }

  function deleteCount(countId) {
    setTasks(tasks.filter((task) => task.id !== countId));
  }
  useEffect(() => {
    setTasks(data);
  }, []);
  return (
    <countsContexts.Provider value={{ tasks, deleteCount, createCount }}>
      {props.children}
    </countsContexts.Provider>
  );
}
