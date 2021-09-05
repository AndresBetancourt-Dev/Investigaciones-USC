import Routes from "./navigation/Routes";
import { LayoutProvider } from "./context/LayoutContext";

function App() {
  return (
    <LayoutProvider>
      <Routes />
    </LayoutProvider>
  );
}

export default App;
