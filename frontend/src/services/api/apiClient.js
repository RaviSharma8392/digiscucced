/**
 * apiClient.js
 * 
 * Centralized HTTP client with:
 * - Request/response interceptors
 * - Retry logic
 * - Error handling
 * - Cache management
 */

import { environment } from '../config/environment.js';
import { HTTP_STATUS, ERROR_MESSAGES } from '../config/constants.js';

class ApiClient {
  constructor(config = {}) {
    this.baseURL = config.baseURL || environment.api.baseURL;
    this.timeout = config.timeout || environment.api.timeout;
    this.retryAttempts = config.retryAttempts || environment.api.retryAttempts;
    this.retryDelay = config.retryDelay || environment.api.retryDelay;
    this.cache = new Map();
  }

  /**
   * Fetch wrapper with retry logic and error handling
   */
  async request(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`;
    const config = {
      method: options.method || 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    };

    let lastError = null;

    for (let attempt = 0; attempt <= this.retryAttempts; attempt++) {
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), this.timeout);

        const response = await fetch(url, {
          ...config,
          signal: controller.signal,
        });

        clearTimeout(timeoutId);

        if (!response.ok) {
          this.handleErrorResponse(response);
        }

        return await response.json();
      } catch (error) {
        lastError = error;

        if (attempt < this.retryAttempts) {
          await this.delay(this.retryDelay * Math.pow(2, attempt));
          continue;
        }

        throw this.handleError(error);
      }
    }

    throw lastError;
  }

  /**
   * GET request
   */
  get(endpoint, options = {}) {
    // Check cache for GET requests
    if (
      environment.cache.enabled &&
      !options.skipCache &&
      this.cache.has(endpoint)
    ) {
      const cached = this.cache.get(endpoint);
      if (cached.expiry > Date.now()) {
        return Promise.resolve(cached.data);
      }
      this.cache.delete(endpoint);
    }

    return this.request(endpoint, { ...options, method: 'GET' }).then(
      (data) => {
        if (environment.cache.enabled) {
          this.cache.set(endpoint, {
            data,
            expiry: Date.now() + environment.cache.duration,
          });
        }
        return data;
      }
    );
  }

  /**
   * POST request
   */
  post(endpoint, data = {}, options = {}) {
    return this.request(endpoint, {
      ...options,
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  /**
   * PUT request
   */
  put(endpoint, data = {}, options = {}) {
    return this.request(endpoint, {
      ...options,
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  /**
   * DELETE request
   */
  delete(endpoint, options = {}) {
    return this.request(endpoint, { ...options, method: 'DELETE' });
  }

  /**
   * Handle HTTP error responses
   */
  handleErrorResponse(response) {
    const errorMap = {
      [HTTP_STATUS.BAD_REQUEST]: ERROR_MESSAGES.VALIDATION_ERROR,
      [HTTP_STATUS.UNAUTHORIZED]: ERROR_MESSAGES.UNAUTHORIZED,
      [HTTP_STATUS.FORBIDDEN]: ERROR_MESSAGES.UNAUTHORIZED,
      [HTTP_STATUS.NOT_FOUND]: ERROR_MESSAGES.NOT_FOUND,
      [HTTP_STATUS.INTERNAL_SERVER_ERROR]: ERROR_MESSAGES.SERVER_ERROR,
      [HTTP_STATUS.SERVICE_UNAVAILABLE]: ERROR_MESSAGES.SERVER_ERROR,
    };

    throw new Error(
      errorMap[response.status] || ERROR_MESSAGES.UNKNOWN_ERROR
    );
  }

  /**
   * Handle fetch errors
   */
  handleError(error) {
    if (error.name === 'AbortError') {
      return new Error('Request timeout');
    }

    if (error instanceof TypeError && error.message.includes('fetch')) {
      return new Error(ERROR_MESSAGES.NETWORK_ERROR);
    }

    return error;
  }

  /**
   * Clear cache
   */
  clearCache() {
    this.cache.clear();
  }

  /**
   * Clear specific cache entry
   */
  clearCacheEntry(endpoint) {
    this.cache.delete(endpoint);
  }

  /**
   * Delay helper for exponential backoff
   */
  delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}

export default new ApiClient();
