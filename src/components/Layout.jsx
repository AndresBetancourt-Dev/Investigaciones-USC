import Footer from "./Footer";
import Header from "./Header";

/* Functional Component */

const Layout = ({ children }) => {
  return (
    <main>
      <Header />
      {children}
      <Footer />
    </main>
  );
};

export default Layout;
