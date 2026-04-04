/**
 * constants.js
 * 
 * Application-wide constants
 * Use this for any hard-coded values that don't belong in environment
 */

// Business Types
export const BUSINESS_TYPES = Object.freeze({
  SCHOOL: 'school',
  COACHING: 'coaching',
  HOMESTAY: 'homestay',
});

// Template Types
export const TEMPLATE_TYPES = Object.freeze({
  // School Templates
  SCHOOL_1: 'schoolTemplate1',
  SCHOOL_2: 'schoolTemplate2',
  SCHOOL_3: 'schoolTemplate3',

  // Coaching Templates
  COACHING_1: 'coachingTemplate1',
  COACHING_2: 'coachingTemplate2',
  COACHING_3: 'coachingTemplate3',

  // Homestay Templates
  HOMESTAY_1: 'homestayTemplate1',
  HOMESTAY_2: 'homestayTemplate2',
  HOMESTAY_3: 'homestayTemplate3',
});

// HTTP Status Codes
export const HTTP_STATUS = Object.freeze({
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  CONFLICT: 409,
  INTERNAL_SERVER_ERROR: 500,
  SERVICE_UNAVAILABLE: 503,
});

// Error Messages
export const ERROR_MESSAGES = Object.freeze({
  NETWORK_ERROR: 'Network error. Please check your connection.',
  SERVER_ERROR: 'Server error. Please try again later.',
  NOT_FOUND: 'Resource not found.',
  UNAUTHORIZED: 'You are not authorized to access this resource.',
  VALIDATION_ERROR: 'Please check your input and try again.',
  UNKNOWN_ERROR: 'An unexpected error occurred.',
});

// Local Storage Keys
export const STORAGE_KEYS = Object.freeze({
  USER_PREFERENCES: 'user_preferences',
  CACHED_BUSINESS: 'cached_business_',
  CACHED_SCHOOL_DATA: 'cached_school_data_',
  THEME_PREFERENCE: 'theme_preference',
});

// Route Paths
export const ROUTES = Object.freeze({
  HOME: '/',
  SCHOOL: '/school',
  COACHING: '/coaching',
  HOMESTAY: '/homestay',
  ABOUT: '/about',
  ADMISSIONS: '/admissions',
  CONTACT: '/contact',
  NOT_FOUND: '/404',
});

// Cache Duration (in milliseconds)
export const CACHE_DURATION = Object.freeze({
  SHORT: 5 * 60 * 1000, // 5 minutes
  MEDIUM: 30 * 60 * 1000, // 30 minutes
  LONG: 60 * 60 * 1000, // 1 hour
  EXTENDED: 24 * 60 * 60 * 1000, // 24 hours
});

export default {
  BUSINESS_TYPES,
  TEMPLATE_TYPES,
  HTTP_STATUS,
  ERROR_MESSAGES,
  STORAGE_KEYS,
  ROUTES,
  CACHE_DURATION,
};
