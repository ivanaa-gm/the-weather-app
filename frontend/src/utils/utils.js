function isDaytime(currentTimeISO, sunriseISO, sunsetISO) {
  const now = new Date(currentTimeISO);
  const sunrise = new Date(sunriseISO);
  const sunset = new Date(sunsetISO);

  return now >= sunrise && now <= sunset;
}

function getWeatherIconBackgroundAndDescription(weatherCode, isDay) {
  const weatherCodes = {
    0: { svg: "clear", title: "Clear", background: "clear" },
    1: { svg: "mostly-clear", title: "Mostly Clear", background: "clear" },
    2: {
      svg: "partly-cloudy",
      title: "Partly Cloudy",
      background: "partly-cloudy",
    },
    3: { svg: "overcast", title: "Overcast", background: "overcast" },
    45: { svg: "fog", title: "Fog", background: "fog" },
    48: { svg: "rime-fog", title: "Rime Fog", background: "fog" },
    51: { svg: "light-drizzle", title: "Light Drizzle", background: "drizzle" },
    53: { svg: "drizzle", title: "Moderate Drizzle", background: "drizzle" },
    55: { svg: "drizzle", title: "Dense Drizzle", background: "drizzle" },
    56: {
      svg: "light-drizzle",
      title: "Light Freezing Drizzle",
      background: "drizzle",
    },
    57: {
      svg: "drizzle",
      title: "Dense Freezing Drizzle",
      background: "drizzle",
    },
    61: { svg: "slight-rain", title: "Slight Rain", background: "rain" },
    63: { svg: "rain", title: "Moderate Rain", background: "rain" },
    65: { svg: "rain", title: "Heavy Rain", background: "rain" },
    66: {
      svg: "light-sleet",
      title: "Light Freezing Rain",
      background: "rain",
    },
    67: { svg: "sleet", title: "Heavy Freezing Rain", background: "rain" },
    71: { svg: "light-snow", title: "Slight Snow", background: "snow" },
    73: { svg: "snow", title: "Moderate Snow", background: "snow" },
    75: { svg: "snow", title: "Heavy Snow", background: "snow" },
    77: { svg: "hail", title: "Snow grains", background: "hail" },
    80: {
      svg: "slight-rain",
      title: "Slight Rain Showers",
      background: "rain",
    },
    81: { svg: "rain", title: "Moderate Rain Showers", background: "rain" },
    82: { svg: "rain", title: "Violent Rain Showers", background: "rain" },
    85: { svg: "light-snow", title: "Slight Snow Showers", background: "snow" },
    86: { svg: "snow", title: "Heavy Snow Showers", background: "snow" },
    95: {
      svg: "thunderstorm",
      title: "Thunderstorm",
      background: "thunderstorm",
    },
    96: {
      svg: "thunderstorm",
      title: "Thunderstorm with Hail",
      background: "thunderstorm",
    },
    99: {
      svg: "thunderstorm",
      title: "Thunderstorm with heavy hail",
      background: "thunderstorm",
    },
    100: { svg: "wind", title: "Windy", background: "wind" },
  };

  const weather = weatherCodes[weatherCode];

  if (!weather) return null;

  const svgDayNightSuffix = [
    "clear",
    "light-drizzle",
    "slight-rain",
    "light-snow",
    "mostly-clear",
    "partly-cloudy",
    "light-sleet",
  ].includes(weather.svg)
    ? isDay
      ? "-day"
      : "-night"
    : "";

  const backgroudDayNightSuffix = [
    "clear",
    "partly-cloudy",
    "overcast",
    "drizzle",
    "rain",
    "snow",
    "thunderstorm",
    "wind",
  ].includes(weather.background)
    ? isDay
      ? "-day"
      : "-night"
    : "";

  return {
    svg: weather.svg + svgDayNightSuffix,
    code: weatherCode,
    background: weather.background + backgroudDayNightSuffix,
  };
}

function formatDate(dateString) {
  const date = new Date(dateString);

  const weekday = date
    .toLocaleDateString("en-US", { weekday: "short" })
    .toLowerCase();

  const day = date.toLocaleDateString("en-US", { day: "2-digit" });

  const month = date
    .toLocaleDateString("en-US", { month: "short" })
    .toLowerCase();

  return { weekday, day, month };
}

function getWindDirection(degrees) {
  const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
  const index = Math.round(degrees / 45) % 8;
  return directions[index].toLowerCase();
}

function filterFutureHours(hourlyWeather) {
  // const now = new Date();
  const now = new Date("2025-08-20T15:00:00");

  const futureEntries = Object.entries(hourlyWeather).filter(([time]) => {
    return new Date(time) > now;
  });

  return Object.fromEntries(futureEntries);
}

function extractTime(dateTimeString) {
  return dateTimeString.split("T")[1];
}

function secondsToHours(seconds) {
  const totalMinutes = Math.floor(seconds / 60);
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  return {
    hours,
    minutes,
  };
}

function formatCoordinates(coord) {
  const degrees = Math.floor(coord);
  const minutes = Math.floor((coord - degrees) * 60);
  return `${degrees}°${minutes}'`;
}

export {
  isDaytime,
  getWeatherIconBackgroundAndDescription,
  formatDate,
  getWindDirection,
  filterFutureHours,
  extractTime,
  secondsToHours,
  formatCoordinates,
};
