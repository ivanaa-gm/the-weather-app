import "./App.css";
import Header from "./layout/Header";
import MainContent from "./layout/MainContent";
import { MetricsProvider } from "./contexts/MetricsContext.jsx";

function App() {
  return (
    <MetricsProvider>
      <Header />
      <MainContent />
    </MetricsProvider>
  );
}

export default App;
