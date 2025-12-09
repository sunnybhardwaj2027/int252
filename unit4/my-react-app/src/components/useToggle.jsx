import { useState, useCallback } from "react";

export default function useToggle(initial = false) {
  const [value, setValue] = useState(initial);

  const toggle = useCallback(() => {
    setValue(prev => !prev);
  }, []);

  return [value, toggle];
}

