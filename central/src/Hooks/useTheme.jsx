import { useEffect, useState } from "react";

const useTheme = () => {
  const [transition, setTransition] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("jnu-theme")
      ? localStorage.getItem("jnu-theme")
      : "nord"
  );

  useEffect(() => {
    localStorage.setItem("jnu-theme", theme);
    const localTheme = localStorage.getItem("jnu-theme");
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
