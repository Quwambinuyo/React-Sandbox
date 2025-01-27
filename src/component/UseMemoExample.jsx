import React from "react";
import { useState, useEffect, useRef, useMemo } from "react";

function UseMemoExample() {
  const [number, setNumber] = useState(1);
  const [inc, setInc] = useState(0);

  const sqrt = getSqrt(number);

  const renders = useRef(1);

  useEffect(() => {
    renders.current = renders.current + 1;
  });

  const onClick = () => {
    setInc((preState) => {
      return preState + 1;
      console.log(preState + 1);
    });
  };

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        className="form-control w-25"
      />

      <h2 className="my-3">
        The sqrt of {number} is {sqrt}
      </h2>
      <button onClick={onClick} className="btn btn-primary">
        Re Render
      </button>
      <h3>Render: {renders.current}</h3>
    </div>
  );
}

function getSqrt(number) {
  // for (let i = 0; i <= 100000; i++) {
  //   console.log(i);
  // }

  console.log("Expensive Function Called");

  return Math.sqrt(number);
}

export default UseMemoExample;
