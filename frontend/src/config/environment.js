/**
 * environment.js
 * 
 * Centralized environment configuration management
 * Handles different environments: development, staging, production
 */

const ENV = import.meta.env.MODE || 'development';

export const environment = {
  isDevelopment: ENV === 'development',
  isProduction: ENV === 'production',
  isStaging: ENV === 'staging',
  mode: ENV,

  // API Configuration
  api: {
    baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api',
    timeout: 30000,
    retryAttempts: 3,
    retryDelay: 1000,
  },

  // App Configuration
  app: {
    name: 'Agency CMS',
    version: '1.0.0',
    description: 'Multi-template CMS for schools, coaching, and homestays',
  },

  // Cache Configuration
  cache: {
    enabled: true,
    duration: 3600000, // 1 hour
    maxSize: 100, // max items in cache
  },

  // Feature Flags
  features: {
    analytics: !import.meta.env.VITE_DISABLE_ANALYTICS,
    errorTracking: !import.meta.env.VITE_DISABLE_ERROR_TRACKING,
    mockData: import.meta.env.VITE_USE_MOCK_DATA ?? true,
  },

  // Logging Configuration
  logging: {
    level: import.meta.env.VITE_LOG_LEVEL || (ENV === 'production' ? 'error' : 'debug'),
    enableConsole: ENV !== 'production',
  },
};

export default environment;
