import { createContext, useContext, useState, useEffect } from "react";
import { elevation, timezone } from "../utils/api";

const LocationsContext = createContext();

export const LocationsProvider = ({ children }) => {
  const [locationData, setLocationData] = useState({
    location: null,
    latitude: null,
    longitude: null,
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (pos) => {
      const latitude = pos.coords.latitude;
      const longitude = pos.coords.longitude;

      try {
        const res = await fetch(
          `http://localhost:3000/locations/geolocation?lat=${latitude}&long=${longitude}`
        );
        const data = await res.json();

        setLocationData({
          location: data.location,
          latitude,
          longitude,
        });
      } catch (err) {
        console.error("Failed to fetch location:", err);
      }
    });
  }, []);

  return (
    <LocationsContext.Provider value={{ locationData, setLocationData }}>
      {children}
    </LocationsContext.Provider>
  );
};

export const useLocation = () => useContext(LocationsContext);
