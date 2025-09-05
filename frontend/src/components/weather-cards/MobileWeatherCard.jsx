import {
  formatDate,
  getWindDirection,
  filterFutureHours,
  extractTime,
  secondsToHours,
} from "../../utils/utils";
import HourlyWeatherCard from "./HourlyWeatherCard";
import { useTranslation } from "react-i18next";
import { useMetrics } from "../../contexts/MetricsContext";
import PlaceInformation from "../PlaceInformation";

const MobileWeatherCard = ({
  isToday = false,
  currentWeather = null,
  dailyWeather = null,
  hourlyWeather = null,
  astrologyData = null,
  icon = "",
  code = 0,
  background = "",
}) => {
  const { t, i18n } = useTranslation();
  const { metrics } = useMetrics();

  const imgPath = `/weather-icons/${icon}.svg`;
  const bgPath = `/bg-gifs/${background}.gif`;

  const { weekday, day, month } = formatDate(dailyWeather.date);
  const windDirection = isToday
    ? getWindDirection(currentWeather.wind_direction_10m)
    : getWindDirection(dailyWeather.wind_speed_10m_max);
  const daylight = secondsToHours(dailyWeather.daylight_duration);
  const futureHourlyWeather = isToday ? filterFutureHours(hourlyWeather) : null;

  const astrologyBg = `bg-gifs/astrology.gif`;
  const moonPhaseImg = `/moon-phases/${astrologyData.moonPhase}.png`;
  const zodiacSignImg = `/zodiac-signs/${astrologyData.zodiacSign}.png`;

  return (
    <div
      className="h-full w-screen overflow-y-auto bg-cover bg-center"
      style={{ backgroundImage: `url(${bgPath})` }}
    >
      <div className="flex flex-col items-center w-full">
        <div className="flex flex-row w-full justify-between items-start">
          <div className="pointer-events-none opacity-0">
            <PlaceInformation />
          </div>
          <div className="flex justify-center">
            <div className="flex flex-col items-center">
              <div className="mt-6 text-white">
                {t(`days.${weekday}`)}, {day} {t(`months.${month}`)}
              </div>
              <img
                src={imgPath}
                alt={t(`weatherCodes.${code}`)}
                title={t(`weatherCodes.${code}`)}
                className="h-60 -translate-y-6"
              />
            </div>
          </div>
          <div>
            <PlaceInformation />
          </div>
        </div>
        <div className="backdrop-blur-md border-2 border-black/10 p-4 m-2 rounded-md flex flex-col items-center -translate-y-10 bg-white/30">
          {isToday ? (
            <h1 className="text-5xl font-semibold font-poiret">
              {currentWeather.temperature_2m}°{metrics.temperature}
            </h1>
          ) : (
            <div className="flex text-4xl flex-row my-4">
              <div className="flex flex-row items-center">
                <img
                  src="/weather-icons/thermometer-warmer.svg"
                  alt="Max Temperature"
                  className="h-10"
                />
                <p className="font-semibold font-poiret text-[#7d0f0f]">
                  {dailyWeather.temperature_2m_max}°{metrics.temperature}
                </p>
              </div>
              <div className="flex flex-row items-center">
                <img
                  src="/weather-icons/thermometer-colder.svg"
                  alt="Min Temperature"
                  className="h-10"
                />
                <p className="font-semibold font-poiret text-[#093F58]">
                  {dailyWeather.temperature_2m_min}°{metrics.temperature}
                </p>
              </div>
            </div>
          )}
          <h1 className="text-3xl text-center font-bold">
            {t(`weatherCodes.${code}`)}
          </h1>
          {isToday && (
            <div className="text-xl text-black/60">
              {t("feelsLike")} {currentWeather.apparent_temperature}°
              {metrics.temperature}
            </div>
          )}
          {isToday && (
            <div className="flex flex-row gap-4 text-xl mt-4">
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
          )}
          <div className="flex flex-col text-xl items-center mt-4">
            <div className="flex flex-col items-center">
              <div>{t("precipitation")}</div>
              <div className="flex flex-row items-center text-xl">
                <img
                  src="/weather-icons/raindrops.svg"
                  alt="precipitation"
                  className="h-10"
                />
                {isToday ? (
                  <p className="">
                    {currentWeather.precipitation}{" "}
                    {t(`${metrics.precipitation}`)}
                  </p>
                ) : (
                  <p>
                    {dailyWeather.precipitation_sum}{" "}
                    {t(`${metrics.precipitation}`)}
                  </p>
                )}
              </div>
            </div>
            <div className="flex flex-row items-center">
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
          <div className="flex flex-col text-xl items-center mt-4">
            <div>{t("wind")}</div>
            <div className="flex flex-row items-center">
              <img
                src="/weather-icons/dust-wind.svg"
                alt="Wind"
                className="h-10"
              />
              {isToday ? (
                <p>
                  {currentWeather.wind_speed_10m} {t(`${metrics.windSpeed}`)}{" "}
                  {t(`directions.${windDirection}`)}
                </p>
              ) : (
                <p className="-translate-y-1">
                  {dailyWeather.wind_speed_10m_max} {t(`${metrics.windSpeed}`)}{" "}
                  {t(`directions.${windDirection}`)}
                </p>
              )}
            </div>
          </div>
          {isToday && (
            <div className="flex flex-row mt-4">
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
          )}
          <div className="flex flex-row my-6 gap-2">
            <div className="flex flex-col w-24 items-center border-x p-2 border-white/40">
              <img
                src="/weather-icons/sunrise.svg"
                alt="Sunrise"
                className="h-10"
              />
              <p className="text-xl font-semibold font-poiret">
                {extractTime(dailyWeather.sunrise)}
              </p>
            </div>
            <div className="flex flex-col w-24 items-center border-r p-2 border-white/40">
              <img
                src="/weather-icons/sunset.svg"
                alt="Sunset"
                className="h-10"
              />
              <p className="text-xl font-semibold font-poiret">
                {extractTime(dailyWeather.sunset)}
              </p>
            </div>
            <div className="flex flex-col w-24 items-center border-r p-2 border-white/40">
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
          </div>
          <div
            className="flex flex-row my-6 rounded-2xl p-2 ring-1 ring-white/20 ring-offset-0"
            style={{ backgroundImage: `url(${astrologyBg})` }}
          >
            <div className="flex flex-col justify-center">
              <img src={moonPhaseImg} alt="Moon Phase" className="h-14" />
            </div>
            <div className="flex flex-col justify-center m-4 text-white/70 font-poiret text-lg">
              <p className="font-semibold text-start">
                {t(`moonPhases.${astrologyData.moonPhase}`)}
              </p>
              <p className="font-semibold text-end">
                {t(`zodiacSigns.${astrologyData.zodiacSign}`)}
              </p>
            </div>
            <img
              src={zodiacSignImg}
              alt="Star Sign"
              className="h-24 flex flex-col items-center"
            />
          </div>
        </div>
      </div>
      <div className="flex overflow-x-auto my-4">
        {isToday
          ? Object.entries(futureHourlyWeather).map(([time, data]) => (
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
            ))
          : Object.entries(hourlyWeather).map(([time, data]) => (
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
      </div>
    </div>
  );
};

export default MobileWeatherCard;
