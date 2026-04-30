/**
 * useSchoolData.js
 *
 * Custom hook for loading a school's page data from /public/configs/{slug}/{page}.json
 * via the core manifest loader (fetchPageData).
 *
 * Usage:
 *   const { data, loading, error } = useSchoolData(slug, 'home');
 */

import { useState, useEffect, useRef } from 'react';
import { fetchPageData } from '../../core/manifest/manifestLoader';

/**
 * @param {string} slug     - Business slug
 * @param {string} pageKey  - Page key: 'home' | 'contact' | 'courses' | etc.
 * @returns {{ data: object|null, loading: boolean, error: string|null }}
 */
export function useSchoolData(slug, pageKey = 'home') {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const fetchedKey = useRef(null);

  useEffect(() => {
    if (!slug) {
      setData(null);
      setLoading(false);
      return;
    }

    const cacheKey = `${slug}:${pageKey}`;
    if (fetchedKey.current === cacheKey) {
      setLoading(false);
      return;
    }

    let active = true;
    setLoading(true);
    setError(null);

    fetchPageData(slug, pageKey)
      .then((result) => {
        if (!active) return;
        setData(result);
        fetchedKey.current = cacheKey;
      })
      .catch((err) => {
        if (!active) return;
        console.error(`[useSchoolData] Failed to load "${pageKey}" for "${slug}":`, err);
        setError(err.message || 'Failed to load data');
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, [slug, pageKey]);

  return { data, loading, error };
}

export default useSchoolData;
