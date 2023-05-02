import { useState } from "react";
function Counter(props) {
  console.log("This is counter component");
  const [number, setNumber] = useState(0);
  function incrementHandler() {
    setNumber((prevState) => {
      return (prevState = prevState + 1);
    });
  }
  function addValueHandler() {
    setNumber((prevState) => {
      return prevState + +props.data;
    });
  }
  return (
    <div>
      <p>{number}</p>
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={addValueHandler}>Add By Value</button>
    </div>
  );
}
export default Counter;
