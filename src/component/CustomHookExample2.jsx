import React from "react";
import useLocalStorage from "../hooks/useLocalStorage"; // Ensure correct filename casing

function CustomHookExample2() {
  const [task, setTask] = useLocalStorage("task", "");
  const [tasks, setTasks] = useLocalStorage("tasks", []);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!task.trim()) return; // ✅ Prevent empty tasks

    const taskObj = {
      id: crypto.randomUUID(), // ✅ Generate a unique ID
      task: task.trim(),
      completed: false,
      date: new Date().toISOString(), // ✅ Use full timestamp for better uniqueness
    };

    setTasks((prevTasks) => [...prevTasks, taskObj]); // ✅ Functional update
    setTask(""); // ✅ Reset input
  };

  return (
    <form onSubmit={onSubmit} className="w-50">
      <div className="mb-3">
        <label className="form-label">Task</label>
        <input
          className="form-control"
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>

      {/* ✅ Render task list safely with unique keys */}
      {tasks.map((taskItem) => (
        <h3 key={taskItem.id || crypto.randomUUID()}>{taskItem.task}</h3>
      ))}
    </form>
  );
}

export default CustomHookExample2;
