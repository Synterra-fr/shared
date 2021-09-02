import { Model } from 'spinal-core-connectorjs_type';
import { AvgTimingDTO } from '../../class/avg-timing';

export class AvgTimingModel extends Model implements AvgTimingDTO {
  constructor(attrs?: AvgTimingDTO) {
    super();
    if (attrs) {
      this.add_attr(attrs);
    }
  }
}
