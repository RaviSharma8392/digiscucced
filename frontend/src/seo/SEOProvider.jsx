/**
 * SEOProvider.jsx
 *
 * Centralized SEO injector for tenant pages.
 *
 * Usage:
 *   <SEOProvider business={business} pageTitle="About Us" />
 *
 * Priority for title:
 *   pageTitle prop → business.seo.title → business.brand.name → fallback
 */

import { Helmet } from 'react-helmet-async';

/**
 * @param {object} props
 * @param {object} props.business   - Validated manifest object
 * @param {string} [props.pageTitle] - Override title for this specific page
 * @param {string} [props.pageDescription] - Override description for this page
 * @param {string} [props.canonical]  - Canonical URL for this page
 * @param {object} [props.schema]   - JSON-LD schema object
 */
export default function SEOProvider({
  business,
  pageTitle,
  pageDescription,
  canonical,
  schema,
}) {
  if (!business) return null;

  const seo = business.seo || {};
  const brand = business.brand || {};
  const slug = business.slug || '';

  // ── Build title ───────────────────────────────────────────────────────────
  const title = pageTitle
    ? `${pageTitle} | ${brand.name || seo.title || 'Website'}`
    : seo.title || brand.name || 'Website';

  // ── Build description ─────────────────────────────────────────────────────
  const description = pageDescription || seo.description || '';

  // ── Build canonical ───────────────────────────────────────────────────────
  const canonicalUrl = canonical
    || seo.canonical
    || (typeof window !== 'undefined' ? window.location.href : '');

  // ── Build OG image ────────────────────────────────────────────────────────
  const ogImage = seo.ogImage || brand.logo || '';

  // ── Build JSON-LD ─────────────────────────────────────────────────────────
  const defaultSchema = {
    '@context': 'https://schema.org',
    '@type': seo.schemaType || 'Organization',
    name: brand.name || title,
    description,
    url: canonicalUrl,
    logo: brand.logo || ogImage,
    telephone: business.contact?.phone || '',
    email: business.contact?.email || '',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IN',
    },
  };

  const structuredData = schema || defaultSchema;

  return (
    <Helmet key={slug}>
      {/* ── Primary ───────────────────────────────────── */}
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
      {seo.keywords && <meta name="keywords" content={seo.keywords} />}
      <meta name="robots" content="index, follow" />
      {brand.name && <meta name="author" content={brand.name} />}
      {seo.themeColor && <meta name="theme-color" content={seo.themeColor} />}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      {brand.favicon && <link rel="icon" href={brand.favicon} />}

      {/* ── Open Graph ────────────────────────────────── */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={brand.name || ''} />
      <meta property="og:title" content={title} />
      {description && <meta property="og:description" content={description} />}
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
      {ogImage && <meta property="og:image" content={ogImage} />}
      <meta property="og:locale" content="en_IN" />

      {/* ── Twitter ───────────────────────────────────── */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      {description && <meta name="twitter:description" content={description} />}
      {ogImage && <meta name="twitter:image" content={ogImage} />}

      {/* ── JSON-LD Structured Data ───────────────────── */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
}
