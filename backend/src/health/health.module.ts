import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { HealthController } from './health.controller';

@Module({
  imports: [HttpModule],
  providers: [],
  controllers: [HealthController],
})
export class HealthModule {}
