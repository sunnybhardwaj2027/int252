import React from "react";

const ChildComponent = ({ count, increaseCount }) => {
  return (
    <div>
      <h3>Count: {count}</h3>
      <button onClick={increaseCount}>Increase Count</button>
    </div>
  );
};

export default ChildComponent;
