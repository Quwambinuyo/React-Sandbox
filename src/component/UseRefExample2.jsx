import React from "react";
import { useState, useEffect, useRef } from "react"; // Import React hooks for state, effect, and reference handling

// Define a functional component called `useRefExample2`
function useRefExample2() {
  // State to track the current input value
  const [name, setName] = useState("");

  // Ref to track the number of renders (does not cause re-renders when updated)
  const renders = useRef(0);

  // Ref to store the previous state of the `name` variable
  const prevName = useRef("");

  // useEffect runs after each render. This updates the `renders` ref and stores the previous `name` value
  useEffect(() => {
    renders.current = renders.current + 1; // Increment the `renders` ref to count renders
    prevName.current = name; // Update the `prevName` ref with the current `name` state
  }, [name]); // Dependency array: Runs the effect whenever `name` changes

  // Render the UI
  return (
    <div>
      {/* Display the number of times the component has rendered */}
      <h1>Renders: {renders.current}</h1>

      {/* Display the previous value of the `name` state */}
      <h2>Prev Name State: {prevName.current}</h2>

      {/* Input field to update the `name` state */}
      <input
        type="text"
        value={name} // Binds the input value to the `name` state
        onChange={(e) => setName(e.target.value)} // Updates `name` state on input change
        className="form-control mb-3" // Adds styling classes (Bootstrap, for example)
      />
    </div>
  );
}

export default useRefExample2; // Export the component for use in other parts of the app
