import { Injectable, OnModuleInit } from '@nestjs/common';
import { SpinalWrapper } from '@synterra/spinal-rxjs';

@Injectable()
export class SpinalService extends SpinalWrapper implements OnModuleInit {
  onModuleInit() {
    const SPINAL_USER_ID = process.env.SPINAL_USER_ID;
    if (!SPINAL_USER_ID) {
      throw new Error('SPINAL_USER_ID not set');
    }
    const SPINAL_PASSWORD = process.env.SPINAL_PASSWORD;
    if (!SPINAL_PASSWORD) {
      throw new Error('SPINAL_PASSWORD not set');
    }
    const SPINALHUB_IP = process.env.SPINALHUB_IP;
    if (!SPINALHUB_IP) {
      throw new Error('SPINALHUB_IP not set');
    }
    const SPINALHUB_PORT = +(process.env.SPINALHUB_PORT as string);
    if (!SPINALHUB_PORT) {
      throw new Error('SPINALHUB_PORT not set');
    }

    this.initSpinalConnexion(
      SPINAL_USER_ID,
      SPINAL_PASSWORD,
      SPINALHUB_IP,
      SPINALHUB_PORT,
    );
  }
}
