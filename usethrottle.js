import { useState, useRef, useEffect } from "react";

/**
 * Throttles a value, updating at most once per delay
 * @param value - value to throttle
 * @param limit - interval in ms
 */
export function useThrottle(value, limit = 200) {
  const [throttledValue, setThrottledValue] = useState(value);
  const lastRan = useRef(Date.now()); // doesnt cause re renders and doesnt change on rerender caused by others.

  useEffect(() => {
    const handler = setTimeout(() => {
      if (Date.now() - lastRan.current >= limit) {
        setThrottledValue(value);
        lastRan.current = Date.now();
      }
    }, limit - (Date.now() - lastRan.current));

    return () => clearTimeout(handler);
  }, [value, limit]);

  return throttledValue;
}
