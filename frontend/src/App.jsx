import Header from "./layout/Header";
import MainContent from "./layout/MainContent";
import { MetricsProvider } from "./contexts/MetricsContext.jsx";
import { LocationsProvider } from "./contexts/LocationContext.jsx";

function App() {
  return (
    <MetricsProvider>
      <LocationsProvider>
        <Header />
        <MainContent />
      </LocationsProvider>
    </MetricsProvider>
  );
}

export default App;
