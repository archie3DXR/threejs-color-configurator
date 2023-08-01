import React, { useState } from "react";

export default function Clicker() {
  const [count, setCount] = useState(0);

 
  const buttonClick = () => {
    setCount(count + 1);
  };
  const buttonClock = () => {
    setCount(count - 2);
  };
  return (
    <div>
      <div>number: {count} </div>
      <button onClick={buttonClick}>add 1</button>
      <button onClick={buttonClock}>minus 2</button>
      <button onClick={() => setCount(0)}>reset</button>
    </div>
  );
}
