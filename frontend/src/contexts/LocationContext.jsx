import { createContext, useContext, useState, useEffect } from "react";
import { getLocationByGeolocation, searchLocations } from "../utils/api";

const LocationsContext = createContext();

export const LocationsProvider = ({ children }) => {
  const [locationData, setLocationData] = useState({
    location: null,
    latitude: null,
    longitude: null,
    timezoneString: null,
    timezomeTerm: null,
    elevation: null,
    admin1: null,
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (pos) => {
      const latitude = pos.coords.latitude;
      const longitude = pos.coords.longitude;
      console.log(latitude);
      console.log(longitude);

      try {
        const data = await getLocationByGeolocation(latitude, longitude);
        if (!data || !data.location) {
          setLocationData({
            location: "unknown",
            latitude: 0,
            longitude: 0,
            timezoneString: "unknown",
            timezoneTerm: "unknown",
            elevation: "unknown",
            admin1: "unknown",
          });
          return;
        }
        const timezoneData = await searchLocations(data.location);
        if (!timezoneData || timezoneData.length === 0) {
          setLocationData({
            location: "unknown",
            latitude: 0,
            longitude: 0,
            timezoneString: "unknown",
            timezoneTerm: "unknown",
            elevation: "unknown",
            admin1: "unknown",
          });
          return;
        }

        setLocationData({
          location: data.location,
          latitude,
          longitude,
          timezoneString: timezoneData[0].timezone,
          admin1: timezoneData[0].admin1,
        });
      } catch (err) {
        setLocationData({
          location: "unknown",
          latitude: 0,
          longitude: 0,
          timezoneString: "unknown",
          timezoneTerm: "unknown",
          elevation: "unknown",
          admin1: "unknown",
        });
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
