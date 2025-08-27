import { Controller, Get, Query } from '@nestjs/common';
import { WeatherService } from './weather.service';
import { FullWeatherResponse, TodayWeatherResponse } from './weather.service';

@Controller('weather')
export class WeatherController {
  constructor(private weatherService: WeatherService) {}

  @Get()
  async getWeather(
    @Query('location') location: string,
    @Query('lat') latitude: string,
    @Query('long') longitude: string,
    @Query('timezone') timezone: string,
  ): Promise<FullWeatherResponse> {
    return this.weatherService.getWeather(
      latitude,
      longitude,
      timezone,
      location,
    );
  }

  @Get('/current')
  async getTodayWeather(
    @Query('lat') latitude: string,
    @Query('long') longitude: string,
    @Query('timezone') timezone: string,
  ): Promise<TodayWeatherResponse> {
    return this.weatherService.getTodayWeather(latitude, longitude, timezone);
  }
}
