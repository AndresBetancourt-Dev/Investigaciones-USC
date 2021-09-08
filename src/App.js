import Routes from "./navigation/Routes";
import { HelmetProvider } from "react-helmet-async";
import { LayoutProvider } from "./context/LayoutContext";

function App() {
  return (
    <HelmetProvider>
      <LayoutProvider>
        <Routes />
      </LayoutProvider>
    </HelmetProvider>
  );
}

export default App;
