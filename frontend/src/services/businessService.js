import { manifestRegistry, loadManifest } from "../manifests/index.js";

const _cache = new Map();

export async function getBusinessBySlug(slug) {
  if (!slug || typeof slug !== "string") {
    console.warn("[getBusinessBySlug] Invalid slug:", slug);
    return null;
  }

  const normalizedSlug = slug.trim().toLowerCase();

  // Return cached promise/result
  if (_cache.has(normalizedSlug)) {
    return _cache.get(normalizedSlug);
  }

  if (!Object.hasOwn(manifestRegistry, normalizedSlug)) {
    console.warn(`[getBusinessBySlug] No manifest registered for: "${normalizedSlug}"`);
    return null;
  }

  try {
    const promise = loadManifest(normalizedSlug).then((manifest) => {
      if (!manifest) return null;

      if (manifest.slug !== normalizedSlug) {
        console.error(
          `[getBusinessBySlug] Slug mismatch: key="${normalizedSlug}" manifest.slug="${manifest.slug}"`
        );
        return null;
      }

      // Optional safety
      Object.freeze(manifest);

      return manifest;
    });

    _cache.set(normalizedSlug, promise);

    return await promise;

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
  const normalized = slug.trim().toLowerCase();
  return Object.hasOwn(manifestRegistry, normalized);
}

export async function getAllManifests() {
  const results = await Promise.all(getAllSlugs().map(getBusinessBySlug));
  return results.filter(Boolean);
}

export async function getManifestsByTemplate(templateName) {
  const all = await getAllManifests();
  return all.filter((m) => m.template === templateName);
}