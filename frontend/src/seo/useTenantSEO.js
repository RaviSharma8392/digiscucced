/**
 * useTenantSEO.js
 *
 * A hook that generates SEO metadata from a business manifest.
 * Use this in pages that need to pass custom SEO props to SEOProvider.
 *
 * Example:
 *   const seo = useTenantSEO(business, { pageTitle: 'About Us' });
 *   return <SEOProvider {...seo} />;
 */
import { useMemo } from 'react';

export function useTenantSEO(business, overrides = {}) {
  return useMemo(() => {
    if (!business) return {};

    const seo = business.seo || {};
    const brand = business.brand || {};
    const slug = business.slug || '';

    const baseUrl =
      typeof window !== 'undefined'
        ? `${window.location.origin}/${slug}`
        : '';

    return {
      business,
      pageTitle: overrides.pageTitle || null,
      pageDescription: overrides.pageDescription || seo.description || null,
      canonical: overrides.canonical || `${baseUrl}${overrides.path || ''}`,
      schema: overrides.schema || null,
    };
  }, [business, overrides.pageTitle, overrides.pageDescription, overrides.path, overrides.schema]);
}
