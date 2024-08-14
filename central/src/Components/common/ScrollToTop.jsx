import { useEffect } from "react";

const ScrollToTop = ({ para = [] }) => {
  useEffect(() => {
    // Smooth scroll to the top whenever the values in para change
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [...para]); // Pass para as the dependency
  return null;
};

export default ScrollToTop;
