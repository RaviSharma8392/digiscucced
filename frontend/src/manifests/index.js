/**
 * manifests/index.js
 * Central registry — maps every slug to a lazy import.
 * Add new clients here only. Nothing else changes.
 */

export const manifestRegistry = {
  "vidyamandir":                    () => import("./vidyamandir.js"),
  // "sunrise-public-school":          () => import("./sunrise-public-school.js"),
  "si-succeed-computer-institute":  () => import("./si-succeed-computer-institute.js"),
  // "ric-nakuchiyatal":               () => import("./ric-nakuchiyatal.js"),
  "gic-nakuchiyatal":               () => import("./gic-nakuchiyatal.js"),
};

/**
 * loadManifest(slug)
 * Dynamically loads only the requested client's config.
 * Used by useBusinessLayout hook.
 */
export async function loadManifest(slug) {
  const loader = manifestRegistry[slug];

  if (!loader) {
    throw new Error(`[Nexaric] No manifest registered for slug: "${slug}"`);
  }

  const mod = await loader();

  // Guard: ensure the file actually has a default export
  if (!mod?.default) {
    throw new Error(`[Nexaric] Manifest for "${slug}" has no default export.`);
  }

  return mod.default;
}