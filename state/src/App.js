import React, { useState } from "react";
import Counter from "./components/Counter";

function App() {
  const [number, setNumber] = useState(null);
  const handleChange = (event) => {
    setNumber(event.target.value);
  };
  return (
    <div>
      <form>
        <input onChange={handleChange} />
      </form>
      <Counter data={number} />
    </div>
  );
}

export default App;
