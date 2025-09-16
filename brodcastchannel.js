import React, { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Create a channel named "counter"
    const channel = new BroadcastChannel("counter");

    // Listen for messages from other tabs
    channel.onmessage = (event) => {
      setCount(event.data);
    };

    return () => channel.close();
  }, []);

  const handleIncrement = () => {
    const newValue = count + 1;
    setCount(newValue);

    // Send to other tabs
    const channel = new BroadcastChannel("counter");
    channel.postMessage(newValue);
    channel.close();
  };

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h2>Count: {count}</h2>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}

export default Counter;


useEffect(() => {

})
useEffect(() => {
    
}, [])

useEffect(() => {
    
}, [abc])
useEffect(() => {

    return () =>{

    }    
}, [abc])
