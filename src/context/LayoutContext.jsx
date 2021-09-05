import { useState, createContext } from "react";

export const LayoutContext = createContext();

export const LayoutProvider = ({ children }) => {
  const [headerState, setHeaderState] = useState({
    fixed: true,
    showMenu: true,
    visible: false,
  });

  const [footerState, setFooterState] = useState({
    visible: true,
  });

  return (
    <LayoutContext.Provider
      value={{ headerState, setHeaderState, footerState, setFooterState }}
    >
      {children}
    </LayoutContext.Provider>
  );
};
