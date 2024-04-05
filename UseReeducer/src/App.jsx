import { useReducer, useState } from "react";
import "./App.css";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import tasksReducer from "./taskReducer";

function App() {
  let nextId = 3;
  const initialTasks = [
    { id: 0, text: "Visit Kafka Museum", done: true },
    { id: 1, text: "Watch a puppet show", done: false },
    { id: 2, text: "Lennon Wall pic", done: false },
  ];

  // UISNG USESTATE HOOK
  // const [tasks, setTasks] = useState(initialTasks);

  // const handleAddTask = (text) => {
  //   setTasks([...tasks, { id: nextId + 1, text: text, done: false }]);
  // };

  // const handleChangeTask = (task) => {
  //   setTasks(
  //     tasks.map((t) => {
  //       if (t.id == task.id) {
  //         return task;
  //       } else {
  //         return t;
  //       }
  //     })
  //   );
  // };

  // const handleDeleteTask = (taskId) => {
  //   setTasks(tasks.filter((t) => t.id !== taskId));
  // };

  // USING USEREDUCER
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  const handleAddTask = (text) => {
    dispatch({
      type: "added",
      text: text,
      id: nextId++,
    });
  };

  function handleChangeTask(task) {
    dispatch({
      type: "changed",
      task: task,
    });
  }

  function handleDeleteTask(taskId) {
    dispatch({
      type: "deleted",
      id: taskId,
    });
  }

  return (
    <>
      <h1>Prague itinerary</h1>
      <AddTask onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </>
  );
}

export default App;
