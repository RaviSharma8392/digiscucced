/**
 * useSchoolData.js
 * 
 * Custom hook for fetching school data
 * Handles loading, error, and caching states
 */

import { useState, useEffect, useRef } from 'react';
import schoolDataService from '../../services/api/schoolDataService.js';
import logger from '../../services/error/errorHandler.js';

export function useSchoolData(slug) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const fetchedSlug = useRef(null);

  useEffect(() => {
    if (!slug) {
      setData(null);
      setLoading(false);
      return;
    }

    if (fetchedSlug.current === slug) {
      setLoading(false);
      return;
    }

    let active = true;
    setLoading(true);

    async function fetchData() {
      try {
        const schoolData = await schoolDataService.getSchoolData(slug);

        if (!active) return;

        setData(schoolData);
        setError(null);
        fetchedSlug.current = slug;

        logger.info(`School data loaded for slug: ${slug}`);
      } catch (err) {
        if (!active) return;

        logger.error(`Failed to load school data for slug: ${slug}`, err);
        setError(err.message || 'Failed to load school data');
        setData(null);
      } finally {
        if (active) setLoading(false);
      }
    }

    fetchData();

    return () => {
      active = false;
    };
  }, [slug]);

  return { data, loading, error };
}

export default useSchoolData;
