import exampleData from "../../exampleData";

const {
  current: currentWeather,
  daily,
  hourly,
  latitude,
  longitude,
  timezone_abbreviation: timezone,
  elevation,
} = exampleData;

function transformHourlyData(hourly) {
  const days = {};

  Object.entries(hourly).forEach(([time, data]) => {
    const date = time.split("T")[0]; // extract YYYY-MM-DD
    if (!days[date]) days[date] = {};
    days[date][time] = data;
  });

  const labels = [
    "today",
    "dayOne",
    "dayTwo",
    "dayThree",
    "dayFour",
    "dayFive",
    "daySix",
  ];
  const dates = Object.keys(days).sort();

  const result = {};
  labels.forEach((label, idx) => {
    if (dates[idx]) {
      result[label] = days[dates[idx]];
    }
  });

  return result;
}

function transformDailyData(daily) {
  const labels = [
    "today",
    "dayOne",
    "dayTwo",
    "dayThree",
    "dayFour",
    "dayFive",
    "daySix",
  ];
  const dates = Object.keys(daily).sort();

  const result = {};
  labels.forEach((label, idx) => {
    if (dates[idx]) {
      result[label] = {
        date: dates[idx],
        ...daily[dates[idx]],
      };
    }
  });

  return result;
}

const hourlyWeather = transformHourlyData(hourly);
const dailyWeather = transformDailyData(daily);

const hourlyWeatherToday = hourlyWeather.today;
const hourlyWeatherFutureDays = {
  dayOne: hourlyWeather.dayOne,
  dayTwo: hourlyWeather.dayTwo,
  dayThree: hourlyWeather.dayThree,
  dayFour: hourlyWeather.dayFour,
  dayFive: hourlyWeather.dayFive,
  daySix: hourlyWeather.daySix,
};

const dailyWeatherToday = dailyWeather.today;
const dailyWeatherFutureDays = {
  dayOne: dailyWeather.dayOne,
  dayTwo: dailyWeather.dayTwo,
  dayThree: dailyWeather.dayThree,
  dayFour: dailyWeather.dayFour,
  dayFive: dailyWeather.dayFive,
  daySix: dailyWeather.daySix,
};

export {
  currentWeather,
  dailyWeather,
  dailyWeatherToday,
  dailyWeatherFutureDays,
  hourlyWeather,
  hourlyWeatherToday,
  hourlyWeatherFutureDays,
  timezone,
  latitude,
  longitude,
  elevation,
};
