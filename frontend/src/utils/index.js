/**
 * utils/index.js
 * 
 * Central export for all utility functions
 * Makes imports cleaner: import { validateEmail } from '@/utils'
 */

export * from './helpers.js';
export * from './validation.js';
export * from './formatters.js';

// Default export for backward compatibility
export { default as helpers } from './helpers.js';
export { default as validation } from './validation.js';
export { default as formatters } from './formatters.js';
