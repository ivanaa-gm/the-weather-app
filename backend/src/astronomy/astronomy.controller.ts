import { Controller, Get, Query } from '@nestjs/common';
import { AstronomyService } from './astronomy.service';
import { AstronomyResponse } from './astronomy.service';

@Controller('astronomy')
export class AstronomyController {
  constructor(private astrologyService: AstronomyService) {}

  @Get()
  async getAstronomy(
    @Query('lat') latitude: string,
    @Query('long') longitude: string,
  ): Promise<AstronomyResponse> {
    return this.astrologyService.getAstronomy(latitude, longitude);
  }
}
