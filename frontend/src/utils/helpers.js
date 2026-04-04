/**
 * helpers.js
 * 
 * Common utility functions used across the application
 */

/**
 * Format phone number
 */
export function formatPhoneNumber(phone) {
  if (!phone) return '';
  const cleaned = phone.replace(/\D/g, '');
  if (cleaned.length === 10) {
    return `+91-${cleaned.slice(0, 4)}-${cleaned.slice(4, 7)}-${cleaned.slice(7)}`;
  }
  return phone;
}

/**
 * Format email to clickable mailto link
 */
export function formatEmailLink(email) {
  return {
    href: `mailto:${email}`,
    text: email,
  };
}

/**
 * Truncate text to specific length
 */
export function truncateText(text, maxLength = 100, suffix = '...') {
  if (!text) return '';
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength - suffix.length) + suffix;
}

/**
 * Capitalize first letter
 */
export function capitalizeFirst(text) {
  if (!text) return '';
  return text.charAt(0).toUpperCase() + text.slice(1);
}

/**
 * Convert slug to readable title
 * Example: "sunrise-public-school" → "Sunrise Public School"
 */
export function slugToTitle(slug) {
  if (!slug) return '';
  return slug
    .split('-')
    .map((word) => capitalizeFirst(word))
    .join(' ');
}

/**
 * Convert title to slug
 * Example: "Sunrise Public School" → "sunrise-public-school"
 */
export function titleToSlug(title) {
  if (!title) return '';
  return title
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]/g, '');
}

/**
 * Check if object is empty
 */
export function isEmpty(obj) {
  if (obj === null || obj === undefined) return true;
  if (Array.isArray(obj)) return obj.length === 0;
  if (typeof obj === 'object') return Object.keys(obj).length === 0;
  if (typeof obj === 'string') return obj.trim().length === 0;
  return false;
}

/**
 * Deep merge objects
 */
export function deepMerge(target, source) {
  const output = { ...target };

  if (isObject(target) && isObject(source)) {
    Object.keys(source).forEach((key) => {
      if (isObject(source[key])) {
        if (!(key in target)) Object.assign(output, { [key]: source[key] });
        else output[key] = deepMerge(target[key], source[key]);
      } else {
        Object.assign(output, { [key]: source[key] });
      }
    });
  }

  return output;
}

/**
 * Check if value is an object
 */
export function isObject(item) {
  return item && typeof item === 'object' && !Array.isArray(item);
}

/**
 * Get value from nested object safely
 * Example: getNestedValue(obj, 'school.contact.phone')
 */
export function getNestedValue(obj, path, defaultValue = undefined) {
  const keys = path.split('.');
  let value = obj;

  for (const key of keys) {
    if (value && typeof value === 'object' && key in value) {
      value = value[key];
    } else {
      return defaultValue;
    }
  }

  return value;
}

/**
 * Retry function with exponential backoff
 */
export async function retryWithBackoff(
  fn,
  maxAttempts = 3,
  delayMs = 1000
) {
  let lastError;

  for (let attempt = 0; attempt < maxAttempts; attempt++) {
    try {
      return await fn();
    } catch (error) {
      lastError = error;
      if (attempt < maxAttempts - 1) {
        const delay = delayMs * Math.pow(2, attempt);
        await new Promise((resolve) => setTimeout(resolve, delay));
      }
    }
  }

  throw lastError;
}

/**
 * Debounce function - useful for search, resize handlers
 */
export function debounce(fn, delayMs = 300) {
  let timeoutId;

  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), delayMs);
  };
}

/**
 * Throttle function - useful for scroll, resize events
 */
export function throttle(fn, delayMs = 300) {
  let lastCall = 0;

  return function (...args) {
    const now = Date.now();
    if (now - lastCall < delayMs) return;
    lastCall = now;
    fn(...args);
  };
}

export default {
  formatPhoneNumber,
  formatEmailLink,
  truncateText,
  capitalizeFirst,
  slugToTitle,
  titleToSlug,
  isEmpty,
  deepMerge,
  isObject,
  getNestedValue,
  retryWithBackoff,
  debounce,
  throttle,
};
