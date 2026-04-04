import { manifestRegistry, loadManifest } from "../manifests/index.js";

const _cache = new Map();

export async function getBusinessBySlug(slug) {
  if (!slug || typeof slug !== "string") {
    console.warn("[getBusinessBySlug] Invalid slug:", slug);
    return null;
  }

  const normalizedSlug = slug.trim().toLowerCase(); // ← must be declared FIRST

  if (_cache.has(normalizedSlug)) return _cache.get(normalizedSlug);

  if (!(normalizedSlug in manifestRegistry)) {
    console.warn(`[getBusinessBySlug] No manifest registered for: "${normalizedSlug}"`);
    return null;
  }

  try {
    const manifest = await loadManifest(normalizedSlug);
    if (manifest.slug !== normalizedSlug) {
      console.error(`[getBusinessBySlug] Slug mismatch: key="${normalizedSlug}" manifest.slug="${manifest.slug}"`);
      return null;
    }
    _cache.set(normalizedSlug, manifest);
    return manifest;
  } catch (err) {
    console.error(`[getBusinessBySlug] Failed to load "${normalizedSlug}":`, err);
    return null;
  }
}

export function getAllSlugs() {
  return Object.keys(manifestRegistry);
}

export function isValidSlug(slug) {
  if (!slug || typeof slug !== "string") return false;
  return slug.trim().toLowerCase() in manifestRegistry;
}

export async function getAllManifests() {
  const results = await Promise.all(getAllSlugs().map(getBusinessBySlug));
  return results.filter(Boolean);
}

export async function getManifestsByTemplate(templateName) {
  const all = await getAllManifests();
  return all.filter((m) => m.template === templateName);
}