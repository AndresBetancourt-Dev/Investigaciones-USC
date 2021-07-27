import { useRef } from "react";

export const useComponentWillMount = (callback) => {
  const willMount = useRef(true);
  if (willMount.current) {
    callback();
  }
  willMount.current = false;
};
