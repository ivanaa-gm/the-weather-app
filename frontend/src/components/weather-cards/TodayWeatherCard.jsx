import {
  formatDate,
  getWindDirection,
  filterFutureHours,
  extractTime,
  secondsToHours,
} from "../../utils/utils";
import HourlyWeatherCard from "./HourlyWeatherCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { CircleLoader } from "react-spinners";
import { useTranslation } from "react-i18next";
import { useMetrics } from "../../contexts/MetricsContext";
import PlaceInformation from "../PlaceInformation";

const TodayWeatherCard = ({
  currentWeather = null,
  dailyWeather = null,
  hourlyWeather = null,
  astronomyData = null,
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

  const mainWeatherImg = `/weather-icons/${icon}.svg`;
  const bgPath = `/bg-gifs/${background}.gif`;

  const { weekday, day, month } = formatDate(dailyWeather.date);
  const windDirection = getWindDirection(currentWeather.wind_direction_10m);
  const daylight = secondsToHours(dailyWeather.daylight_duration);
  const futureHourlyWeather = filterFutureHours(hourlyWeather);

  const astrologyBg = `bg-gifs/astrology.gif`;
  const moonPhaseImg = `/moon-phases/${astronomyData.moonPhase}.png`;
  const zodiacSignImg = `/zodiac-signs/${astronomyData.zodiacSign}.png`;

  return (
    <div
      className="h-full w-full overflow-y-auto bg-cover bg-center border-4 border-transparent shadow-lg"
      style={{ backgroundImage: `url(${bgPath})` }}
    >
      <div className="flex flex-col items-center w-full">
        <div className="flex flex-row w-full justify-between items-start">
          <div className="pointer-events-none opacity-0">
            <PlaceInformation />
          </div>
          <div className="flex justify-center">
            <div className="flex flex-col items-center">
              <div className="mt-6">
                {t(`days.${weekday}`)}, {day} {t(`months.${month}`)}
              </div>
              <img
                src={mainWeatherImg}
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

        <div className="backdrop-blur-md border-2 border-black/10 p-4 w-[80%] rounded-md flex flex-col items-center -translate-y-4 bg-white/30">
          <h1 className="text-5xl font-semibold font-poiret">
            {currentWeather.temperature_2m}°{metrics.temperature}
          </h1>
          <h1 className="text-3xl text-center font-bold">
            {t(`weatherCodes.${code}`)}
          </h1>
          <div className="text-xl text-black/60">
            {t("feelsLike")} {currentWeather.apparent_temperature}°
            {metrics.temperature}
          </div>
          <div className="flex flex-row gap-4 text-xl mt-4">
            <div className="flex flex-row items-center">
              <img
                src="/weather-icons/drop.svg"
                alt="Humidity"
                title="Humidity"
                className="h-12"
              />
              <p>{currentWeather.relative_humidity_2m}%</p>
            </div>
            <div className="flex flex-row items-center gap-1">
              <img
                src="/weather-icons/cloud.svg"
                alt="Cloud Cover"
                title="Cloud Cover"
                className="h-12"
              />
              <p>{currentWeather.cloud_cover}%</p>
            </div>
            <div className="flex flex-row items-center gap-1">
              <img
                src="/weather-icons/barometer.svg"
                alt="Pressure"
                title="Pressure"
                className="h-10"
              />
              <p>{currentWeather.surface_pressure} Pa</p>
            </div>
          </div>
          <div className="flex flex-col text-xl items-center mt-4">
            <div className="flex flex-col items-center">
              <div>{t("precipitation")}</div>
              <div className="flex flex-row items-center text-xl -translate-x-2">
                <img
                  src="/weather-icons/raindrops.svg"
                  alt="Precipitation"
                  title="Precipitation"
                  className="h-10"
                />
                <p className="">
                  {currentWeather.precipitation} {t(`${metrics.precipitation}`)}
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center -translate-y-2">
              <img
                src="/weather-icons/umbrella.svg"
                alt="Chance of Rain"
                title="Chance of Rain"
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
                title="Wind"
                className="h-10"
              />
              <p>
                {currentWeather.wind_speed_10m} {t(`${metrics.windSpeed}`)}{" "}
                {t(`directions.${windDirection}`)}
              </p>
            </div>
          </div>
          <div className="flex flex-row my-4 text-2xl font-bold font-poiret">
            <div className="flex flex-row items-center">
              <img
                src="/weather-icons/thermometer-warmer.svg"
                alt="Max Temperature"
                title="Max Temperature"
                className="h-10"
              />
              <p className=" text-[#7d0f0f]">
                {dailyWeather.temperature_2m_max}°{metrics.temperature}
              </p>
            </div>
            <div className="flex flex-row items-center">
              <img
                src="/weather-icons/thermometer-colder.svg"
                alt="Min Temperature"
                title="Min Temperature"
                className="h-10"
              />
              <p className="text-[#093F58]">
                {dailyWeather.temperature_2m_min}°{metrics.temperature}
              </p>
            </div>
          </div>
          <div className="flex flex-row my-6 gap-2">
            <div className="flex flex-col w-24 items-center border-x p-2 border-white/40">
              <img
                src="/weather-icons/sunrise.svg"
                alt="Sunrise"
                title="Sunrise"
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
                title="Sunset"
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
                title="Daylight"
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
            className="flex flex-row justify-between w-full rounded-2xl p-2 ring-1 my-6 ring-white/20 ring-offset-0"
            style={{ backgroundImage: `url(${astrologyBg})` }}
          >
            <div className="flex flex-col justify-center">
              <img src={moonPhaseImg} alt="Moon Phase" className="h-14" />
            </div>
            <div className="flex flex-col justify-center m-4 text-white/70 font-poiret text-lg">
              <p className="font-semibold text-start">
                {t(`moonPhases.${astronomyData.moonPhase}`)}
              </p>
              <p className="font-semibold text-end">
                {t(`zodiacSigns.${astronomyData.zodiacSign}`)}
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
