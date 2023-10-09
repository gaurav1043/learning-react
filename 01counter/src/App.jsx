import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const addValue = () => {
    if (count === 20) return;
    setCount(count + 1);
  };
  const subValue = () => {
    if (count === 0) return;
    setCount(count - 1);
  };
  return (
    <>
      <h1>Learning Counter</h1>
      <p>
        {" "}
        Implement counter using use stete such that it should not go negative or
        above 20
      </p>
      <div style={{ display: "flex", flexDirection: "column", marginTop: 10 }}>
        <button onClick={addValue}>Add value</button>
        <span style={{}}>COUNTER: {count}</span>
        <button onClick={subValue}>Subtract value</button>
      </div>
    </>
  );
}

export default App;
