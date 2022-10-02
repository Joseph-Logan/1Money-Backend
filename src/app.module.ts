import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { EnvironmentVariableModule } from './config/environment/environment.module'

@Module({
  imports: [
    EnvironmentVariableModule.register()
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
