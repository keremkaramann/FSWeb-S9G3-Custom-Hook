import { useEffect, useState } from "react";
import { useAddLocalStorage } from "./localStorageKullan.js";

export const useNightMode = (initialValue = false) => {
  const key = "nightMode";

  const [night, setNight] = useState(initialValue);
  const [storedValue, setValue] = useAddLocalStorage(key, initialValue);

  useEffect(() => {
    setNight(storedValue);
  }, [storedValue]);

  const changeHandler = (e) => {
    e.preventDefault();
    setNight(!night);
    setValue(!night);
  };

  return [night, changeHandler];
};
