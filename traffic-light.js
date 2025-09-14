import { useState, useEffect } from "react";
export default function TrafficLight() {
  const [currentLight, setCurrentLight] = useState("");

  useEffect(() => {
    isMounted = true;

    const runSequence = async function () {
      while (isMounted) {
        setCurrentLight("green");
        await new Promise((res) => setTimeout(res, 3000));
        setCurrentLight("yellow");
        await new Promise((res) => setTimeout(res, 500));
        setCurrentLight("red");
        await new Promise((res) => setTimeout(res, 4000));
      }
    };
    runSequence();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    // <div>
    <div className="traffic_wrapper">
      <div className="vertical_traffic">
        <span
          className={`light red ${currentLight !== "red" ? "off" : ""}`}
        ></span>
        <span
          className={`light yellow ${currentLight !== "yellow" ? "off" : ""}`}
        ></span>
        <span
          className={`light green ${currentLight !== "green" ? "off" : ""}`}
        ></span>
      </div>
      <div className="horizontal_traffic">
        <span
          className={`light red ${currentLight !== "red" ? "off" : ""}`}
        ></span>
        <span
          className={`light yellow ${currentLight !== "yellow" ? "off" : ""}`}
        ></span>
        <span
          className={`light green ${currentLight !== "green" ? "off" : ""}`}
        ></span>
      </div>
    </div>
    // </div>
  );
}
