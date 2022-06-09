import React, { useState } from "react";
import { useCounterStore } from "store/storeHooks";

const Counter = () => {
  const { count, increment, decrease } = useCounterStore();
  return (
    <div
      style={{
        margin: "10px",
        padding: "10px",
        textAlign: "center",
        backgroundColor: "grey",
      }}
    >
      <h1>Remote App</h1>

      <div>
        <h3>{count}</h3>
        <button onClick={increment}>ADD one</button>
        <button onClick={decrease}>Minus one</button>
      </div>
    </div>
  );
};

export default Counter;
