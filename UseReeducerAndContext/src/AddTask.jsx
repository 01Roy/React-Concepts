import React, { useContext, useState } from "react";
import { TaskDispatchContext, TasksContext } from "./TasksContext";

function AddTask() {
  const [text, setText] = useState("");
  const dispatch = useContext(TaskDispatchContext);

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setText(""),
            dispatch({
              type: "added",
              text: text,
              id: nextId++,
            });
        }}
      >
        Add task
      </button>
    </div>
  );
}

export default AddTask;
let nextId = 3;
