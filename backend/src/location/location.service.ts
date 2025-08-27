import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { HttpException, HttpStatus } from '@nestjs/common';

export interface LocationResponse {
  name: string;
  latitude: number;
  longitude: number;
  country_code: string;
  timezone: string;
  admin1: string;
}

@Injectable()
export class LocationService {
  constructor(private httpService: HttpService) {}

  async getLocations(locationString: string, language: string): Promise<LocationResponse> {
    const locationApiUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${locationString}&count=20&language=${language}&format=json`;

    try {
      const response = await firstValueFrom(
        this.httpService.get(locationApiUrl),
      );
      const data = response.data;

      return data.results.map((loc: any) => ({
        name: loc.name,
        latitude: loc.latitude,
        longitude: loc.longitude,
        country_code: loc.country_code,
        timezone: loc.timezone,
        admin1: loc.admin1,
      }));
    } catch (error) {
      throw new HttpException(
        error.response?.data || 'Error fetching geolocation data from Open Meteo API.',
        error.response?.status || HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
