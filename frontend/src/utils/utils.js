function isDaytime(currentTimeISO, sunriseISO, sunsetISO) {
  const now = new Date(currentTimeISO);
  const sunrise = new Date(sunriseISO);
  const sunset = new Date(sunsetISO);

  return now >= sunrise && now <= sunset;
}

function getWeatherIconAndDescription(weatherCode, isDay) {
  const weatherCodes = {
    0: { key: "clear", title: "Clear" },
    1: { key: "mostly-clear", title: "Mostly clear" },
    2: { key: "partly-cloudy", title: "Partly Cloudy" },
    3: { key: "overcast", title: "Overcast" },
    45: { key: "fog", title: "Fog" },
    48: { key: "rime-fog", title: "Rime Fog" },
    51: { key: "light-drizzle", title: "Light Drizzle" },
    53: { key: "drizzle", title: "Moderate Drizzle" },
    55: { key: "drizzle", title: "Dense Drizzle" },
    56: { key: "light-drizzle", title: "Light Freezing Drizzle" },
    57: { key: "drizzle", title: "Dense Freezing Drizzle" },
    61: { key: "slight-rain", title: "Slight Rain" },
    63: { key: "rain", title: "Moderate Rain" },
    65: { key: "rain", title: "Heavy Rain" },
    66: { key: "light-sleet", title: "Light Freezing Rain" },
    67: { key: "sleet", title: "Heavy Freezing Rain" },
    71: { key: "light-snow", title: "Slight Snow" },
    73: { key: "snow", title: "Moderate Snow" },
    75: { key: "snow", title: "Heavy Snow" },
    77: { key: "hail", title: "Snow grains" },
    80: { key: "slight-rain", title: "Slight Rain Showers" },
    81: { key: "rain", title: "Moderate Rain Showers" },
    82: { key: "rain", title: "Violent Rain Showers" },
    85: { key: "light-snow", title: "Slight Snow Showers" },
    86: { key: "snow", title: "Heavy Snow Showers" },
    95: { key: "thunderstorm", title: "Thunderstorm" },
    96: { key: "thunderstorm", title: "Thunderstorm with Hail" },
    99: { key: "thunderstorm", title: "Thunderstorm with heavy hail" },
    100: { key: "wind", title: "Windy" },
  };

  const weather = weatherCodes[weatherCode];

  if (!weather) return null;

  const dayNightSuffix = [
    "light-drizzle",
    "slight-rain",
    "light-snow",
    "mostly-clear",
    "partly-cloudy",
  ].includes(weather.key)
    ? isDay
      ? "-day"
      : "-night"
    : "";

  return {
    key: weather.key + dayNightSuffix,
    title: weather.title,
  };
}

export { isDaytime, getWeatherIconAndDescription };
