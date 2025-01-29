import React, { useState, useEffect } from "react";

function useLocalStorage(key, initialValue) {
  // ✅ Initialize state only once
  const [localStorageValue, setLocalStorageValue] = useState(() => {
    try {
      const itemFromStorage = localStorage.getItem(key);
      return itemFromStorage ? JSON.parse(itemFromStorage) : initialValue;
    } catch (error) {
      console.error("Error parsing localStorage", error);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      // ✅ Ensure value is correctly stored
      const valueToStore =
        typeof value === "function" ? value(localStorageValue) : value;

      // ✅ Update state
      setLocalStorageValue(valueToStore);

      // ✅ Store in localStorage
      localStorage.setItem(key, JSON.stringify(valueToStore));

      console.log("Updated localStorage:", key, valueToStore);
    } catch (error) {
      console.error("Error setting localStorage", error);
    }
  };

  // ✅ Sync state with localStorage changes in other tabs/windows
  useEffect(() => {
    const handleStorageChange = (event) => {
      if (event.key === key) {
        setLocalStorageValue(
          event.newValue ? JSON.parse(event.newValue) : initialValue
        );
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, [key]);

  return [localStorageValue, setValue];
}

export default useLocalStorage;
