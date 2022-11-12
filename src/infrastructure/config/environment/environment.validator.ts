import * as Joi from 'joi'

export type EnvironmentVariableProps = {
  ENVIRONMENT: string
  GRAPHQL_PLAYGROUND: boolean
}

export const environmentValidationSchema = Joi.object<EnvironmentVariableProps>({
  ENVIRONMENT: Joi.string().valid('local', 'development', 'production'),
  GRAPHQL_PLAYGROUND: Joi.boolean().default(false)
})

export const environmentValidationOptions = {
  abortEarly: false
}
