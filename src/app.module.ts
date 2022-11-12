import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { EnvironmentVariableModule } from './infrastructure/config/environment/environment.module'
import { ControllersModule } from './infrastructure/controllers/controllers.module'
import { ExceptionsModule } from './infrastructure/exceptions/exceptions.module'

@Module({
  imports: [EnvironmentVariableModule.register(), ControllersModule, ExceptionsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
