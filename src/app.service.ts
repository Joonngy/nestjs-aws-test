import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHealthCheck(): { data: string } {
    return { data: `Health Check` };
  }

  getUser(): { data: string } {
    return { data: `Hello from App Server ${process.env.ZONE}` };
  }
}
