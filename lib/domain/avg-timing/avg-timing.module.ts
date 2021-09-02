import { Module } from '@nestjs/common';
import { HubModule } from '../../spinal/hub/hub.module';
import { AvgTimingHubRepository } from './avg-timing-hub.repository';

@Module({
  imports: [HubModule],
  controllers: [],
  providers: [AvgTimingHubRepository],
  exports: [AvgTimingHubRepository],
})
export class AvgTimingModule {}
