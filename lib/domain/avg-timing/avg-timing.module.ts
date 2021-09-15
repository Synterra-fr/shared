import { Module } from '@nestjs/common';

import { HubModule } from '../../spinal/hub/hub.module';
import { AvgDailyTimingHubRepository } from './avg-daily-timing-hub.repository';
import { AvgPastTimingHubRepository } from './avg-past-timing-hub.repository';



@Module({
  imports: [HubModule],
  controllers: [],
  providers: [AvgPastTimingHubRepository, AvgDailyTimingHubRepository],
  exports: [AvgPastTimingHubRepository, AvgDailyTimingHubRepository],
})
export class AvgTimingModule {}
