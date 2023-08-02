import { useState } from "react";
import "./Liststats.css";

function ListStats() {
  const [values, setValues] = useState({
    num1: "0",
    num2: "0",
    num3: "0",
    num4: "0",
    num5: "0",
  });

  const sum =
    +values.num1 + +values.num2 + +values.num3 + +values.num4 + +values.num5;

  return (
    <div className="ListStats">
      <h2>ListStats</h2>

      <input
        type="number"
        value={values.num1}
        onChange={(e) =>
          setValues((prev) => ({ ...prev, num1: e.target.value }))
        }
      />
      <input
        type="number"
        value={values.num2}
        onChange={(e) =>
          setValues((prev) => ({ ...prev, num2: e.target.value }))
        }
      />
      <input
        type="number"
        value={values.num3}
        onChange={(e) =>
          setValues((prev) => ({ ...prev, num3: e.target.value }))
        }
      />
      <input
        type="number"
        value={values.num4}
        onChange={(e) =>
          setValues((prev) => ({ ...prev, num4: e.target.value }))
        }
      />
      <input
        type="number"
        value={values.num5}
        onChange={(e) =>
          setValues((prev) => ({ ...prev, num4: e.target.value }))
        }
      />

      <p>Sum: {sum}</p>
      <p>Average: {sum / 4}</p>
    </div>
  );
}

export default ListStats;
