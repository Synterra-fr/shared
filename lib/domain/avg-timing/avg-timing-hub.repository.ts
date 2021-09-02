import { Injectable } from '@nestjs/common';
import {
  AbstractHubRepository,
  SpinalHubRepository,
} from '@synterra/spinal-rxjs';
import { SpinalService } from '../../spinal/hub/spinal.service';
import { AvgTimingModel } from './avg-timing.model';

@SpinalHubRepository('avg-past-timing')
@Injectable()
export class AvgTimingHubRepository extends AbstractHubRepository<AvgTimingModel> {
  protected get emptyNode(): AvgTimingModel {
    return new AvgTimingModel();
  }

  constructor(spinal: SpinalService) {
    super(spinal);
  }
}
