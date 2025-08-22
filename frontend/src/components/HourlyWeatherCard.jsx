import { getWeatherIconAndDescription } from "../utils/utils";

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
}) => {
  const iconAndTitle = getWeatherIconAndDescription(weatherCode, true);
  const imgPath = `/weather-icons/${iconAndTitle.key}.svg`;

  return (
    <div
      key={time}
      className="flex flex-col items-center min-w-[140px] bg-green-300 rounded-xl p-2 m-2 gap-2 text-sm"
    >
      <p className="text-sm">{time.split("T")[1]}</p>
      <img src={imgPath} alt={iconAndTitle.title} className="h-10" />
      <p className="text-lg font-poiret font-semibold">{temperature}°C</p>
      <p className="">{iconAndTitle.title}</p>
      <p className="">Feels like {apparentTemperature}°C</p>
      <div className="flex flex-row items-center">
        <img
          src="/weather-icons/raindrops.svg"
          alt="precipitation"
          className="h-6"
        />
        <div>
          <p>{precipitation}mm</p>
          <p>{precipitationProbability}%</p>
        </div>
      </div>
      <div className="flex flex-row items-center">
        <img
          src="/weather-icons/uv-index.svg"
          alt="UV Index"
          className="h-6"
        />
          <p>{UVindex}</p>
      </div>
      <div className="flex flex-row items-center">
        <img
          src="/weather-icons/cloud.svg"
          alt="UV Index"
          className="h-6"
        />
          <p>{cloudCover} %</p>
      </div>
      <div className="flex flex-row items-center">
        <img
          src="/weather-icons/dust-wind.svg"
          alt="UV Index"
          className="h-6"
        />
          <p>{windSpeed}m/s {windDirection}</p>
      </div>
    </div>
  );
};

export default HourlyWeatherCard;
