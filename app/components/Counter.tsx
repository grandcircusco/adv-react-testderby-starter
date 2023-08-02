import { useState } from "react";
import "./Counter.css";

function Counter() {
  const [value, setValue] = useState(0);
  const decClass = value < -10 ? "Counter--btnhidden" : "Counter--btnvisible";
  const incClass = value >= 10 ? "Counter--btnhidden" : "Counter--btnvisible";
  const message =
    value >= 8
      ? "Greater than 8"
      : value <= 3
      ? "Less than or equal to 3"
      : "Greater than 3, less than or equal to 8";

  return (
    <div className="Counter">
      <h2>Counter</h2>
      <p>{value}</p>
      <div className="Counter--btns">
        <button
          type="button"
          className={"IncDec " + decClass}
          onClick={() => setValue(value - 1)}
        >
          Decrement
        </button>
        <button
          type="button"
          className={"IncDec " + incClass}
          onClick={() => setValue(value + 1)}
        >
          Increment
        </button>
      </div>
      <p>{message}</p>
    </div>
  );
}

export default Counter;
