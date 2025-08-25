import { createContext, useContext, useState, useEffect } from "react";

const MetricsContext = createContext();

export const MetricsProvider = ({ children }) => {
  const [metrics, setMetrics] = useState(() => {

    const stored = localStorage.getItem("metrics");
    return stored
      ? JSON.parse(stored)
      : { temperature: "C", precipitation: "mm", windSpeed: "kmh" };
  });

  useEffect(() => {
    localStorage.setItem("metrics", JSON.stringify(metrics));
  }, [metrics]);

  return (
    <MetricsContext.Provider value={{ metrics, setMetrics }}>
      {children}
    </MetricsContext.Provider>
  );
};

export const useMetrics = () => useContext(MetricsContext);
