import React, { useState, useEffect } from "react";
// import '../App.css';

function Counter() {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };
  const decrement = () => {
    setCounter(counter - 1);
  };

  const RenderCounter = () => {
    return (
      <div
        style={{
          alignItems: "center",
        }}
      >
        <h5>Counter</h5>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "0",
          }}
        >
          <button onClick={increment}>+</button>
          &nbsp; {counter} &nbsp;
          <button onClick={decrement}>-</button>
        </div>
      </div>
    );
  };

  useEffect(() => {
    fetch("http://localhost:8090/generate-random-integer/new")
      .then((res) => res.json())
      .then((result) => {
        setCounter(parseInt(result));
      });
  }, []);

  return <RenderCounter />;
}

export default Counter;
