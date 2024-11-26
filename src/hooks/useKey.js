import { useEffect } from "react";

export const useKey = (eventType, key, action) => {
  useEffect(() => {
    const callBack = (e) => {
      if (e.code.toLowerCase() === key.toLowerCase()) {
        action();
      }
    };

    document.addEventListener(eventType, callBack);

    return () => {
      document.removeEventListener(eventType, callBack);
    };
  }, [action, key, eventType]);
};
