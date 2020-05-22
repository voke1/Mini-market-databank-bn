import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { MarketsController } from './markets/markets.controller';
import { MarketsService } from './markets/markets.service';
import { MarketsModule } from './markets/markets.module';
import { UserService } from './user/user.service';

@Module({
  imports: [MarketsModule],
  controllers: [AppController, UserController, MarketsController],
  providers: [AppService, MarketsService, UserService],
})
export class AppModule {}
