import { Module } from '@nestjs/common';
import { WeatherModule } from './weather/weather.module';
import { LocationModule } from './location/location.module';
import { AstrologyModule } from './astrology/astrology.module';
import { HealthModule } from './health/health.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    WeatherModule,
    LocationModule,
    AstrologyModule,
    HealthModule
  ],
})
export class AppModule {}
