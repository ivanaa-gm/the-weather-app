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

export interface GeolocationResponse {
  location: string;
}

@Injectable()
export class LocationService {
  constructor(private httpService: HttpService) {}

  async getLocations(
    locationString: string,
    language: string,
  ): Promise<LocationResponse | []> {
    const locationApiUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${locationString}&count=20&language=${language}&format=json`;

    try {
      const response = await firstValueFrom(
        this.httpService.get(locationApiUrl),
      );
      const data = response.data;

      if (data.results && Array.isArray(data.results)) {
        return data.results.map((loc: any) => ({
          name: loc.name,
          latitude: loc.latitude,
          longitude: loc.longitude,
          country_code: loc.country_code,
          timezone: loc.timezone,
          admin1: loc.admin1,
        }));
      }

      return [];
    } catch (error) {
      throw new HttpException(
        'Error fetching locations data from Open Meteo API.',
        error.response?.status || HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async getLocationFromCoords(
    lat: string,
    long: string,
  ): Promise<GeolocationResponse> {
    const apiKey = process.env.GEOCODING_API_KEY;
    if (!apiKey) {
      throw new HttpException(
        'API key not found.',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
    const geolocationApi = `https://geocode.maps.co/reverse?lat=${lat}&lon=${long}&api_key=${apiKey}`;

    try {
      const response = await firstValueFrom(
        this.httpService.get(geolocationApi),
      );
      const data = response.data;
      const address = data.address;

      const locationName = this.pickLocationName(address);

      return { location: locationName };
    } catch (error) {
      throw new HttpException(
        error.response?.data ||
          'Error fetching geolocation data from Geocoding API.',
        error.response?.status || HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  private pickLocationName(address: any): string {
    if (!address) return 'unknown';
    const keys = [
      'city',
      'town',
      'village',
      'municipality',
      'county',
      'state',
      'region',
      'country',
    ];
    for (let key of keys) {
      if (address[key]) {
        return address[key];
      }
    }
    return address.display_name || 'unknown';
  }
}
