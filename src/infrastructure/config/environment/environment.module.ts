import { DynamicModule, Module } from '@nestjs/common'
import { ConfigModule, ConfigModuleOptions, ConfigService } from '@nestjs/config'
import { ENV_FILE_PATH } from './environment.constant'
import { environmentValidationSchema, environmentValidationOptions } from './environment.validator'

@Module({})
export class EnvironmentVariableModule {
  static register(configOptions?: ConfigModuleOptions): DynamicModule {
    const defaultConfigurationOptions: ConfigModuleOptions = {
      envFilePath: ENV_FILE_PATH,
      validationSchema: environmentValidationSchema,
      validationOptions: environmentValidationOptions,
      isGlobal: true,
    }

    return {
      module: EnvironmentVariableModule,
      imports: [
        ConfigModule.forRoot({
          ...defaultConfigurationOptions,
          ...configOptions,
        }),
      ],
      providers: [ConfigService],
      exports: [ConfigService],
    }
  }
}
