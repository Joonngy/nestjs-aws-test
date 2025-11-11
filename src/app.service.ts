import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHealthCheck(): { data: string } {
    return { data: `Health Check` };
  }

  getUser(): { data: string } {
    return { data: `Hello from App Server ${process.env.ZONE}` };
  }

  setImage(id: string, userId: string, prompt: string, s3Key: string) {
    console.log(`${id}, ${userId}, ${prompt}, ${s3Key}`);
    return { data: `Set Image from ${process.env.ZONE}` };
  }

  // getImage() {

  // }
}
