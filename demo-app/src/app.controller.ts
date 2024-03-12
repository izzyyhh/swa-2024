import { Controller, Get, Header, Logger } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  private readonly logger = new Logger(AppController.name);

  constructor(private readonly appService: AppService) {}

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

  @Get('heavy-cpu-computation')
  getHeavyComputationResult() {
    return this.appService.getHeavyCpuComputationResult();
  }

  @Get('heavy-memory-computation')
  getOom() {
    return this.appService.getHeavyMemoryComputationResult();
  }

  @Get('status')
  getStatus() {
    return 'OK\n';
  }
}
