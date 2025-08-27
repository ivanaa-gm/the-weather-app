import { Controller, Get, Query } from '@nestjs/common';
import { LocationService } from './location.service';
import { LocationResponse } from './location.service';

@Controller('locations')
export class LocationController {
  constructor(private locationService: LocationService) {}

  @Get()
  async getLocations(@Query('string') locationString: string, @Query('lang') language: string): Promise<LocationResponse> {
    return this.locationService.getLocations(locationString, language);
  }
}
