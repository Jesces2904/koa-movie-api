 /**
 * notFoundHandler middlware file
 * This middleware is reponsible to take action in any not found request in our server.
 * 
 * @module notFoundHandler
 */

import { logger } from '../../infra/logger'
import { env } from '../../infra/env'

/**
 * Error handler middleware.
 * Uses status code from error if present.
 */
export async function errorHandler(ctx, next) {
  try {
    await next()
  } catch (err) {
    ctx.status = err.statusCode || 500
    ctx.body = err.toJSON ? err.toJSON() : { message: err.message, ...err }

    if (!env.EMIT_STACK_TRACE) {
      delete ctx.body.stack
    }
    
    logger.error('Error in request', err)
  }
}
