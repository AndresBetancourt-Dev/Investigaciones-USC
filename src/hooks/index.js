import { useRef } from "react";

export const useComponentWillMount = (fn) => {
  const willMount = useRef(true);
  if (willMount.current) {
    fn();
  }
  willMount.current = false;
};
