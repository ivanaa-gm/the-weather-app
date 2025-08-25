import TodayWeatherCard from "./TodayWeatherCard";
import {
  currentWeather,
  dailyWeatherToday,
  hourlyWeatherToday,
  timezone,
  latitude,
  longitude,
  elevation,
} from "../utils/api";
import {
  getWeatherIconBackgroundAndDescription,
  isDaytime,
} from "../utils/utils";

const TodayCard = () => {
  const now = currentWeather.time;
  const isDay = isDaytime(
    now,
    dailyWeatherToday.sunrise,
    dailyWeatherToday.sunset
  );

  const iconTitleBackground = getWeatherIconBackgroundAndDescription(
    currentWeather.weather_code,
    // 0,
    isDay
    // true
  );

  return (
    <div className="h-screen w-full overflow-hidden">
      <TodayWeatherCard
        currentWeather={currentWeather}
        dailyWeather={dailyWeatherToday}
        hourlyWeather={hourlyWeatherToday}
        icon={iconTitleBackground.svg}
        code={iconTitleBackground.code}
        background={iconTitleBackground.background}
        isToday={true}
      />
    </div>
  );
};

export default TodayCard;
