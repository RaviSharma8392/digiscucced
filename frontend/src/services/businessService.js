

import { siteManifests } from "../data/mockBusinesses";

// ─── Primary Lookup ───────────────────────────────────────────

/**
 * Returns the site manifest for a given slug, or null if not found.
 *
 * @param {string} slug - The tenant slug (e.g. "vidyamandir")
 * @returns {object|null}
 */
export function getBusinessBySlug(slug) {
  if (!slug || typeof slug !== "string") {
    console.warn("[getBusinessBySlug] Invalid slug:", slug);
    return null;
  }

  const normalizedSlug = slug.trim().toLowerCase();
  const manifest = siteManifests[normalizedSlug];

  if (!manifest) {
    console.warn(`[getBusinessBySlug] No manifest found for slug: "${normalizedSlug}"`);
    return null;
  }

  // Integrity check: key must match inner slug
  if (manifest.slug !== normalizedSlug) {
    console.error(
      `[getBusinessBySlug] Slug mismatch! Key="${normalizedSlug}" but manifest.slug="${manifest.slug}". Fix siteManifests.`
    );
    return null;
  }

  return manifest;
}

// ─── Helper Utilities ─────────────────────────────────────────

/**
 * Returns all registered slugs.
 * Useful for generating static paths (e.g. Next.js getStaticPaths).
 *
 * @returns {string[]}
 */
export function getAllSlugs() {
  return Object.keys(siteManifests);
}

/**
 * Returns all manifests as an array.
 *
 * @returns {object[]}
 */
export function getAllManifests() {
  return Object.values(siteManifests);
}

/**
 * Returns all manifests that use a specific template.
 *
 * @param {string} templateName - e.g. "schoolTemplate1"
 * @returns {object[]}
 */
export function getManifestsByTemplate(templateName) {
  return Object.values(siteManifests).filter(
    (m) => m.template === templateName
  );
}

/**
 * Checks whether a slug exists in the registry.
 *
 * @param {string} slug
 * @returns {boolean}
 */
export function isValidSlug(slug) {
  if (!slug || typeof slug !== "string") return false;
  return slug.trim().toLowerCase() in siteManifests;
}