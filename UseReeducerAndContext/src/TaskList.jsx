import React, { useContext, useState } from "react";

import { TaskDispatchContext, TasksContext } from "./TasksContext";

function TaskList() {
  const { tasks } = useContext(TasksContext);
  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <li id={task.id}>
            <Task task={task} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;

const Task = ({ task, onChange, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useContext(TaskDispatchContext);
  let taskContent;
  if (isEditing) {
    taskContent = (
      <>
        <input
          type="text"
          value={task.text}
          onChange={(e) => {
            dispatch({
              type: "changed",
              task: {
                ...task,
                text: e.target.value,
              },
            });
          }}
        />
        <button onClick={() => setIsEditing(false)}>Save</button>
      </>
    );
  } else {
    taskContent = (
      <>
        <>
          {task.text}
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </>
      </>
    );
  }
  return (
    <>
      {" "}
      <label>
        <input
          type="checkbox"
          checked={task.done}
          onChange={(e) => {
            onChange({
              ...task,
              done: e.target.checked,
            });
          }}
        />
        {taskContent}
        <button
          onClick={() =>
            dispatch({
              type: "deleted",
              id: task.id,
            })
          }
        >
          Delete
        </button>
      </label>
    </>
  );
};
