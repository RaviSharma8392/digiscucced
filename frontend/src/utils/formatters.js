/**
 * formatters.js
 * 
 * Data formatting utilities for display purposes
 */

/**
 * Format date to readable format
 * Example: "2026-04-03" → "April 3, 2026"
 */
export function formatDate(date, locale = 'en-US') {
  if (!date) return '';

  const d = typeof date === 'string' ? new Date(date) : date;
  
  if (isNaN(d)) return '';

  return d.toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

/**
 * Format date and time
 */
export function formatDateTime(date, locale = 'en-US') {
  if (!date) return '';

  const d = typeof date === 'string' ? new Date(date) : date;
  
  if (isNaN(d)) return '';

  return d.toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}

/**
 * Format time only
 * Example: "14:30:00" → "2:30 PM"
 */
export function formatTime(date, locale = 'en-US') {
  if (!date) return '';

  const d = typeof date === 'string' ? new Date(date) : date;
  
  if (isNaN(d)) return '';

  return d.toLocaleTimeString(locale, {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });
}

/**
 * Format number with commas
 * Example: 1000000 → "10,00,000" (Indian style)
 */
export function formatNumber(num, useIndianStyle = true) {
  if (num === null || num === undefined) return '';

  const numStr = num.toString();
  
  if (useIndianStyle) {
    // Indian numbering: 10,00,000
    return numStr.replace(/\B(?=(\d{2})+(?!\d))/g, ',');
  }

  // Standard: 1,000,000
  return numStr.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

/**
 * Format currency
 * Example: 50000 → "₹50,00,000"
 */
export function formatCurrency(amount, currency = 'INR', locale = 'en-IN') {
  if (amount === null || amount === undefined) return '';

  const formatter = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });

  return formatter.format(amount);
}

/**
 * Format file size
 * Example: 1024 → "1 KB"
 */
export function formatFileSize(bytes) {
  if (!bytes) return '0 B';

  const sizes = ['B', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(bytes) / Math.log(1024));

  const value = (bytes / Math.pow(1024, i)).toFixed(2);
  return `${value} ${sizes[i]}`;
}

/**
 * Format percentage
 * Example: 0.85 → "85%"
 */
export function formatPercentage(value, decimals = 0) {
  if (value === null || value === undefined) return '';

  const percentage = (value * 100).toFixed(decimals);
  return `${percentage}%`;
}

/**
 * Humanize relative time
 * Example: createDate 2 days ago → "2 days ago"
 */
export function formatRelativeTime(date, locale = 'en-US') {
  if (!date) return '';

  const d = typeof date === 'string' ? new Date(date) : date;
  
  if (isNaN(d)) return '';

  const rtf = new Intl.RelativeTimeFormat(locale, { numeric: 'auto' });

  const now = new Date();
  const diffMs = d - now;
  const diffSecs = Math.floor(diffMs / 1000);

  if (Math.abs(diffSecs) < 60) {
    return rtf.format(diffSecs, 'second');
  }

  const diffMins = Math.floor(diffSecs / 60);
  if (Math.abs(diffMins) < 60) {
    return rtf.format(diffMins, 'minute');
  }

  const diffHours = Math.floor(diffMins / 60);
  if (Math.abs(diffHours) < 24) {
    return rtf.format(diffHours, 'hour');
  }

  const diffDays = Math.floor(diffHours / 24);
  if (Math.abs(diffDays) < 7) {
    return rtf.format(diffDays, 'day');
  }

  const diffWeeks = Math.floor(diffDays / 7);
  if (Math.abs(diffWeeks) < 4) {
    return rtf.format(diffWeeks, 'week');
  }

  const diffMonths = Math.floor(diffDays / 30);
  if (Math.abs(diffMonths) < 12) {
    return rtf.format(diffMonths, 'month');
  }

  const diffYears = Math.floor(diffMonths / 12);
  return rtf.format(diffYears, 'year');
}

/**
 * Format address
 * Example: { street: '123 Main', city: 'NYC', state: 'NY', zip: '10001' }
 *          → "123 Main, NYC, NY 10001"
 */
export function formatAddress(address) {
  if (!address) return '';

  const parts = [];

  if (address.street) parts.push(address.street);
  if (address.city) parts.push(address.city);
  if (address.state) parts.push(address.state);
  if (address.zip) parts.push(address.zip);

  return parts.join(', ');
}

/**
 * Format person name
 * Example: { firstName: 'John', lastName: 'Doe' } → "John Doe"
 */
export function formatPersonName(person) {
  if (!person) return '';

  const firstName = person.firstName || person.first_name || '';
  const lastName = person.lastName || person.last_name || '';
  const middleName = person.middleName || person.middle_name || '';

  return [firstName, middleName, lastName]
    .filter((part) => part.trim())
    .join(' ');
}

/**
 * Format text to title case
 * Example: "hello world" → "Hello World"
 */
export function formatTitleCase(text) {
  if (!text) return '';

  return text
    .toLowerCase()
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

/**
 * Format text to sentence case
 * Example: "hello world" → "Hello world"
 */
export function formatSentenceCase(text) {
  if (!text) return '';

  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}

export default {
  formatDate,
  formatDateTime,
  formatTime,
  formatNumber,
  formatCurrency,
  formatFileSize,
  formatPercentage,
  formatRelativeTime,
  formatAddress,
  formatPersonName,
  formatTitleCase,
  formatSentenceCase,
};
