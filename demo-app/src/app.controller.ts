import { Controller, Get, Header, Logger } from '@nestjs/common';

@Controller()
export class AppController {
  private readonly logger = new Logger(AppController.name);

  @Get()
  getHello(): string {
    const username = process.env.APP_USERNAME ?? '';
    if (!username) {
      this.logger.warn('APP_USERNAME is not set');
    }

    return `Hello ${username}!\n`;
  }

  @Get('env')
  @Header('Content-Type', 'application/json')
  getEnv() {
    return JSON.stringify(process.env);
  }

  @Get('heavy-computation')
  getHeavyComputationResult() {
    const rounds = Number(process.env.HEAVY_COMPUTATION_ROUNDS ?? 10000000000);
    for (let i = 0; i < rounds; i++) {
      // Heavy computation
    }

    return '42\n';
  }

  @Get('oom')
  getOom() {
    const arr = [];
    while (true) {
      arr.push(new Array(1000000));
    }
  }

  @Get('status')
  getStatus() {
    return 'OK\n';
  }
}
