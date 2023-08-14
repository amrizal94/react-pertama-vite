import { useState } from "react";
import MyButton from "./components/MyButton";
import MyCounter from "./components/MyCounter";

function App() {
  const [counter, setCounter] = useState(0);
  const decrement = () => setCounter(counter - 1);
  const increment = () => setCounter(counter + 1);
  const reset = () => setCounter(0);

  return (
    <div>
      <MyButton text={"-"} onClick={decrement} counter={counter} />
      <MyCounter text={counter} />
      <MyButton text={"+"} onClick={increment} counter={counter} />
      <MyButton text={"Reset!"} onClick={reset} counter={counter} />
    </div>
  );
}

export default App;
