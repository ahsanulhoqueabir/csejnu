import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollToTopOnRouteChange = ({ para }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // when path changes, scroll to top
    // const body = document.querySelector(".pgT");
    // if (body) {
    //   body.classList.add("pageTrans");

    //   const timeoutId = setTimeout(() => {
    //     body.classList.remove("pageTrans");
    //   }, 300);

    //   return () => clearTimeout(timeoutId);
    // }
  }, [pathname, para]);

  return null;
};
