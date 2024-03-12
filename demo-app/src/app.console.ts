// service.ts - a nestjs provider using console decorators
import { Logger } from '@nestjs/common';
import { Console, Command } from 'nestjs-console';
import { AppService } from './app.service';

@Console()
export class AppConsole {
  private readonly logger = new Logger(AppConsole.name);

  constructor(private readonly appService: AppService) {}

  @Command({
    command: 'demo-command',
  })
  async listContent(): Promise<void> {
    this.logger.log('Demo command started');
    const res = this.appService.getHeavyCpuComputationResult();
    this.logger.log('Demo command finished with result: ' + res);
  }
}
