import WeatherCard from "./WeatherCard";
import { dailyWeatherFutureDays, hourlyWeatherFutureDays } from "../utils/api";
import { getWeatherIconBackgroundAndDescription } from "../utils/utils";

const ForecastGrid = () => {
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
        <div key={i}>
          <WeatherCard
            dailyWeather={Object.entries(dailyWeatherFutureDays)[i][1]}
            hourlyWeather={Object.entries(hourlyWeatherFutureDays)[i][1]}
            icon={iconsTitlesBackgrouds[i].svg}
            title={iconsTitlesBackgrouds[i].title}
            background={iconsTitlesBackgrouds[i].background}
          />
        </div>
      ))}
    </div>
  );
};

export default ForecastGrid;
