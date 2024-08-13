import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollToTopOnRouteChange = ({ para }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Smooth scroll to the top whenever the pathname changes
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname, para]);

  return null;
};
