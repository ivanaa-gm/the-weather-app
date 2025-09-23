import TodayCard from "../components/TodayCard";
import ForecastGrid from "../components/ForecastGrid";
import MobileCarousel from "../components/MobileCarousel";
import { getWeather, getCurrentWeather, getAstrology } from "../utils/api";
import { useMetrics } from "../contexts/MetricsContext";
import { useState, useEffect } from "react";
import { useLocation } from "../contexts/LocationContext";

const MainContent = ({ openTab, setOpenTab, isBlurred }) => {
  const [weather, setWeather] = useState(null);
  const [astrology, setAstrology] = useState(null);
  const [currentWeather, setCurrentWeather] = useState(null);

  const { locationData, setLocationData } = useLocation();
  const { metrics } = useMetrics();

  const locationUnavailable = locationData.location === "unknown" || locationData.location === null;

  useEffect(() => {
    if (locationUnavailable) return;

    const fetchWeather = async () => {
      if (locationUnavailable) return;

      try {
        const data = await getWeather(
          locationData.latitude,
          locationData.longitude,
          locationData.timezoneString,
          metrics.windSpeed,
          metrics.temperature === "C" ? "celsius" : "fahrenheit",
          metrics.precipitation
        );

        if (data) {
          setWeather(data);
          setCurrentWeather(data.currentWeather);

          setLocationData({
            ...locationData,
            timezoneTerm: data.timezone,
            elevation: data.elevation + "m",
          });
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetchWeather();
  }, [
    locationData.latitude,
    locationData.longitude,
    locationData.timezoneString,
    metrics,
    locationUnavailable,
  ]);

  // current weather every 30 mins
  useEffect(() => {
    if (locationUnavailable) return;

    const fetchCurrent = async () => {
      if (locationUnavailable) return;

      try {
        const data = await getCurrentWeather(
          locationData.latitude,
          locationData.longitude,
          locationData.timezoneString,
          metrics.windSpeed,
          metrics.temperature === "C" ? "celsius" : "fahrenheit",
          metrics.precipitation
        );
        setCurrentWeather(data.currentWeather || data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchCurrent();
    const interval = setInterval(fetchCurrent, 30 * 60 * 1000);

    return () => clearInterval(interval);
  }, [
    locationData.latitude,
    locationData.longitude,
    locationData.timezoneString,
    metrics,
    locationUnavailable,
  ]);

  useEffect(() => {
    if (locationUnavailable) return;

    const fetchAstrology = async () => {
      if (locationUnavailable) return;

      try {
        const data = await getAstrology(
          locationData.latitude,
          locationData.longitude
        );

        if (data) {
          setAstrology(data);
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetchAstrology();
  }, [locationData.latitude, locationData.longitude, locationUnavailable]);

  if (locationUnavailable) {
    return (
      <div className="flex flex-col items-center justify-center h-full text-gray-700 text-center p-4">
        <img src="error.gif" alt="Error" className="mb-4 w-16 h-16" />
        <div>
          Unable to catch your location. <br />
          Please use the search bar to look up the city you want to see the
          weather for.
        </div>
      </div>
    );
  }

  return (
    <div
      className={`transition h-full duration-400 ${isBlurred ? "blur-sm" : ""}`}
      onClick={() => setOpenTab(null)}
    >
      <div className="hidden md:grid grid-cols-3 h-full w-full">
        <div className="col-span-1 h-full">
          <TodayCard
            dailyWeatherToday={weather?.dailyWeatherToday || null}
            hourlyWeatherToday={weather?.hourlyWeatherToday || null}
            currentWeather={currentWeather || weather?.currentWeather || null}
            astrologyData={astrology?.[0] || null}
          />
        </div>
        <div className="col-span-2 h-full">
          <ForecastGrid
            dailyWeatherFutureDays={weather?.dailyWeatherFutureDays || null}
            hourlyWeatherFutureDays={weather?.hourlyWeatherFutureDays || null}
            astrologyData={astrology?.slice(1) || []}
            now={weather?.currentWeather.time}
            sunrise={weather?.dailyWeatherToday.sunrise}
            sunset={weather?.dailyWeatherToday.sunset}
          />
        </div>
      </div>

      <div className="md:hidden h-full w-full">
        <MobileCarousel
          currentWeather={currentWeather || weather?.currentWeather || null}
          dailyWeatherToday={weather?.dailyWeatherToday || null}
          hourlyWeatherToday={weather?.hourlyWeatherToday || null}
          dailyWeatherFutureDays={weather?.dailyWeatherFutureDays || null}
          hourlyWeatherFutureDays={weather?.hourlyWeatherFutureDays || null}
          astrologyData={astrology}
          openTab={openTab}
          locationUnavailable={locationUnavailable}
        />
      </div>
    </div>
  );
};

export default MainContent;
