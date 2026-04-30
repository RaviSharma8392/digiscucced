import { validateManifest } from './manifestValidator';

/**
 * ─────────────────────────────────────────────
 * ENV SAFE LOGGER (PRODUCTION SAFE)
 * ─────────────────────────────────────────────
 */
const IS_PROD =
  import.meta?.env?.PROD || process.env.NODE_ENV === 'production';

const log = {
  warn: (...a) => !IS_PROD && console.warn(...a),
  error: (...a) => !IS_PROD && console.error(...a),
  log: (...a) => !IS_PROD && console.log(...a),
};

/**
 * ─────────────────────────────────────────────
 * CACHE MAPS
 * ─────────────────────────────────────────────
 */
const _inflight = new Map();
const _cache = new Map();

const _pageInflight = new Map();
const _pageCache = new Map();

/**
 * ─────────────────────────────────────────────
 * LOAD MANIFEST (MAIN ENTRY)
 * ─────────────────────────────────────────────
 */
export async function loadManifest(slug, options = {}) {
  if (!slug || typeof slug !== 'string') {
    throw new Error(`[ManifestLoader] Invalid slug: "${slug}"`);
  }

  const key = slug.trim().toLowerCase();

  if (_cache.has(key)) return _cache.get(key);
  if (_inflight.has(key)) return _inflight.get(key);

  const promise = _fetchAndValidate(key, options.signal)
    .then((manifest) => {
      if (!manifest || typeof manifest !== "object") {
        throw new Error(
          `[ManifestLoader] Invalid manifest after validation for "${key}"`
        );
      }

      _cache.set(key, manifest);
      _inflight.delete(key);
      return manifest;
    })
    .catch((err) => {
      _inflight.delete(key); // ✅ always clear inflight

      // Do NOT rethrow AbortErrors — just let the next fetch proceed cleanly.
      // Rethrowing would leave callers (e.g. StrictMode remount) stuck on
      // a rejected promise with no way to retry.
      if (err.name === 'AbortError') return null;

      throw err;
    });

  _inflight.set(key, promise);
  return promise;
}

/**
 * ─────────────────────────────────────────────
 * FETCH + VALIDATE MANIFEST
 * ─────────────────────────────────────────────
 */
async function _fetchAndValidate(slug, signal) {
  const url = `/configs/${slug}/manifest.json`;

  log.log("[ManifestLoader] Fetching:", url);

  let response;

  try {
    response = await fetch(url, { signal });
    log.log("[ManifestLoader] Response status:", response.status);
  } catch (err) {
    if (err.name === "AbortError") throw err;
    throw new Error(
      `[ManifestLoader] Network error for "${slug}": ${err.message}`
    );
  }

  if (!response.ok) {
    throw new Error(
      `[ManifestLoader] Manifest not found "${slug}" → HTTP ${response.status}`
    );
  }

  const text = await response.text();
  const trimmed = text.trim().toLowerCase();

  if (
    trimmed.startsWith("<!doctype") ||
    trimmed.startsWith("<html") ||
    response.headers.get("content-type")?.includes("text/html")
  ) {
    throw new Error(
      `[ManifestLoader] HTML response detected instead of JSON for "${slug}". Check /public/configs/${slug}/manifest.json`
    );
  }

  let data;

  try {
    data = JSON.parse(text);
  } catch (err) {
    throw new Error(
      `[ManifestLoader] Invalid JSON for "${slug}": ${err.message}`
    );
  }

  const validated = validateManifest(slug, data);

  if (!validated || typeof validated !== "object") {
    throw new Error(`[ManifestLoader] Validation failed for "${slug}"`);
  }

  return Object.freeze(validated);
}

/**
 * ─────────────────────────────────────────────
 * PAGE DATA LOADER
 * ─────────────────────────────────────────────
 */
export async function fetchPageData(slug, pageKey) {
  if (!slug || !pageKey) return null;

  const key = `${slug.toLowerCase()}:${pageKey}`;

  if (_pageCache.has(key)) return _pageCache.get(key);
  if (_pageInflight.has(key)) return _pageInflight.get(key);

  const promise = _fetchPage(slug, pageKey)
    .then((data) => {
      _pageCache.set(key, data);
      _pageInflight.delete(key);
      return data;
    })
    .catch((err) => {
      _pageInflight.delete(key);

      log.warn(
        `[ManifestLoader] Page fetch failed "${slug}/${pageKey}":`,
        err.message
      );

      return null;
    });

  _pageInflight.set(key, promise);
  return promise;
}

/**
 * ─────────────────────────────────────────────
 * INTERNAL PAGE FETCH
 * ─────────────────────────────────────────────
 */
async function _fetchPage(slug, pageKey) {
  const url = `/configs/${slug}/${pageKey}.json`;

  const response = await fetch(url);

  if (!response.ok) {
    if (response.status === 404) return null;
    throw new Error(`HTTP ${response.status}`);
  }

  const text = await response.text();
  const trimmed = text.trim().toLowerCase();

  if (
    trimmed.startsWith("<!doctype") ||
    trimmed.startsWith("<html") ||
    response.headers.get("content-type")?.includes("text/html")
  ) {
    return null;
  }

  try {
    return JSON.parse(text);
  } catch {
    return null;
  }
}

/**
 * ─────────────────────────────────────────────
 * CACHE CONTROL
 * ─────────────────────────────────────────────
 */
export function clearManifestCache(slug) {
  if (slug) {
    const key = slug.toLowerCase();
    _cache.delete(key);
    _inflight.delete(key);
  } else {
    _cache.clear();
    _inflight.clear();
  }
}