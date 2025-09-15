// Controlled vs Uncontrolled


import { useRef, useState } from "react";
import "./styles.css";

export default function App() {
  const counter = useRef(0);
  // const [counter, setCounter] = useState(0);
  return (
    <>
      {/* <p>{counter}</p> */}
      <div className="App">
        <button
          onClick={() => {
            // setCounter(counter + 1);
            counter.current += 1;
            alert(`${counter.current}`);
          }}
        >
          Increment
        </button>
        <button
          onClick={() => {
            // setCounter(counter - 1);
            counter.current.value -= 1;
            alert(`${counter.current}`);
          }}
        >
          Decrement
        </button>
      </div>
    </>
  );
}
