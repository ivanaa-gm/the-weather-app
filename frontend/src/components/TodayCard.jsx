import TodayWeatherCard from "./weather-cards/TodayWeatherCard";
import {
  astronomyData,
  currentWeather,
  dailyWeatherToday,
  hourlyWeatherToday,
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
    // currentWeather.weather_code,
    51,
    // isDay
    true
  );

  return (
    <div className="h-screen w-full overflow-hidden">
      <TodayWeatherCard
        currentWeather={currentWeather}
        dailyWeather={dailyWeatherToday}
        hourlyWeather={hourlyWeatherToday}
        astronomyData={astronomyData[0]}
        icon={iconTitleBackground.svg}
        code={iconTitleBackground.code}
        background={iconTitleBackground.background}
        isToday={true}
      />
    </div>
  );
};

export default TodayCard;
