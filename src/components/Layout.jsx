import React from "react";
import Header from "./Header";

/* Functional Component */

const Layout = ({ children }) => {
  return (
    <main>
      <Header />
      {children}
    </main>
  );
};

export default Layout;
