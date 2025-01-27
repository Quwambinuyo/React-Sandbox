import React from "react";
import Todo from "./Todo";
import { useState } from "react";

function useRefExample3() {
  const [showTodo, setShowTod] = useState(true);

  return (
    <div>
      {showTodo && <Todo />}
      <button
        className="btn btn-primary mb-2
      "
        onClick={() => setShowTod(!showTodo)}
      >
        Toggle Todo
      </button>
    </div>
  );
}

export default useRefExample3;
