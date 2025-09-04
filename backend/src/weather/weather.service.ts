import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { HttpException, HttpStatus } from '@nestjs/common';
import {
  WindSpeedUnit,
  TemperatureUnit,
  PrecipitationUnit,
} from './weather-metrics.enum';

export interface FullWeatherResponse {
  latitude: number;
  longitude: number;
  timezone: string;
  elevation: number;
  currentWeather: {
    time: string;
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
  dailyWeatherToday: {
    date: string;
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
  dailyWeatherFutureDays: {
    [day: string]: {
      date: string;
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
  hourlyWeatherToday: {
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
  hourlyWeatherFutureDays: {
    [day: string]: {
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
  };
}

export interface TodayWeatherResponse {
  currentWeather: {
    time: string;
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
  dailyWeatherToday: {
    date: string;
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
  hourlyWeatherToday: {
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
}

@Injectable()
export class WeatherService {
  constructor(private httpService: HttpService) {}

  async getWeather(
    latitude: string,
    longitude: string,
    timezone: string,
    windSpeedUnit: WindSpeedUnit,
    temperatureUnit: TemperatureUnit,
    precipitationUnit: PrecipitationUnit,
  ): Promise<FullWeatherResponse> {
    const weatherApiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset,daylight_duration,uv_index_max,precipitation_probability_max,wind_speed_10m_max,precipitation_sum,wind_direction_10m_dominant&hourly=temperature_2m,apparent_temperature,precipitation_probability,weather_code,uv_index,wind_speed_10m,wind_direction_10m,cloud_cover,precipitation&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,weather_code,cloud_cover,surface_pressure,wind_speed_10m,wind_direction_10m&timezone=${encodeURIComponent(timezone)}&wind_speed_unit=${windSpeedUnit}&temperature_unit=${temperatureUnit}&precipitation_unit=${precipitationUnit}`;
    try {
      const response = await firstValueFrom(
        this.httpService.get(weatherApiUrl),
      );
      const data = response.data;

      let result = {
        ...this.transformWeather(data),
      };

      result = this.roundTemperatures(result);
      result = this.markWindy(result, 'ms');

      return result;
    } catch (error) {
      throw new HttpException(
        error.response?.data ||
          'Error fetching weather data from Open Meteo API.',
        error.response?.status || HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async getTodayWeather(
    latitude: string,
    longitude: string,
    timezone: string,
    windSpeedUnit: WindSpeedUnit,
    temperatureUnit: TemperatureUnit,
    precipitationUnit: PrecipitationUnit,
  ): Promise<TodayWeatherResponse> {
    const { currentWeather, dailyWeatherToday, hourlyWeatherToday } =
      await this.getWeather(
        latitude,
        longitude,
        timezone,
        windSpeedUnit,
        temperatureUnit,
        precipitationUnit,
      );

    return {
      currentWeather,
      dailyWeatherToday,
      hourlyWeatherToday,
    };
  }

  transformWeather(data: any) {
    const { hourly, daily } = data;

    const hourlyWeather = this.transformHourlyData(hourly);
    const dailyWeather = this.transformDailyData(daily);

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

    const { interval, ...currentWeather } = data.current;

    return {
      latitude: data.latitude,
      longitude: data.longitude,
      timezone: data.timezone_abbreviation,
      elevation: data.elevation,
      currentWeather,
      dailyWeatherToday,
      dailyWeatherFutureDays,
      hourlyWeatherToday,
      hourlyWeatherFutureDays,
    };
  }

  transformHourlyData(hourly): {
    today?: any;
    dayOne?: any;
    dayTwo?: any;
    dayThree?: any;
    dayFour?: any;
    dayFive?: any;
    daySix?: any;
  } {
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

    const days = {};
    Object.entries(hourlyTransformed).forEach(([time, data]) => {
      const date = time.split('T')[0];
      if (!days[date]) days[date] = {};
      days[date][time] = data;
    });

    const labels = [
      'today',
      'dayOne',
      'dayTwo',
      'dayThree',
      'dayFour',
      'dayFive',
      'daySix',
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

  transformDailyData(daily: any): {
    today?: any;
    dayOne?: any;
    dayTwo?: any;
    dayThree?: any;
    dayFour?: any;
    dayFive?: any;
    daySix?: any;
  } {
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

    const labels = [
      'today',
      'dayOne',
      'dayTwo',
      'dayThree',
      'dayFour',
      'dayFive',
      'daySix',
    ];
    const dates = Object.keys(dailyTransformed).sort();

    const result = {};
    labels.forEach((label, idx) => {
      if (dates[idx]) {
        result[label] = {
          date: dates[idx],
          ...dailyTransformed[dates[idx]],
        };
      }
    });

    return result;
  }

  roundTemperatures(obj: any): any {
    if (Array.isArray(obj)) {
      return obj.map(this.roundTemperatures);
    } else if (obj && typeof obj === 'object') {
      const newObj: any = {};
      for (const [key, value] of Object.entries(obj)) {
        if (
          key === 'temperature_2m' ||
          key === 'temperature_2m_min' ||
          key === 'temperature_2m_max' ||
          key === 'apparent_temperature'
        ) {
          newObj[key] = Math.round(value as number);
        } else {
          newObj[key] = this.roundTemperatures(value);
        }
      }
      return newObj;
    }
    return obj;
  }

  markWindy(obj: any, unit: 'ms' | 'kmh' | 'mph' | 'kn'): any {
    const thresholds = {
      ms: 14,
      kmh: 40,
      mph: 24,
      kn: 22,
    };

    if (Array.isArray(obj)) {
      return obj.map((item) => this.markWindy(item, unit));
    } else if (obj && typeof obj === 'object') {
      const newObj: any = {};
      for (const [key, value] of Object.entries(obj)) {
        if (key === 'wind_speed_10m' || key === 'wind_speed_10m_max') {
          newObj[key] = value;

          if ((value as number) >= thresholds[unit]) {
            newObj['weather_code'] = 100;
          }
        } else {
          newObj[key] = this.markWindy(value, unit);
        }
      }
      return newObj;
    }
    return obj;
  }
}
