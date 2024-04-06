import { useReducer, useState } from "react";
import "./App.css";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import tasksReducer from "./taskReducer";
import { TasksContext, TaskDispatchContext } from "./TasksContext";

function App() {
  const initialTasks = [
    { id: 0, text: "Visit Kafka Museum", done: true },
    { id: 1, text: "Watch a puppet show", done: false },
    { id: 2, text: "Lennon Wall pic", done: false },
  ];

  // USING USEREDUCER
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);
  console.log(tasks);

  return (
    <>
      <TasksContext.Provider value={{ tasks, nextId }}>
        <TaskDispatchContext.Provider value={dispatch}>
          <h1>Day off in Kyoto</h1>
          <AddTask />
          <TaskList />
        </TaskDispatchContext.Provider>
      </TasksContext.Provider>
    </>
  );
}

export default App;
