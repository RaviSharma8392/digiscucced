import { VALID_TEMPLATE_KEYS, DEFAULT_TEMPLATE_KEY } from "./templateKeys";

/* ─────────────────────────────────────────────
   ENV SAFE LOGGER
───────────────────────────────────────────── */
const IS_DEV = import.meta.env.DEV;

const log = {
  warn: (...a) => IS_DEV && console.warn(...a),
  error: (...a) => IS_DEV && console.error(...a),
  log: (...a) => IS_DEV && console.log(...a),
};

/* ─────────────────────────────────────────────
   SAFE HELPERS
───────────────────────────────────────────── */
const safeStr = (v, f = "") =>
  typeof v === "string" && v.trim() ? v.trim() : f;

const safeObj = (v) =>
  v && typeof v === "object" && !Array.isArray(v) ? v : {};

const safeArr = (v) => (Array.isArray(v) ? v : []);

const safeBool = (v, f = false) =>
  typeof v === "boolean" ? v : f;

/* ─────────────────────────────────────────────
   NORMALIZERS
───────────────────────────────────────────── */

function normalizeKeywords(raw) {
  if (Array.isArray(raw)) {
    return raw.filter(Boolean).map((k) => String(k).trim());
  }
  if (typeof raw === "string") {
    return raw.split(",").map((k) => k.trim()).filter(Boolean);
  }
  return [];
}

function normalizeNavItem(item) {
  if (!item || typeof item !== "object") return null;

  return {
    label: safeStr(item.label, "Link"),
    path: safeStr(item.path, "/"),
    isExternal: safeBool(item.isExternal, false),
    subLinks: safeArr(item.subLinks || item.children)
      .map(normalizeNavItem)
      .filter(Boolean),
  };
}

function normalizeNav(raw) {
  if (Array.isArray(raw)) {
    return {
      links: raw.map(normalizeNavItem).filter(Boolean),
      topLinks: [],
      mainLinks: [],
      primaryAction: null,
    };
  }

  if (raw && typeof raw === "object") {
    return {
      links: safeArr(raw.links).map(normalizeNavItem).filter(Boolean),
      topLinks: safeArr(raw.topLinks).map(normalizeNavItem).filter(Boolean),
      mainLinks: safeArr(raw.mainLinks).map(normalizeNavItem).filter(Boolean),
      primaryAction: raw.primaryAction
        ? {
          label: safeStr(raw.primaryAction.label),
          path: safeStr(raw.primaryAction.path, "/"),
          isExternal: safeBool(raw.primaryAction.isExternal, false),
        }
        : null,
    };
  }

  return {
    links: [],
    topLinks: [],
    mainLinks: [],
    primaryAction: null,
  };
}

function normalizeFeatures(raw) {
  const obj = safeObj(raw);
  const out = {};
  for (const [k, v] of Object.entries(obj)) {
    out[k] = safeBool(v, false);
  }
  return out;
}

function normalizePages(raw) {
  const defaults = {
    home: "home",
    about: "about",
    courses: "courses",
    contact: "contact",
    gallery: "gallery",
  };

  const obj = safeObj(raw);
  return { ...defaults, ...obj };
}

function normalizeTopBar(raw, contact = {}) {
  const obj = safeObj(raw);

  return {
    phone: safeStr(obj.phone || contact.phone),
    email: safeStr(obj.email || contact.email),
    address: safeStr(obj.address || contact.address),
    whatsapp: safeStr(obj.whatsapp || contact.whatsapp),
    ...Object.fromEntries(
      Object.entries(obj).filter(
        ([k]) => !["phone", "email", "address", "whatsapp"].includes(k)
      )
    ),
  };
}

function normalizeFooter(raw) {
  const obj = safeObj(raw);

  return {
    tagline: safeStr(obj.tagline),
    copyright: safeStr(obj.copyright),
    links: safeArr(obj.links).map(normalizeNavItem).filter(Boolean),
    ...Object.fromEntries(
      Object.entries(obj).filter(
        ([k]) => !["tagline", "copyright", "links"].includes(k)
      )
    ),
  };
}



/* ─────────────────────────────────────────────
   MAIN VALIDATOR
───────────────────────────────────────────── */
export function validateManifest(slug, raw) {
  if (!slug || typeof slug !== "string") {
    throw new Error("Invalid slug");
  }

  if (!raw || typeof raw !== "object") {
    throw new Error(`Invalid manifest for ${slug}`);
  }

  const normalizedSlug = slug.trim().toLowerCase();

  if (!raw.slug || raw.slug !== normalizedSlug) {
    log.warn("Slug mismatch", slug, raw.slug);
  }

  let template = safeStr(raw.template);

  if (!VALID_TEMPLATE_KEYS.includes(template)) {
    log.error("Invalid template:", template);
    template = DEFAULT_TEMPLATE_KEY;
  }

  const contactRaw = safeObj(raw.contact);

  const contact = {
    phone: safeStr(contactRaw.phone),
    email: safeStr(contactRaw.email),
    address: safeStr(contactRaw.address),
    whatsapp: safeStr(contactRaw.whatsapp),
  };

  const themeRaw = safeObj(raw.theme);

  const theme = {
    primary: safeStr(themeRaw.primary, "#1a1a2e"),
    accent: safeStr(themeRaw.accent, "#e94560"),
    background: safeStr(themeRaw.background, "#fff"),
    text: safeStr(themeRaw.text, "#1f2937"),
    ...Object.fromEntries(
      Object.entries(themeRaw).filter(
        ([k]) => !["primary", "accent", "background", "text"].includes(k)
      )
    ),
  };

  const normalized = {
    slug: normalizedSlug,
    name: safeStr(raw.name || raw.slug),
    template,

    seo: {
      title: safeStr(raw.seo?.title),
      description: safeStr(raw.seo?.description),
      keywords: normalizeKeywords(raw.seo?.keywords),
      canonical: safeStr(raw.seo?.canonical),
      ogImage: safeStr(raw.seo?.ogImage),
      themeColor: safeStr(raw.seo?.themeColor),
      schemaType: safeStr(raw.seo?.schemaType, "Organization"),
    },

    brand: {
      name: safeStr(raw.brand?.name),
      tagline: safeStr(raw.brand?.tagline),
      logo: safeStr(raw.brand?.logo),
      favicon: safeStr(raw.brand?.favicon),
    },

    contact,

    nav: normalizeNav(raw.nav),

    pages: normalizePages(raw.pages),

    theme,

    features: normalizeFeatures(raw.features),

    topBar: normalizeTopBar(raw.topBar, contactRaw),

    footer: normalizeFooter(raw.footer),

    _meta: IS_DEV
      ? {
        validated: true,
        timestamp: Date.now(),
      }
      : undefined,
  };

  // Spread any custom client fields (e.g. localSEO, socials, admissionOpen…)
  // that are not already handled by the normalizer — no duplication, no extras wrapper.
  const KNOWN_KEYS = [
    "slug", "name", "template", "seo", "brand", "contact",
    "nav", "pages", "theme", "features", "topBar", "footer", "social",
  ];

  for (const [key, value] of Object.entries(raw)) {
    if (KNOWN_KEYS.includes(key)) continue;   // already normalized above
    if (key in normalized) continue;           // don't overwrite
    normalized[key] = value;                  // pass through as-is
  }

  log.log("Manifest validated:", normalized.slug);

  return normalized;
}