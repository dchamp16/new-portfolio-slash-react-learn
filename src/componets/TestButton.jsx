import { useState } from "react";

export default function TestButton() {
  const [test1, test2] = useState(null);

  function incriment() {
    test2(test1 + 1);
  }

  function dicriment() {
    if (test1 <= 0) {
      return 0;
    } else {
      test2(test1 - 1);
    }
  }

  function reset() {
    test2(0);
  }

  return (
    <div className="App">
      <p>Value: {test1}</p>
      <button onClick={incriment}>+</button>
      <button onClick={dicriment}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
