import { Controller, Get, Query } from '@nestjs/common';
import { WeatherService } from './weather.service';
import { FullWeatherResponse, TodayWeatherResponse } from './weather.service';
import {
  WindSpeedUnit,
  TemperatureUnit,
  PrecipitationUnit,
} from './weather-metrics.enum';
@Controller('weather')
export class WeatherController {
  constructor(private weatherService: WeatherService) {}

  @Get()
  async getWeather(
    @Query('lat') latitude: string,
    @Query('long') longitude: string,
    @Query('timezone') timezone: string,
    @Query('windSpeedUnit') windSpeedUnit: WindSpeedUnit,
    @Query('temperatureUnit') temperatureUnit: TemperatureUnit,
    @Query('precipitationUnit') precipitationUnit: PrecipitationUnit,
  ): Promise<FullWeatherResponse> {
    return this.weatherService.getWeather(
      latitude,
      longitude,
      timezone,
      windSpeedUnit,
      temperatureUnit,
      precipitationUnit,
    );
  }

  @Get('/current')
  async getTodayWeather(
    @Query('lat') latitude: string,
    @Query('long') longitude: string,
    @Query('timezone') timezone: string,
    @Query('windSpeedUnit') windSpeedUnit: WindSpeedUnit,
    @Query('temperatureUnit') temperatureUnit: TemperatureUnit,
    @Query('precipitationUnit') precipitationUnit: PrecipitationUnit,
  ): Promise<TodayWeatherResponse> {
    return this.weatherService.getTodayWeather(
      latitude,
      longitude,
      timezone,
      windSpeedUnit,
      temperatureUnit,
      precipitationUnit,
    );
  }
}
