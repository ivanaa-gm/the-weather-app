import WeatherCard from "./WeatherCard";
import { dailyWeatherFutureDays, hourlyWeatherFutureDays, astronomyData } from "../utils/api";
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
        <div className="ring-2 ring-white/30 ring-offset-2 shadow-2xl shadow-white/40" key={i}>
          <WeatherCard
            dailyWeather={Object.entries(dailyWeatherFutureDays)[i][1]}
            hourlyWeather={Object.entries(hourlyWeatherFutureDays)[i][1]}
            astronomyData={astronomyData[i]}
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
