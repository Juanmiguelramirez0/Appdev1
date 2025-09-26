import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Using Hooks</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Add</button>
    </div>
  );
}
