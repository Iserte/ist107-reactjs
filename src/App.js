// App.js
import { useState } from "react";
import "./app.css";

import CounterDisplay from "./components/CounterDisplay";
import CounterControls from "./components/CounterControls";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <CounterDisplay count={count} />
      <CounterControls
        onIncrement={() => setCount((c) => c + 1)}
        onDecrement={() => setCount((c) => c - 1)}
      />
    </main>
  );
}

export default App;
