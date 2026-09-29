import { Module } from '@nestjs/common';
import { NestModule } from '@nestjs/common';
import { MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller.js';
//import { AppService } from './app.service.js';
import { LoggerMiddleware } from './logger/logger.middleware.js';

@Module({
  //imports: [],
  controllers: [AppController],
  //providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
