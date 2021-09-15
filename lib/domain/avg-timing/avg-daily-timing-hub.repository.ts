import { Injectable } from '@nestjs/common';
import { HubRepository, SpinalHubRepository } from '@synterra/spinal-rxjs';

import { SpinalService } from '../../spinal/hub/spinal.service';
import { AvgTimingModel } from './avg-timing.model';

@SpinalHubRepository('avg-daily-timing')
@Injectable()
export class AvgDailyTimingHubRepository extends HubRepository<AvgTimingModel> {
  protected get emptyNode(): AvgTimingModel {
    return new AvgTimingModel();
  }

  constructor(spinal: SpinalService) {
    super(spinal);
  }
}
