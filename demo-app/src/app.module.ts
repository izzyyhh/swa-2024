import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConsoleModule } from 'nestjs-console';
import { AppConsole } from './app.console';
import { AppService } from './app.service';

@Module({
  imports: [ConsoleModule],
  providers: [AppService, AppConsole],
  controllers: [AppController],
})
export class AppModule {}
