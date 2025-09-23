import * as React from "react";
import {useState, useEffect} from "react";

function useMediaQuery(query) {
const [isMediaMatches, setIsMediaMatches] = useState(false);
  useEffect(() => {
    if(typeof window === "undefined") return;
    let mediaWatcher = window.matchMedia(query)
    if(mediaWatcher.matches){
      setIsMediaMatches(true)
    }
    function updateMatch(event){
      if(event.matches){
        setIsMediaMatches(true)
      }
    }
    mediaWatcher.addEventListener('change', updateMatch)
    
  }, [query])
  return isMediaMatches
}

export default useMediaQuery;
