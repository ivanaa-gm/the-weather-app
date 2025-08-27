import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { AstrologyController } from './astrology.controller';
import { AstrologyService } from './astrology.service';

@Module({
  imports: [HttpModule],
  providers: [AstrologyService],
  controllers: [AstrologyController],
})
export class AstrologyModule {}
