import { useState, useEffect } from "react";

/**
 * Debounces a value by the given delay
 * @param value - value to debounce
 * @param delay - delay in ms
 */
export function useDebounce(value, delay = 300) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delay);

    return () => clearTimeout(handler); // cleanup on value change
  }, [value, delay]);

  return debouncedValue;
}
