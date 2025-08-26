import { useState } from "react";
import Header from "../layout/Header";
import MobileWeatherCard from "./MobileWeatherCard";
import {
  currentWeather,
  dailyWeatherToday,
  hourlyWeatherToday,
  dailyWeatherFutureDays,
  hourlyWeatherFutureDays,
} from "../utils/api";
import {
  getWeatherIconBackgroundAndDescription,
  isDaytime,
} from "../utils/utils";

const MobileCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const now = currentWeather.time;
  const isDay = isDaytime(
    now,
    dailyWeatherToday.sunrise,
    dailyWeatherToday.sunset
  );

  const iconTitleBackground = getWeatherIconBackgroundAndDescription(
    currentWeather.weather_code,
    // 0,
    isDay
    // true
  );

  const iconsTitlesBackgrouds = [];
  Object.values(dailyWeatherFutureDays)
    .map((day) => day.weather_code)
    .forEach((code) => {
      const details = getWeatherIconBackgroundAndDescription(code, true);
      iconsTitlesBackgrouds.push(details);
    });

  const cards = [
    <MobileWeatherCard
      isToday={true}
      currentWeather={currentWeather}
      dailyWeather={dailyWeatherToday}
      hourlyWeather={hourlyWeatherToday}
      icon={iconTitleBackground.svg}
      code={iconTitleBackground.code}
      background={iconTitleBackground.background}
    />,
    ...Array.from({ length: 6 }, (_, i) => (
      <MobileWeatherCard
        isToday={false}
        dailyWeather={Object.entries(dailyWeatherFutureDays)[i][1]}
        hourlyWeather={Object.entries(hourlyWeatherFutureDays)[i][1]}
        icon={iconsTitlesBackgrouds[i].svg}
        code={iconsTitlesBackgrouds[i].code}
        background={iconsTitlesBackgrouds[i].background}
      />
    )),
  ];

  const handleScroll = (e) => {
    const scrollX = e.target.scrollLeft;
    const width = e.target.offsetWidth;
    const index = Math.round(scrollX / width);
    setActiveIndex(index);
  };

  return (
    <div className="h-full w-full flex flex-col relative">
      <div
        className="flex-1 flex overflow-x-auto snap-x snap-mandatory"
        onScroll={handleScroll}
      >
      <Header />
        {cards.map((card, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-full h-full snap-center flex items-center justify-center"
          >
            {card}
          </div>
        ))}
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full flex flex-col items-center bg-white/10">
        <div className="flex gap-2 h-4 items-center">
        {cards.map((_, i) => (
          <span
            key={i}
            className={`w-2 h-2 rounded-full transition-colors duration-300 ${
              i === activeIndex ? "bg-gray-800" : "bg-white"
            }`}
          />
        ))}
      </div>
      </div>
    </div>
  );
};

export default MobileCarousel;
