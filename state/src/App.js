import React, { useState } from "react";
// React Hooks
function App() {
  const [number, setNumber] = useState(0);
  function incrementHandler() {
    setNumber((prevState) => {
      return (prevState = prevState + 1);
    });
  }
  return (
    <div>
      <p>{number}</p>
      <button onClick={incrementHandler}>Increment</button>
      <button>Decrement</button>
    </div>
  );
}

export default App;
