import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { hideHeader } from "../utils";

/* Functional Component */

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    hideHeader();
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
