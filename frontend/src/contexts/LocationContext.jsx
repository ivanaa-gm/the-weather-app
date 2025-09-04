import { createContext, useContext, useState, useEffect } from "react";
import { getLocationByGeolocation, searchLocations, timezone } from "../utils/api";

const LocationsContext = createContext();

export const LocationsProvider = ({ children }) => {
  const [locationData, setLocationData] = useState({
    location: null,
    latitude: null,
    longitude: null,
    timezoneString: null,
    timezomeTerm: null,
    elevation: null
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (pos) => {
      const latitude = pos.coords.latitude;
      const longitude = pos.coords.longitude;

      try {
        const data = await getLocationByGeolocation(latitude, longitude);
        const timezoneData = await searchLocations(data.location);
        setLocationData({
          location: data.location,
          latitude,
          longitude,
          timezoneString: timezoneData[0].timezone
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
