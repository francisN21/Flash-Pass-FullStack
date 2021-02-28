import React, { useState, useEffect } from "react";

const useLocalStorage = (key, defaultVal) => {
  const stored = localStorage.getItem(key);
  const [value, setValue] = useState(defaultVal);
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  return <div></div>;
};

export default useLocalStorage;
