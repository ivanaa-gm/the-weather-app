import { currentWeather, dailyWeather, hourlyWeather } from "../utils/api";
import { isDaytime, getWeatherIconAndDescription as getWeatherIconBackgroundAndDescription } from "../utils/utils";
import HourlyWeatherCard from "./HourlyWeatherCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Card = () => {
  const now = currentWeather.time;
  const today = dailyWeather.today;
  const isDay = isDaytime(now, today.sunrise, today.sunset);

  const iconAndTitle = getWeatherIconBackgroundAndDescription(
    // today.weather_code,
    0,
    // isDay
    true
  );
  const imgPath = `/weather-icons/${iconAndTitle.svg}.svg`;
  const bgPath = `/bg-gifs/${iconAndTitle.background}.gif`;

  return (
    <div
      className="h-full w-full overflow-y-auto bg-cover bg-center"
      style={{ backgroundImage: `url(${bgPath})` }}
    >
      <div className="flex flex-col items-center gap-6">
        <div className="flex flex-col items-center">
          <div className="translate-y-4">August 20th 2025</div>
          <img
            src={imgPath}
            alt={iconAndTitle.title}
            title={iconAndTitle.title}
            className="h-48"
          />
        </div>
        <h1 className="text-5xl font-poiret">
          {currentWeather.temperature_2m}°C
        </h1>
        <h1 className="text-3xl">{iconAndTitle.title}</h1>
        <div className="text-xl">
          Feels like {currentWeather.apparent_temperature}°C
        </div>
        <div className="flex flex-row gap-4">
          <div className="flex flex-row items-center">
            <img
              src="/weather-icons/drop.svg"
              alt="Humidity"
              className="h-10"
            />
            <p>{currentWeather.relative_humidity_2m}%</p>
          </div>
          <div className="flex flex-row items-center gap-1">
            <img
              src="/weather-icons/cloud.svg"
              alt="Cloud Cover"
              className="h-10"
            />
            <p>{currentWeather.cloud_cover}%</p>
          </div>
          <div className="flex flex-row items-center gap-1">
            <img
              src="/weather-icons/barometer.svg"
              alt="Cloud Cover"
              className="h-10"
            />
            <p>{currentWeather.surface_pressure} Pa</p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div>Precipitation</div>
          <div className="flex flex-row items-center">
            <img
              src="/weather-icons/raindrops.svg"
              alt="precipitation"
              className="h-10"
            />
            <p>{currentWeather.precipitation}mm</p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div>Wind</div>
          <div className="flex flex-row items-center">
            <img
              src="/weather-icons/dust-wind.svg"
              alt="Wind"
              className="h-10"
            />
            <p>
              {currentWeather.wind_speed_10m}m/s{" "}
              {currentWeather.wind_direction_10m}
            </p>
          </div>
        </div>
        <div className="flex flex-row">
          <div className="flex flex-row items-center">
            <img
              src="/weather-icons/thermometer-warmer.svg"
              alt="Max Temperature"
              className="h-10"
            />
            <p className="text-xl font-semibold font-poiret">
              {dailyWeather.today.temperature_2m_max}°C
            </p>
          </div>
          <div className="flex flex-row items-center">
            <img
              src="/weather-icons/thermometer-colder.svg"
              alt="Min Temperature"
              className="h-10"
            />
            <p className="text-xl font-semibold font-poiret">
              {dailyWeather.today.temperature_2m_min}°C
            </p>
          </div>
        </div>
      </div>
      <div className="flex overflow-x-auto">
        <ChevronLeft />
        {Object.entries(hourlyWeather.today).map(([time, data]) => (
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
          />
        ))}
        <ChevronRight />
      </div>
    </div>
  );
};

export default Card;
