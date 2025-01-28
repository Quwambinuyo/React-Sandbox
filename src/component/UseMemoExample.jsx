import React from "react";
import { useState, useEffect, useRef, useMemo } from "react";

function UseMemoExample() {
  // State to store the input number for which the square root will be calculated
  const [number, setNumber] = useState(1);

  // State to trigger re-renders without affecting the `number` state
  const [inc, setInc] = useState(0);

  // Memoize the result of the `getSqrt` function to avoid unnecessary recalculations
  // The function is only called again if `number` changes
  const sqrt = useMemo(() => getSqrt(number), [number]);

  // useRef to keep track of the number of renders
  // Ref values persist across renders but do not cause re-renders when updated
  const renders = useRef(1);

  // Increment the render count whenever the component re-renders
  useEffect(() => {
    renders.current = renders.current + 1;
  });

  // Function to handle the "Re Render" button click
  // Updates the `inc` state, which forces the component to re-render
  const onClick = () => {
    setInc((preState) => {
      return preState + 1; // Increment the state
      console.log(preState + 1); // Log the incremented value (though this won't run because it's after `return`)
    });
  };

  return (
    <div>
      {/* Input field to change the number */}
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)} // Update the `number` state when the input changes
        className="form-control w-25"
      />

      {/* Display the square root of the number */}
      <h2 className="my-3">
        The sqrt of {number} is {sqrt}
      </h2>

      {/* Button to trigger a re-render */}
      <button onClick={onClick} className="btn btn-primary">
        Re Render
      </button>

      {/* Display the total number of renders */}
      <h3>Render: {renders.current}</h3>
    </div>
  );
}

// Function to calculate the square root of a number
// Includes a log to show when it's called (used to simulate an expensive operation)
function getSqrt(number) {
  //  expensive calculation
  // for (let i = 0; i <= 100000; i++) {
  //   console.log(i);
  // }

  console.log("Expensive Function Called");

  return Math.sqrt(number); // Return the square root of the input number
}

export default UseMemoExample;
