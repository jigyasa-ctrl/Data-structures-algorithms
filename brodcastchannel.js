import React, { useState, useEffect } from "react";
// Brodcast channel APi is like an event listener it listens in different tabs and updates value in all tabs for the subscribed event. -> 
// for example : use cases

// Multi-tab Login/Logout Sync
// Cart Sync in E-commerce
// Live Notifications

/// Limitation: It only works on same-origin pages


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
