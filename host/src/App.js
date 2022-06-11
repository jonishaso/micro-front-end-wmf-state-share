import React from "react";
import RemoteApp from "app2/counter";
import { useCounterStore } from "store/storeHooks";

export default () => {
  const { count } = useCounterStore();

  return (
    <div className="App">
      <RemoteApp />
      <h1
        style={{ color: "red", backgroundColor: "blue" }}
      >{`Host App ${count}`}</h1>
    </div>
  );
};
