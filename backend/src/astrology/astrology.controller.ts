import { Controller, Get, Query } from '@nestjs/common';
import { AstrologyService } from './astrology.service';
import { AstrologyResponse } from './astrology.service';

@Controller('astrology')
export class AstrologyController {
  constructor(private astrologyService: AstrologyService) {}

  @Get()
  async getAstrology(
    @Query('lat') latitude: string,
    @Query('long') longitude: string,
  ): Promise<AstrologyResponse[] | null> {
    return this.astrologyService.getAstrology(latitude, longitude);
  }
}
