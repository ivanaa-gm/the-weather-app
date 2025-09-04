import { createContext, useContext, useState, useEffect } from "react";

const LocationsContext = createContext();

export const LocationsProvider = ({ children }) => {
  const [location, setLocation] = useState(null);

  return (
    <LocationsContext.Provider value={{ metrics: location, setMetrics: setLocation }}>
      {children}
    </LocationsContext.Provider>
  );
};

export const useLocation = () => useContext(LocationsContext);
