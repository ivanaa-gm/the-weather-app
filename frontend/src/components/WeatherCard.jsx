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

const WeatherCard = ({
  dailyWeather = null,
  hourlyWeather = null,
  astronomyData = null,
  icon = "",
  title = "",
  code = 0,
  background = "",
}) => {
  const { t, i18n } = useTranslation();
  const { metrics } = useMetrics();

  if (!dailyWeather || !hourlyWeather) {
    return (
      <div className="flex h-full w-full items-center justify-center">
        <CircleLoader color="#2cceff" size={70} />
      </div>
    );
  }

  const imgPath = `/weather-icons/${icon}.svg`;
  const bgPath = `/bg-gifs/${background}.gif`;

  const { weekday, day, month } = formatDate(dailyWeather.date);
  const windDirection = getWindDirection(dailyWeather.wind_speed_10m_max);
  const daylight = secondsToHours(dailyWeather.daylight_duration);

  const astrologyBg = `bg-gifs/astrology.gif`;
  const moonPhaseImg = `/moon-phases/${astronomyData.moonPhase}.png`;
  const zodiacSignImg = `/zodiac-signs/${astronomyData.zodiacSign}.png`;

  return (
    <div
      className="h-full w-full overflow-y-auto bg-cover bg-center border-2 border-transparent shadow-lg"
      style={{ backgroundImage: `url(${bgPath})` }}
    >
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center">
          <div className="mt-4">
            {t(`days.${weekday}`)}, {day} {t(`months.${month}`)}
          </div>
          <img
            src={imgPath}
            alt={title}
            title={title}
            className="-translate-y-4 h-36"
          />
        </div>
        <div className="backdrop-blur-md border-2 border-black/10 p-4 w-[80%] rounded-md flex flex-col items-center -translate-y-2 bg-white/30">
          <div className="flex flex-row text-2xl font-bold font-poiret">
            <div className="flex flex-row items-center">
              <img
                src="/weather-icons/thermometer-warmer.svg"
                alt="Max Temperature"
                className="h-10"
              />
              <p className="text-[#7d0f0f]">
                {dailyWeather.temperature_2m_max}°{metrics.temperature}
              </p>
            </div>
            <div className="flex flex-row items-center">
              <img
                src="/weather-icons/thermometer-colder.svg"
                alt="Min Temperature"
                className="h-10"
              />
              <p className="text-[#093F58]">
                {dailyWeather.temperature_2m_min}°{metrics.temperature}
              </p>
            </div>
          </div>
          <h1 className="text-2xl text-center font-bold">
            {t(`weatherCodes.${code}`)}
          </h1>
          <div className="flex flex-col items-center mt-2">
            <div className="flex flex-col items-center">
              <div>{t("precipitation")}</div>
              <div className="flex flex-row items-center -translate-x-1">
                <img
                  src="/weather-icons/raindrops.svg"
                  alt="precipitation"
                  className="h-8"
                />
                <p>
                  {dailyWeather.precipitation_sum}{" "}
                  {t(`${metrics.precipitation}`)}
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center -translate-y-2">
              <img
                src="/weather-icons/umbrella.svg"
                alt="Chance of Rain"
                className="h-8"
              />
              <div className="flex flex-row gap-2 text-sm text-black/80">
                <div>{t("chanceOfRain")}:</div>
                <p>{dailyWeather.precipitation_probability_max}%</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center mt-2">
            <div>{t("wind")}</div>
            <div className="flex flex-row items-center -translate-y-1 -translate-x-2">
              <img
                src="/weather-icons/dust-wind.svg"
                alt="Wind"
                className="h-10"
              />
              <p className="">
                {dailyWeather.wind_speed_10m_max} {t(`${metrics.windSpeed}`)}{" "}
                {t(`directions.${windDirection}`)}
              </p>
            </div>
          </div>
          <div className="flex flex-row my-4">
            <div className="flex flex-col w-20 items-center border-x p-1 border-white/40">
              <img
                src="/weather-icons/sunrise.svg"
                alt="Sunrise"
                className="h-10"
              />
              <p className="font-semibold font-poiret">
                {extractTime(dailyWeather.sunrise)}
              </p>
            </div>
            <div className="flex flex-col w-20 items-center border-r p-1 border-white/40">
              <img
                src="/weather-icons/sunset.svg"
                alt="Sunset"
                className="h-10"
              />
              <p className="font-semibold font-poiret">
                {extractTime(dailyWeather.sunset)}
              </p>
            </div>
            <div className="flex flex-col w-20 items-center border-r p-1 border-white/40">
              <img
                src="/weather-icons/horizon.svg"
                alt="Daylight"
                className="h-10"
              />
              <p className="font-semibold font-poiret">
                {daylight.hours}
                {t("h")} {daylight.minutes}
                {t("m")}
              </p>
            </div>
          </div>
          <div
            className="flex flex-col w-full rounded-2xl my-2 p-2 ring-1 ring-white/20 ring-offset-0"
            style={{ backgroundImage: `url(${astrologyBg})` }}
          >
            <div className="flex flex-row gap-2">
              <img src={moonPhaseImg} alt="Moon Phase" className="h-10" />
              <p className="font-semibold text-start text-white/70 font-poiret">
                {t(`moonPhases.${astronomyData.moonPhase}`)}
              </p>
            </div>

            <div className="flex flex-row items-end justify-end gap-2">
              <p className="font-semibold text-end text-white/70 font-poiret">
                {t(`zodiacSigns.${astronomyData.zodiacSign}`)}
              </p>
              <img src={zodiacSignImg} alt="Star Sign" className="h-14" />
            </div>
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
