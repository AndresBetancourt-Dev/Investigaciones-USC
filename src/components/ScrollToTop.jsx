import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { LayoutContext } from "../context/LayoutContext";

/* Functional Component */

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const { hideHeader } = useContext(LayoutContext);

  useEffect(() => {
    hideHeader();
    window.scrollTo(0, 0);
  }, [pathname]); // eslint-disable-line react-hooks/exhaustive-deps

  return null;
}
