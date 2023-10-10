import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { config } from './config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal:true,
      load:[config]
    }),
    TodoModule,MongooseModule.forRootAsync({
      inject:[ConfigService],
      useFactory:async (configSecret:ConfigService) => ({
        uri:configSecret.get("dataBaseUrl")
      })
    })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
