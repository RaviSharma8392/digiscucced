/**
 * validation.js
 * 
 * Form and data validation utilities
 */

/**
 * Validate email format
 */
export function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

/**
 * Validate phone number (Indian format)
 */
export function validatePhoneNumber(phone) {
  const regex = /^(\+91[\s]?)?[0]?[6-9]\d{9}$/;
  return regex.test(phone.replace(/\s+/g, ''));
}

/**
 * Validate URL
 */
export function validateUrl(url) {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

/**
 * Validate required field
 */
export function validateRequired(value) {
  if (typeof value === 'string') {
    return value.trim().length > 0;
  }
  return value !== null && value !== undefined;
}

/**
 * Validate minimum length
 */
export function validateMinLength(value, minLength) {
  if (!value) return false;
  return value.toString().length >= minLength;
}

/**
 * Validate maximum length
 */
export function validateMaxLength(value, maxLength) {
  if (!value) return true;
  return value.toString().length <= maxLength;
}

/**
 * Validate number range
 */
export function validateRange(value, min, max) {
  const num = Number(value);
  return num >= min && num <= max;
}

/**
 * Validate date format (YYYY-MM-DD)
 */
export function validateDateFormat(date) {
  const regex = /^\d{4}-\d{2}-\d{2}$/;
  if (!regex.test(date)) return false;
  
  const d = new Date(date);
  return d instanceof Date && !isNaN(d);
}

/**
 * Validate entire form
 */
export function validateForm(formData, rules) {
  const errors = {};

  Object.keys(rules).forEach((field) => {
    const value = formData[field];
    const fieldRules = rules[field];

    fieldRules.forEach((rule) => {
      const error = validateField(value, rule);
      if (error) {
        errors[field] = error;
      }
    });
  });

  return errors;
}

/**
 * Validate single field against rules
 */
export function validateField(value, rule) {
  switch (rule.type) {
    case 'required':
      if (!validateRequired(value)) {
        return rule.message || 'This field is required';
      }
      break;

    case 'email':
      if (value && !validateEmail(value)) {
        return rule.message || 'Invalid email address';
      }
      break;

    case 'phone':
      if (value && !validatePhoneNumber(value)) {
        return rule.message || 'Invalid phone number';
      }
      break;

    case 'url':
      if (value && !validateUrl(value)) {
        return rule.message || 'Invalid URL';
      }
      break;

    case 'minLength':
      if (!validateMinLength(value, rule.value)) {
        return (
          rule.message ||
          `Must be at least ${rule.value} characters long`
        );
      }
      break;

    case 'maxLength':
      if (!validateMaxLength(value, rule.value)) {
        return (
          rule.message || `Must not exceed ${rule.value} characters`
        );
      }
      break;

    case 'range':
      if (!validateRange(value, rule.min, rule.max)) {
        return (
          rule.message ||
          `Must be between ${rule.min} and ${rule.max}`
        );
      }
      break;

    case 'custom':
      if (typeof rule.validator === 'function') {
        if (!rule.validator(value)) {
          return rule.message || 'Invalid value';
        }
      }
      break;

    default:
      break;
  }

  return null;
}

export default {
  validateEmail,
  validatePhoneNumber,
  validateUrl,
  validateRequired,
  validateMinLength,
  validateMaxLength,
  validateRange,
  validateDateFormat,
  validateForm,
  validateField,
};
