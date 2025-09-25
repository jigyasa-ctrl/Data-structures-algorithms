import { useCallback, useEffect, useRef } from "react";

export default function useThrottle(func, delay = 200) {
  const lastExecuted = useRef(Date.now());
  const throttled = useCallback(
    (...args) => {
      if (Date.now() - lastExecuted.current >= delay) {
        console.log(args);
        func(...args);
        lastExecuted.current = Date.now();
      }
    },
    [func, delay]
  );
  return throttled;
}

export default function useDebounce(func, delay) {
  const timeoutRef = useRef(null);
  const debounce = useCallback(
    (...args) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = setTimeout(() => {
        func(...args);
      }, delay);
    },
    [func, delay]
  );
  return debounce;
}

export default function usePrevious(value) {
    const ref = useRef()

    useEffect(() =>{
        ref.current = value

    }, [value])
    return ref.current;

}
