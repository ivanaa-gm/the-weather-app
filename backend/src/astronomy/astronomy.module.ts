import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { AstronomyController } from './astronomy.controller';
import { AstronomyService } from './astronomy.service';

@Module({
  imports: [HttpModule],
  providers: [AstronomyService],
  controllers: [AstronomyController],
})
export class AstrologyModule {}
