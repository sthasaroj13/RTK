import type { RootState } from "./store/store";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
} from "./store/Features/counter/counterSlice";
import { useState } from "react";

function App() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  const [message, setMesssge] = useState<string>();
  const [amount, setAmount] = useState<number>(0);
  const handleIncrement = () => {
    setMesssge("");
    dispatch(increment());
  };
  const handleDecrement = () => {
    if (count > 0) {
      dispatch(decrement());
      setMesssge(" ");
    } else {
      setMesssge("value cannot be negative");
    }
  };
  const handleIncrementAmt = () => {
    if (amount > 0) {
      dispatch(incrementByAmount(amount));
      setMesssge("");
    } else {
      setMesssge("value cannot be negative");
    }
  };
  return (
    <>
      <p style={{ color: "red", marginLeft: "43rem" }}>{message}</p>
      <div
        style={{
          marginLeft: "40rem",
          backgroundColor: "lightblue",
          padding: "30px",
          borderRadius: "10px",
          textAlign: "center",
        }}
      >
        <h1 style={{ color: "yellow" }}>{count}</h1>
        <div style={{ display: "flex", gap: "5px" }}>
          <button onClick={handleIncrement}>count++</button>
          <button onClick={handleDecrement}>count--</button> <br />
        </div>{" "}
        <br />
        <div>
          <input type="number" onChange={(e) => setAmount(+e.target.value)} />
        </div>{" "}
        <button onClick={handleIncrementAmt}>Increment by amount</button>
      </div>
    </>
  );
}

export default App;
