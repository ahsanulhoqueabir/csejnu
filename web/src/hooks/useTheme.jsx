import { useEffect, useState } from "react";

const useTheme = () => {
  const [transition, setTransition] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "lightt"
  );

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    if (localTheme) {
      document.querySelector("html").setAttribute("data-theme", localTheme);
    }
  }, [theme]);
  return {
    theme,
    setTheme,
    transition,
    setTransition,
  };
};

export default useTheme;
