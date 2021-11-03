import { useState, createContext } from "react";

export const LayoutContext = createContext();

export const LayoutProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [theme, setTheme] = useState("normal");

  const [headerState, setHeaderState] = useState({
    fixed: true,
    showMenu: true,
    visible: false,
  });

  const [footerState, setFooterState] = useState({
    visible: true,
  });

  const hideHeader = () => {
    setHeaderState({
      ...headerState,
      fixed: true,
      visible: false,
    });
  };

  return (
    <LayoutContext.Provider
      value={{
        loading,
        setLoading,
        headerState,
        setHeaderState,
        footerState,
        setFooterState,
        hideHeader,
        theme,
        setTheme,
      }}
    >
      {children}
    </LayoutContext.Provider>
  );
};
