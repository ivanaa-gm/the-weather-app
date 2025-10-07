import { createContext, useContext, useState, useEffect } from "react";
import { getLocationByGeolocation, searchLocations } from "../utils/api";

const LocationsContext = createContext();

export const LocationsProvider = ({ children }) => {
  const [locationData, setLocationData] = useState({
    location: null,
    latitude: null,
    longitude: null,
    timezoneString: null,
    timezoneTerm: null,
    elevation: null,
    admin1: null,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const latitude = pos.coords.latitude;
        const longitude = pos.coords.longitude;

        try {
          const data = await getLocationByGeolocation(latitude, longitude);
          if (!data || !data.location) throw new Error("No location data");

          const timezoneData = await searchLocations(data.location);
          if (!timezoneData || timezoneData.length === 0)
            throw new Error("No timezone data");

          setLocationData({
            location: data.location,
            latitude,
            longitude,
            timezoneString: timezoneData[0].timezone,
            admin1: timezoneData[0].admin1,
          });
        } catch (err) {
          console.error("Failed to fetch location:", err);
          setLocationData({
            location: "unknown",
            latitude: 0,
            longitude: 0,
            timezoneString: "unknown",
            timezoneTerm: "unknown",
            elevation: "unknown",
            admin1: "unknown",
          });
        } finally {
          setLoading(false);
        }
      },
      (error) => {
        console.error("Geolocation error:", error);
        setLocationData({
          location: "unknown",
          latitude: 0,
          longitude: 0,
          timezoneString: "unknown",
          timezoneTerm: "unknown",
          elevation: "unknown",
          admin1: "unknown",
        });
        setLoading(false);
      }
    );
  }, []);

  return (
    <LocationsContext.Provider value={{ locationData, setLocationData, loading }}>
      {children}
    </LocationsContext.Provider>
  );
};

export const useLocation = () => useContext(LocationsContext);
