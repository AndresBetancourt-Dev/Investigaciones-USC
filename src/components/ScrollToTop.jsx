import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { LayoutContext } from "../context/LayoutContext";

/* Functional Component */

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const { headerState, setHeaderState } = useContext(LayoutContext);

  useEffect(() => {
    setHeaderState({
      ...headerState,
      fixed: true,
      visible: false,
    });
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
