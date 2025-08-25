import {
  getWeatherIconBackgroundAndDescription,
  getWindDirection,
  extractTime
} from "../utils/utils";
import { useTranslation } from "react-i18next";
import { useMetrics } from "../contexts/MetricsContext";

const HourlyWeatherCard = ({
  time,
  temperature,
  apparentTemperature,
  precipitation,
  precipitationProbability,
  weatherCode,
  UVindex,
  windSpeed,
  windDirection,
  cloudCover,
  isToday,
}) => {
  const { t, i18n } = useTranslation();
  const {metrics} = useMetrics();

  const iconAndTitle = getWeatherIconBackgroundAndDescription(
    weatherCode,
    true
  );
  const imgPath = `/weather-icons/${iconAndTitle.svg}.svg`;
  const windDirectionString = getWindDirection(windDirection);

  return (
    <div
      key={time}
      className={isToday ? "flex flex-col items-center min-w-[140px] gap-2 border-black/10 shadow-xl bg-transparent/15 rounded-xl p-2 m-1 text-sm transition duration-400 ease-in-out transform hover:ring-1 hover:ring-white/30 hover:ring-offset-0 hover:shadow-white/40"
         : "flex flex-col items-center min-w-[140px] gap-0.5 border-black/10 shadow-xl bg-transparent/15 rounded-xl p-1 m-0.5 text-sm transition duration-400 ease-in-out transform hover:ring-0.5 hover:ring-white/30 hover:ring-offset-0 hover:shadow-white/40"}
    >
      <p className={isToday ? "text-xl" : "text-lg"}>{extractTime(time)}</p>
      <img src={imgPath} alt={iconAndTitle.title} className={isToday ? "h-16" : "h-12"} />
      <p className={isToday ? "text-2xl font-poiret font-semibold" : "text-xl font-poiret font-semibold"}>{temperature}°{metrics.temperature}</p>
      <p className={isToday ? "text-xl" : "text-lg"}>{iconAndTitle.title}</p>
      <p className="text-black/60">{t("apparent")} {apparentTemperature}°{metrics.temperature}</p>
      <div className="flex flex-row items-center">
        <img
          src="/weather-icons/raindrops.svg"
          alt="precipitation"
          className={isToday ? "h-14" : "h-10"}
        />
        <div className={isToday ? "text-lg" : "text-sm"}>
          <p>{precipitation} {t(`${metrics.precipitation}`)}</p>
          <p>{precipitationProbability}%</p>
        </div>
      </div>
      <div className="flex flex-row items-center">
        <img
          src="/weather-icons/uv-index.svg"
          alt="UV Index"
          className={isToday ? "h-12" : "h-8"}
        />
        <p className={isToday ? "text-lg" : "text-sm"}>{UVindex}</p>
      </div>
      <div className="flex flex-row items-center">
        <img
          src="/weather-icons/cloud.svg"
          alt="Clouds Cover"
          className={isToday ? "h-14" : "h-10"}
        />
        <p className={isToday ? "text-lg" : "text-sm"}>{cloudCover}%</p>
      </div>
      <div className="flex flex-row items-center">
        <img
          src="/weather-icons/dust-wind.svg"
          alt="UV Index"
          className={isToday ? "h-12" : "h-8"}
        />
        <p className={isToday ? "text-lg" : "text-sm"}>
          {windSpeed} {t(`${metrics.windSpeed}`)} {t(`directions.${windDirectionString}`)}
        </p>
      </div>
    </div>
  );
};

export default HourlyWeatherCard;
