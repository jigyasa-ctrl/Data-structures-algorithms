export const useCustomMemo = (callback, deps) => {
    if (typeof callback !== "function") {
      throw new TypeError("callback is not a function");
    }
  
    function areSamedeps(prevDeps, deps) {
      if (!prevDeps.length) return false;
      if (prevDeps.length !== deps.length) return false;
      for (let i = 0; i < deps.length; i++) {
        if (prevDeps[i] !== deps[i]) return false;
      }
  
      return true;
    }
  
    let memoizedRef = useRef(null);
  
    if (!memoizedRef.current || !areSamedeps(memoizedRef.current.deps, deps)) {
      memoizedRef.current = {
        value: callback(),
        deps: deps,
      };
    }
  
    return memoizedRef.current.value;
  };
  