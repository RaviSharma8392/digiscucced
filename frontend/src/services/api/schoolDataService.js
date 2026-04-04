/**
 * schoolDataService.js
 * 
 * Service for school-specific data management
 * Handles school registry, matching with business config, and caching
 */

import apiClient from './api/apiClient.js';
import { environment } from '../config/environment.js';
import { STORAGE_KEYS, CACHE_DURATION } from '../config/constants.js';
import { getAllSchoolSlugs, getSchoolHomeData } from '../templates/school/schoolTemplate1/services/schoolHomeService.js';

class SchoolDataService {
  constructor() {
    this.schoolCache = new Map();
  }

  /**
   * Get school data by slug
   * Matches registry with business config
   */
  async getSchoolData(slug) {
    if (!slug) {
      console.warn('SchoolDataService: slug missing');
      return null;
    }

    try {
      // Check memory cache first
      if (this.schoolCache.has(slug)) {
        return this.schoolCache.get(slug);
      }

      // Try API if not using mock data
      if (!environment.features.mockData) {
        const data = await apiClient.get(`/school/${slug}`);
        this.schoolCache.set(slug, data);
        this.cacheSchoolData(slug, data);
        return data;
      }

      // Fall back to registry
      const data = await getSchoolHomeData(slug);
      this.schoolCache.set(slug, data);
      return data;
    } catch (error) {
      console.error(`Error fetching school data for ${slug}:`, error);

      // Try cache
      const cached = this.getCachedSchoolData(slug);
      if (cached) {
        this.schoolCache.set(slug, cached);
        return cached;
      }

      throw error;
    }
  }

  /**
   * Get all available school slugs
   */
  getAllSchoolSlugs() {
    try {
      return getAllSchoolSlugs();
    } catch (error) {
      console.error('Error fetching school slugs:', error);
      return [];
    }
  }

  /**
   * Validate school slug exists
   */
  async validateSchoolSlug(slug) {
    try {
      const data = await this.getSchoolData(slug);
      return !!data;
    } catch {
      return false;
    }
  }

  /**
   * Cache school data in localStorage
   */
  cacheSchoolData(slug, data) {
    try {
      const cacheKey = `${STORAGE_KEYS.CACHED_SCHOOL_DATA}${slug}`;
      const cacheData = {
        data,
        timestamp: Date.now(),
        expiresAt: Date.now() + CACHE_DURATION.EXTENDED,
      };
      localStorage.setItem(cacheKey, JSON.stringify(cacheData));
    } catch (error) {
      console.warn(`Failed to cache school data for ${slug}:`, error);
    }
  }

  /**
   * Get cached school data
   */
  getCachedSchoolData(slug) {
    try {
      const cacheKey = `${STORAGE_KEYS.CACHED_SCHOOL_DATA}${slug}`;
      const cached = localStorage.getItem(cacheKey);

      if (!cached) return null;

      const { data, expiresAt } = JSON.parse(cached);

      if (Date.now() > expiresAt) {
        localStorage.removeItem(cacheKey);
        return null;
      }

      return data;
    } catch (error) {
      console.warn(`Failed to retrieve cached school data for ${slug}:`, error);
      return null;
    }
  }

  /**
   * Clear school cache
   */
  clearCache(slug) {
    if (slug) {
      this.schoolCache.delete(slug);
      const cacheKey = `${STORAGE_KEYS.CACHED_SCHOOL_DATA}${slug}`;
      localStorage.removeItem(cacheKey);
    } else {
      this.schoolCache.clear();
      Object.keys(localStorage).forEach((key) => {
        if (key.startsWith(STORAGE_KEYS.CACHED_SCHOOL_DATA)) {
          localStorage.removeItem(key);
        }
      });
    }
  }
}

export default new SchoolDataService();
