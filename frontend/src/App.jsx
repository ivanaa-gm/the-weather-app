import Header from "./layout/Header";
import MainContent from "./layout/MainContent";
import { MetricsProvider } from "./contexts/MetricsContext.jsx";
import { LocationsProvider } from "./contexts/LocationContext.jsx";
import { useState } from "react";

function App() {
  const [openTab, setOpenTab] = useState(null);

  return (
    <MetricsProvider>
      <LocationsProvider>
        <Header openTab={openTab} setOpenTab={setOpenTab} />
        <MainContent
          openTab={openTab}
          setOpenTab={setOpenTab}
          isBlurred={openTab !== null}
        />
      </LocationsProvider>
    </MetricsProvider>
  );
}

export default App;
