import { useState, useEffect } from "react";

export const useAutoClose = (ref, initialState) => {
  const [isOpen, setIsOpen] = useState(initialState);

  const handleClick = (e) => {
    if (!ref.current || ref.current.contains(e.target)) {
      return;
    }

    setIsOpen(false);
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return [isOpen, setIsOpen];
};
