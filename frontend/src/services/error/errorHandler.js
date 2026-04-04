/**
 * errorHandler.js
 * 
 * Centralized error handling and logging
 * Provides consistent error formatting and logging across the app
 */

import { environment } from '../config/environment.js';
import { ERROR_MESSAGES } from '../config/constants.js';

class Logger {
  debug(message, data = null) {
    if (environment.logging.level === 'debug' && environment.logging.enableConsole) {
      console.debug(`[DEBUG] ${message}`, data);
    }
  }

  info(message, data = null) {
    if (
      ['debug', 'info'].includes(environment.logging.level) &&
      environment.logging.enableConsole
    ) {
      console.info(`[INFO] ${message}`, data);
    }
  }

  warn(message, data = null) {
    if (
      ['debug', 'info', 'warn'].includes(environment.logging.level) &&
      environment.logging.enableConsole
    ) {
      console.warn(`[WARN] ${message}`, data);
    }
  }

  error(message, error = null) {
    if (environment.logging.enableConsole) {
      console.error(`[ERROR] ${message}`, error);
    }

    if (environment.features.errorTracking) {
      this.trackError(message, error);
    }
  }

  /**
   * Track error to external service (Sentry, LogRocket, etc.)
   */
  trackError(message, error) {
    // TODO: Implement error tracking service integration
    // Example: Sentry.captureException(error)
  }
}

class ErrorHandler {
  static handle(error, context = '') {
    const logger = new Logger();

    // Format error message
    const errorMessage = this.formatError(error);

    logger.error(`${context}: ${errorMessage.message}`, error);

    return errorMessage;
  }

  static formatError(error) {
    if (!error) {
      return {
        message: ERROR_MESSAGES.UNKNOWN_ERROR,
        code: 'UNKNOWN_ERROR',
        status: 500,
      };
    }

    if (error instanceof Error) {
      return {
        message: error.message || ERROR_MESSAGES.UNKNOWN_ERROR,
        code: error.code || error.name,
        stack: error.stack,
        status: error.status || 500,
      };
    }

    if (typeof error === 'string') {
      return {
        message: error,
        code: 'STRING_ERROR',
        status: 500,
      };
    }

    if (typeof error === 'object') {
      return {
        message: error.message || ERROR_MESSAGES.UNKNOWN_ERROR,
        code: error.code || 'OBJECT_ERROR',
        status: error.status || 500,
        ...error,
      };
    }

    return {
      message: ERROR_MESSAGES.UNKNOWN_ERROR,
      code: 'UNKNOWN_ERROR',
      status: 500,
    };
  }

  /**
   * Handle specific error types
   */
  static handleNetworkError(error) {
    return this.handle(error, 'Network Error');
  }

  static handleValidationError(error) {
    return this.handle(error, 'Validation Error');
  }

  static handleAuthError(error) {
    return this.handle(error, 'Authentication Error');
  }

  static handleServerError(error) {
    return this.handle(error, 'Server Error');
  }
}

export { Logger, ErrorHandler };
export default new Logger();
