import TodayWeatherCard from "./weather-cards/TodayWeatherCard";
import {
  getWeatherIconBackgroundAndDescription,
  isDaytime,
} from "../utils/utils";
import { CircleLoader } from "react-spinners";

const TodayCard = ({
  currentWeather = null,
  dailyWeatherToday = null,
  hourlyWeatherToday = null,
  astrologyData = null
}) => {
  if (!currentWeather || !dailyWeatherToday || !hourlyWeatherToday || !astrologyData) {
    return (
      <div className="flex h-full w-full items-center justify-center">
        <CircleLoader color="#2cceff" size={70} />
      </div>
    );
  }

  const now = currentWeather.time;
  const isDay = isDaytime(
    now,
    dailyWeatherToday.sunrise,
    dailyWeatherToday.sunset
  );

  const iconTitleBackground = getWeatherIconBackgroundAndDescription(
    currentWeather.weather_code,
    // 51,
    isDay
    // true
  );

  return (
    <div className="h-screen w-full overflow-hidden">
      <TodayWeatherCard
        currentWeather={currentWeather}
        dailyWeather={dailyWeatherToday}
        hourlyWeather={hourlyWeatherToday}
        astrologyData={astrologyData}
        icon={iconTitleBackground.svg}
        code={iconTitleBackground.code}
        background={iconTitleBackground.background}
        isToday={true}
      />
    </div>
  );
};

export default TodayCard;
