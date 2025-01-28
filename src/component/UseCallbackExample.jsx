import React, { useState, useCallback } from "react";

function UseCallbackExample() {
  const [task, setTask] = useState([]);

  // Memoize the addTask function
  const addTask = useCallback(() => {
    setTask((prevState) => [...prevState, "task"]);
  }, []); // No dependencies, so it will not change between renders

  return (
    <div>
      <Button addTask={addTask} />
      {task.map((task, index) => (
        <p key={index}>{task}</p>
      ))}
    </div>
  );
}

const Button = React.memo(({ addTask }) => {
  console.log("Button rendered");

  return (
    <div className="mt-2">
      <p>UseCallBackExample</p>
      <button className="btn btn-primary" onClick={addTask}>
        Add Task
      </button>
    </div>
  );
});

export default UseCallbackExample;
