import { HelmetProvider } from "react-helmet-async";
import { LayoutProvider } from "context/LayoutContext";
import Routes from "navigation/Routes";

const App = () => {
  return (
    <HelmetProvider>
      <LayoutProvider>
        <Routes />
      </LayoutProvider>
    </HelmetProvider>
  );
};

export default App;
