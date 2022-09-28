import { useEffect, useState } from "react";

function Debounce(value, delay) {
  const [debounce, setDebounce] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounce(value);
    }, delay);
    // return () => clearInterval(handler);
    return ()=>clearTimeout(handler)
  }, [value, delay]);
  return debounce;
}

export default Debounce;
