import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

export interface WeatherResponse {
  latitude: number;
  longitude: number;
  timezone_abbreviation: string;
  elevation: number;
  current: {
    time: string;
    interval: number;
    temperature_2m: number;
    relative_humidity_2m: number;
    apparent_temperature: number;
    precipitation: number;
    weather_code: number;
    cloud_cover: number;
    surface_pressure: number;
    wind_speed_10m: number;
    wind_direction_10m: number;
  };
  hourly: {
    [timestamp: string]: {
      temperature_2m: number;
      apparent_temperature: number;
      precipitation_probability: number;
      weather_code: number;
      uv_index: number;
      wind_speed_10m: number;
      wind_direction_10m: number;
      cloud_cover: number;
      precipitation: number;
    };
  };
  daily: {
    [date: string]: {
      weather_code: number;
      temperature_2m_max: number;
      temperature_2m_min: number;
      sunrise: string;
      sunset: string;
      daylight_duration: number;
      uv_index_max: number;
      precipitation_probability_max: number;
      wind_speed_10m_max: number;
      precipitation_sum: number;
      wind_direction_10m_dominant: number;
    };
  };
}

@Injectable()
export class WeatherService {
  constructor(private httpService: HttpService) {}

  async getLocationCoordinates(location: string) {
    const locationApiUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${location}&count=1&language=en&format=json`;

    const response = await firstValueFrom(this.httpService.get(locationApiUrl));

    if (!response.data.results || response.data.results.length === 0) {
      throw new Error('Location not found');
    }

    const { latitude, longitude } = response.data.results[0];
    return { latitude, longitude };
  }

  async getWeather(city: string): Promise<WeatherResponse> {
    const coordinates = await this.getLocationCoordinates(city);
    const weatherApiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${coordinates.latitude}&longitude=${coordinates.longitude}&daily=weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset,daylight_duration,uv_index_max,precipitation_probability_max,wind_speed_10m_max,precipitation_sum,wind_direction_10m_dominant&hourly=temperature_2m,apparent_temperature,precipitation_probability,weather_code,uv_index,wind_speed_10m,wind_direction_10m,cloud_cover,precipitation&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,weather_code,cloud_cover,surface_pressure,wind_speed_10m,wind_direction_10m`;

    const response = await firstValueFrom(this.httpService.get(weatherApiUrl));
    const data = response.data;

    return this.transformWeather(data);
  }

  transformWeather(data: any) {
    const { hourly, daily } = data;

    // Transform hourly for even hours
    const hourlyTransformed = {};
    hourly.time.forEach((time, index) => {
      const hour = new Date(time).getHours();
      if (hour % 2 === 0) {
        hourlyTransformed[time] = {
          temperature_2m: hourly.temperature_2m[index],
          apparent_temperature: hourly.apparent_temperature[index],
          precipitation_probability: hourly.precipitation_probability[index],
          weather_code: hourly.weather_code[index],
          uv_index: hourly.uv_index[index],
          wind_speed_10m: hourly.wind_speed_10m[index],
          wind_direction_10m: hourly.wind_direction_10m[index],
          cloud_cover: hourly.cloud_cover[index],
          precipitation: hourly.precipitation[index],
        };
      }
    });

    const dailyTransformed = {};
    daily.time.forEach((date, index) => {
      dailyTransformed[date] = {
        weather_code: daily.weather_code[index],
        temperature_2m_max: daily.temperature_2m_max[index],
        temperature_2m_min: daily.temperature_2m_min[index],
        sunrise: daily.sunrise[index],
        sunset: daily.sunset[index],
        daylight_duration: daily.daylight_duration[index],
        uv_index_max: daily.uv_index_max[index],
        precipitation_probability_max:
          daily.precipitation_probability_max[index],
        wind_speed_10m_max: daily.wind_speed_10m_max[index],
        precipitation_sum: daily.precipitation_sum[index],
        wind_direction_10m_dominant: daily.wind_direction_10m_dominant[index],
      };
    });

    return {
      latitude: data.latitude,
      longitude: data.longitude,
      timezone_abbreviation: data.timezone_abbreviation,
      elevation: data.elevation,
      current: data.current,
      hourly: hourlyTransformed,
      daily: dailyTransformed,
    };
  }
}
