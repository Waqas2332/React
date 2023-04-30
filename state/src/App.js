import React from "react";
import Blog from "./components/blog/Blog";
// React Hooks
// function App() {
//   const [number, setNumber] = useState(0);
//   function incrementHandler() {
//     setNumber((prevState) => {
//       return (prevState = prevState + 1);
//     });
//   }
//   return (
//     <div>
//       <Counter data={number} />
//       <button onClick={incrementHandler}>Increment</button>
//     </div>
//   );
// }

function App() {
  return (
    <div>
      <Blog />
    </div>
  );
}

export default App;
