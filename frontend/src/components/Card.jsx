import { currentWeather, hourlyWeather, dailyWeather } from "../utils/api";
import { isDaytime, getWeatherIconAndDescription } from "../utils/utils";

const Card = () => {
    console.log(dailyWeather)
  const now = currentWeather.time;
  const today = dailyWeather.today;
  const isDay = isDaytime(now, today.sunrise, today.sunset);

  const iconAndTitle = getWeatherIconAndDescription(
    today.weather_code,
    // isDay
    true
  );
  const imgPath = `/weather-icons/${iconAndTitle.key}.svg`;

  return (
    <div className="border border-black">
      <img src={imgPath} alt={iconAndTitle.title} title={iconAndTitle.title} />
      <h1>{iconAndTitle.title}</h1>
    </div>
  );
};

export default Card;
