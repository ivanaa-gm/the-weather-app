import WeatherCard from "./weather-cards/WeatherCard";
import { getWeatherIconBackgroundAndDescription } from "../utils/utils";
import { CircleLoader } from "react-spinners";

const ForecastGrid = ({
  dailyWeatherFutureDays = null,
  hourlyWeatherFutureDays = null,
  astrologyData = null,
}) => {
  if (!dailyWeatherFutureDays || !hourlyWeatherFutureDays) {
    return (
      <div className="h-screen w-full grid grid-cols-3 grid-rows-2">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            className="ring-4 ring-white/10 ring-offset-2 shadow-2xl shadow-white/40"
            key={i}
          >
            <div className="flex h-full w-full items-center justify-center">
              <CircleLoader color="#2cceff" size={70} />
            </div>
          </div>
        ))}
      </div>
    );
  }

  const iconsTitlesBackgrouds = [];
  Object.values(dailyWeatherFutureDays)
    .map((day) => day.weather_code)
    .forEach((code) => {
      const details = getWeatherIconBackgroundAndDescription(code, true);
      iconsTitlesBackgrouds.push(details);
    });

  return (
    <div className="h-screen w-full grid grid-cols-3 grid-rows-2">
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          className="ring-4 ring-white/10 ring-offset-2 shadow-2xl shadow-white/40"
          key={i}
        >
          <WeatherCard
            dailyWeather={Object.entries(dailyWeatherFutureDays)[i][1]}
            hourlyWeather={Object.entries(hourlyWeatherFutureDays)[i][1]}
            astrologyData={astrologyData[i]}
            icon={iconsTitlesBackgrouds[i].svg}
            code={iconsTitlesBackgrouds[i].code}
            background={iconsTitlesBackgrouds[i].background}
          />
        </div>
      ))}
    </div>
  );
};

export default ForecastGrid;
