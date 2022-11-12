/**
 * Exceptions filter of the project
 */

export interface FormatExceptionMessage {
  message: string
  errorCode?: number
  httpStatus?: number
  description?: string
}

export interface Exception {
  badRequestException(data: FormatExceptionMessage): void
  internalServerErrorException(data?: FormatExceptionMessage): void
  forbiddenException(data?: FormatExceptionMessage): void
  UnauthorizedException(data?: FormatExceptionMessage): void
}