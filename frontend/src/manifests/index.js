/**
 * manifests/index.js
 * Central registry for all tenant manifests.
 */

export const manifestRegistry = {
  "vidyamandir": () => import("./vidyamandir.js"),
  // "sunrise-public-school": () => import("./sunrise-public-school.js"),
  "si-succeed-computer-institute": () =>
    import("./si-succeed-computer-institute.js"),
  // "ric-nakuchiyatal": () => import("./ric-nakuchiyatal.js"),
  "gic-nakuchiyatal": () => import("./gic-nakuchiyatal.js"),
};

const manifestCache = new Map();

export async function loadManifest(slug) {
  if (!slug || typeof slug !== "string") {
    throw new Error(`[Nexaric] Invalid slug: "${slug}"`);
  }

  const normalizedSlug = slug.trim().toLowerCase();

  // return cached manifest
  if (manifestCache.has(normalizedSlug)) {
    return manifestCache.get(normalizedSlug);
  }

  const loader = manifestRegistry[normalizedSlug];

  if (!loader) {
    throw new Error(
      `[Nexaric] No manifest registered for slug: "${normalizedSlug}"`
    );
  }

  const mod = await loader();

  if (!mod?.default) {
    throw new Error(
      `[Nexaric] Manifest for "${normalizedSlug}" has no default export.`
    );
  }

  const manifest = mod.default;

  // Optional validation
  if (!manifest.slug || !manifest.template) {
    throw new Error(
      `[Nexaric] Invalid manifest structure for "${normalizedSlug}".`
    );
  }

  manifestCache.set(normalizedSlug, manifest);

  return manifest;
}