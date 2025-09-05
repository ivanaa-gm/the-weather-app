const BASE_URL = "http://localhost:3000";
import { astrologyData } from "../../exampleData";

export async function getLocationByGeolocation(lat, long) {
  const res = await fetch(
    `${BASE_URL}/locations/geolocation?lat=${lat}&long=${long}`
  );
  if (!res.ok) throw new Error("Failed to fetch geolocation");
  return res.json();
}

export async function searchLocations(query, lang = "en") {
  const res = await fetch(`${BASE_URL}/locations?string=${query}&lang=${lang}`);
  if (!res.ok) throw new Error("Failed to search locations");
  return res.json();
}

export async function getWeather(
  latitude,
  longitude,
  timezone,
  windSpeedUnit,
  temperatureUnit,
  precipitationUnit
) {
  const url = `${BASE_URL}/weather?lat=${latitude}&long=${longitude}&timezone=${timezone}&windSpeedUnit=${windSpeedUnit}&temperatureUnit=${temperatureUnit}&precipitationUnit=${precipitationUnit}`;
  console.log(url);
  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch weather data");
  return res.json();
}

export async function getCurrentWeather(
  latitude,
  longitude,
  timezone,
  windSpeedUnit,
  temperatureUnit,
  precipitationUnit
) {
  const url = `${BASE_URL}/weather/current?lat=${latitude}&long=${longitude}&timezone=${timezone}&windSpeedUnit=${windSpeedUnit}&temperatureUnit=${temperatureUnit}&precipitationUnit=${precipitationUnit}`;
  console.log(url);
  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch current weather data");
  return res.json();
}

export async function getAstrology(lat, long) {
  const res = await fetch(
    `${BASE_URL}/astrology?lat=${lat}&long=${long}`
  );
  if (!res.ok) throw new Error("Failed to fetch astrology data");
  return res.json();
}

export {
  astrologyData
};
