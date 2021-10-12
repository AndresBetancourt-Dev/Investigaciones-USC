import { useRef, useEffect } from "react";

export const useComponentWillMount = (callback) => {
  const willMount = useRef(true);
  if (willMount.current) {
    callback();
  }
  willMount.current = false;
};

export const useRefresh = (history, path, resetRoute = "/") => {
  let timeout;
  const refresh = () => {
    history.push(resetRoute);
    timeout = setTimeout(() => history.push(path), 1);
  };

  useEffect(() => {
    return () => clearTimeout(timeout);
  }, [timeout]);

  return refresh;
};
