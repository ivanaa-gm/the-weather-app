import {
  formatDate,
  getWindDirection,
  filterFutureHours,
  extractTime,
  secondsToHours,
} from "../utils/utils";
import HourlyWeatherCard from "./HourlyWeatherCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { CircleLoader } from "react-spinners";

const WeatherCard = ({
  dailyWeather = null,
  hourlyWeather = null,
  icon = "",
  title = "",
  background = "",
}) => {
  if (!dailyWeather || !hourlyWeather) {
    return (
      <div className="flex h-full w-full items-center justify-center">
        <CircleLoader color="#2cceff" size={70} />
      </div>
    );
  }

  const imgPath = `/weather-icons/${icon}.svg`;
  const bgPath = `/bg-gifs/${background}.gif`;

  const date = formatDate(dailyWeather.date);
  const windDirection = getWindDirection(dailyWeather.wind_speed_10m_max);

  return (
    <div
      className="h-full w-full overflow-y-auto bg-cover bg-center border-4 border-transparent shadow-lg"
      style={{ backgroundImage: `url(${bgPath})` }}
    >
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center">
          <div className="mt-2">{date}</div>
          <img src={imgPath} alt={title} title={title} className="-translate-y-4 h-36" />
        </div>
        <div className="flex flex-row -translate-y-8">
          <div className="flex flex-row items-center">
            <img
              src="/weather-icons/thermometer-warmer.svg"
              alt="Max Temperature"
              className="h-10"
            />
            <p className="font-bold font-poiret text-[#7d0f0f]">
              {dailyWeather.temperature_2m_max}°C
            </p>
          </div>
          <div className="flex flex-row items-center">
            <img
              src="/weather-icons/thermometer-colder.svg"
              alt="Min Temperature"
              className="h-10"
            />
            <p className="font-bold font-poiret text-[#093F58]">
              {dailyWeather.temperature_2m_min}°C
            </p>
          </div>
        </div>
        <h1 className="text-xl -translate-y-8">{title}</h1>
        <div className="flex flex-col items-center -translate-y-4">
          <div className="flex flex-col items-center">
            <div>Precipitation</div>
            <div className="flex flex-row items-center font-bold -translate-x-1">
              <img
              src="/weather-icons/raindrops.svg"
              alt="precipitation"
              className="h-8"
            />
              <p>{dailyWeather.precipitation_sum}mm</p>
            </div>
          </div>
          <div className="flex flex-row items-center -translate-y-1">
            <img
              src="/weather-icons/umbrella.svg"
              alt="Chance of Rain"
              className="h-8"
            />
            <div className="flex flex-row gap-2 text-sm text-black/80">
              <div>Chance of Rain:</div>
              <p>{dailyWeather.precipitation_probability_max}%</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center mt-2 -translate-y-4">
          <div>Wind</div>
          <div className="flex flex-row items-center -translate-x-2">
            <img
              src="/weather-icons/dust-wind.svg"
              alt="Wind"
              className="h-10"
            />
            <p className="-translate-y-1">
              {dailyWeather.wind_speed_10m_max}m/s {windDirection}
            </p>
          </div>
        </div>
        <div className="flex flex-row mt-4 -translate-y-4">
          <div className="flex flex-col items-center w-20 border-x p-2 border-white/40">
            <img
              src="/weather-icons/sunrise.svg"
              alt="Sunrise"
              className="h-10"
            />
            <p className="font-semibold font-poiret">
              {extractTime(dailyWeather.sunrise)}
            </p>
          </div>
          <div className="flex flex-col items-center w-20 border-r p-2 border-white/40">
            <img
              src="/weather-icons/sunset.svg"
              alt="Sunset"
              className="h-10"
            />
            <p className="font-semibold font-poiret">
              {extractTime(dailyWeather.sunset)}
            </p>
          </div>
          <div className="flex flex-col items-center w-20 border-r p-2 border-white/40">
            <img
              src="/weather-icons/horizon.svg"
              alt="Daylight"
              className="h-10"
            />
            <p className="font-semibold font-poiret">
              {secondsToHours(dailyWeather.daylight_duration)}
            </p>
          </div>
          <div className="flex flex-col items-center w-20 border-r p-2 border-white/40">
            <img
              src="/weather-icons/starry-night.svg"
              alt="Moon Phase"
              className="h-10"
            />
            <p className="font-semibold font-poiret">Crescent</p>
          </div>
        </div>
      </div>
      <div className="flex overflow-x-auto mt-4 -translate-y-2">
        <ChevronLeft />
        {Object.entries(hourlyWeather).map(([time, data]) => (
          <HourlyWeatherCard
            key={time}
            time={time}
            temperature={data.temperature_2m}
            apparentTemperature={data.apparent_temperature}
            precipitation={data.precipitation}
            precipitationProbability={data.precipitation_probability}
            weatherCode={data.weather_code}
            UVindex={data.uv_index}
            windSpeed={data.wind_speed_10m}
            windDirection={data.wind_direction_10m}
            cloudCover={data.cloud_cover}
            isToday={false}
          />
        ))}
        <ChevronRight />
      </div>
    </div>
  );
};

export default WeatherCard;
