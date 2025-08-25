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
import { useTranslation } from "react-i18next";
import { useMetrics } from "../contexts/MetricsContext";

const TodayWeatherCard = ({
  currentWeather = null,
  dailyWeather = null,
  hourlyWeather = null,
  icon = "",
  code = 0,
  background = "",
  isToday = false,
}) => {
  const { t, i18n } = useTranslation();
  const { metrics } = useMetrics();

  if (!dailyWeather || !hourlyWeather || (isToday && !currentWeather)) {
    return (
      <div className="flex h-full w-full items-center justify-center">
        <CircleLoader color="#2cceff" size={70} />
      </div>
    );
  }

  const imgPath = `/weather-icons/${icon}.svg`;
  const bgPath = `/bg-gifs/${background}.gif`;

  const { weekday, day, month } = formatDate(dailyWeather.date);
  const windDirection = getWindDirection(currentWeather.wind_direction_10m);
  const daylight = secondsToHours(dailyWeather.daylight_duration);
  const futureHourlyWeather = filterFutureHours(hourlyWeather);

  return (
    <div
      className="h-full w-full overflow-y-auto bg-cover bg-center border-4 border-transparent shadow-lg"
      style={{ backgroundImage: `url(${bgPath})` }}
    >
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center">
          <div className="mt-4">
            {t(`days.${weekday}`)}, {day} {t(`months.${month}`)}
          </div>
          <img
            src={imgPath}
            alt={t(`weatherCodes.${code}`)}
            title={t(`weatherCodes.${code}`)}
            className="h-60 -translate-y-6"
          />
        </div>
        <h1 className="text-5xl font-semibold font-poiret -translate-y-10">
          {currentWeather.temperature_2m}°{metrics.temperature}
        </h1>
        <h1 className="text-3xl -translate-y-6">{t(`weatherCodes.${code}`)}</h1>
        <div className="text-xl text-black/60 -translate-y-6">
          {t("feelsLike")} {currentWeather.apparent_temperature}°{metrics.temperature}
        </div>
        <div className="flex flex-row gap-4 text-xl -translate-y-6">
          <div className="flex flex-row items-center">
            <img
              src="/weather-icons/drop.svg"
              alt="Humidity"
              className="h-12"
            />
            <p>{currentWeather.relative_humidity_2m}%</p>
          </div>
          <div className="flex flex-row items-center gap-1">
            <img
              src="/weather-icons/cloud.svg"
              alt="Cloud Cover"
              className="h-12"
            />
            <p>{currentWeather.cloud_cover}%</p>
          </div>
          <div className="flex flex-row items-center gap-1">
            <img
              src="/weather-icons/barometer.svg"
              alt="Pressure"
              className="h-10"
            />
            <p>{currentWeather.surface_pressure} Pa</p>
          </div>
        </div>
        <div className="flex flex-col text-xl items-center -translate-y-2">
          <div className="flex flex-col items-center">
            <div>{t("precipitation")}</div>
            <div className="flex flex-row items-center text-xl -translate-x-2">
              <img
                src="/weather-icons/raindrops.svg"
                alt="precipitation"
                className="h-10"
              />
              <p className="">
                {currentWeather.precipitation} {" "}
                {t(`${metrics.precipitation}`)}
              </p>
            </div>
          </div>
          <div className="flex flex-row items-center -translate-y-2">
            <img
              src="/weather-icons/umbrella.svg"
              alt="precipitation"
              className="h-8"
            />
            <div className="flex flex-row gap-2 text-lg text-black/80">
              <div>{t("chanceOfRain")}:</div>
              <p>{dailyWeather.precipitation_probability_max}%</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col text-xl items-center">
          <div>{t("wind")}</div>
          <div className="flex flex-row items-center -translate-x-2">
            <img
              src="/weather-icons/dust-wind.svg"
              alt="Wind"
              className="h-10"
            />
            <p>
              {currentWeather.wind_speed_10m} {t(`${metrics.windSpeed}`)}{" "}
              {t(`directions.${windDirection}`)}
            </p>
          </div>
        </div>
        <div className="flex flex-row my-4">
          <div className="flex flex-row items-center">
            <img
              src="/weather-icons/thermometer-warmer.svg"
              alt="Max Temperature"
              className="h-10"
            />
            <p className="text-xl font-semibold font-poiret text-[#7d0f0f]">
              {dailyWeather.temperature_2m_max}°{metrics.temperature}
            </p>
          </div>
          <div className="flex flex-row items-center">
            <img
              src="/weather-icons/thermometer-colder.svg"
              alt="Min Temperature"
              className="h-10"
            />
            <p className="text-xl font-semibold font-poiret text-[#093F58]">
              {dailyWeather.temperature_2m_min}°{metrics.temperature}
            </p>
          </div>
        </div>
        <div className="flex flex-row my-4">
          <div className="flex flex-col items-center w-28 border-x p-2 border-white/40">
            <img
              src="/weather-icons/sunrise.svg"
              alt="Sunrise"
              className="h-10"
            />
            <p className="text-xl font-semibold font-poiret">
              {extractTime(dailyWeather.sunrise)}
            </p>
          </div>
          <div className="flex flex-col items-center w-28 border-r p-2 border-white/40">
            <img
              src="/weather-icons/sunset.svg"
              alt="Sunset"
              className="h-10"
            />
            <p className="text-xl font-semibold font-poiret">
              {extractTime(dailyWeather.sunset)}
            </p>
          </div>
          <div className="flex flex-col items-center w-28 border-r p-2 border-white/40">
            <img
              src="/weather-icons/horizon.svg"
              alt="Daylight"
              className="h-10"
            />
            <p className="text-xl font-semibold font-poiret">
              {daylight.hours}
              {t("h")} {daylight.minutes}
              {t("m")}
            </p>
          </div>
          <div className="flex flex-col items-center w-28 border-r p-2 border-white/40">
            <img
              src="/weather-icons/starry-night.svg"
              alt="Moon Phase"
              className="h-10"
            />
            <p className="text-xl font-semibold font-poiret">
              {t(`moonPhases.fullMoon`)}
            </p>
          </div>
        </div>
      </div>
      <div className="flex overflow-x-auto mt-4">
        <ChevronLeft />
        {Object.entries(futureHourlyWeather).map(([time, data]) => (
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
            isToday={true}
          />
        ))}
        <ChevronRight />
      </div>
    </div>
  );
};

export default TodayWeatherCard;
