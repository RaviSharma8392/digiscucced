import { lazy } from "react";

/**
 * ─────────────────────────────────────────────
 * ENV CONTROL (PRODUCTION SAFE)
 * ─────────────────────────────────────────────
 */

const IS_PRODUCTION = import.meta?.env?.PROD;

/**
 * Safe logger (prevents console leaks in prod)
 */
const log = {
  warn: (...args) => {
    if (!IS_PRODUCTION) console.warn(...args);
  },
  error: (...args) => {
    if (!IS_PRODUCTION) console.error(...args);
  },
  log: (...args) => {
    if (!IS_PRODUCTION) console.log(...args);
  },
};

/**
 * ─────────────────────────────────────────────
 * TEMPLATE REGISTRY (PRODUCTION SAFE)
 * ─────────────────────────────────────────────
 */

export const templateRegistry = {
  coachingTemplate1: lazy(() =>
    import("./coaching/coachingTemplate1/routes/CoachingTemplate1Routes")
  ),

  coachingTemplate2: lazy(() =>
    import("./coaching/coachingTemplate2/routes/CoachingTemplate2Routes")
  ),

  schoolTemplate1: lazy(() =>
    import("./school/schoolTemplate1/routes/SchoolTemplate1Routes")
  ),

  schoolTemplate2: lazy(() =>
    import("./school/schoolTemplate2/routes/SchoolTemplate2Routes")
  ),

  instituteTemplate1: lazy(() =>
    import("./institute/instituteTemplate1/routes/InstituteTemplate1Routes")
  ),

  defaultTemplate: lazy(() =>
    import("./default/routes/DefaultTemplateRoutes")
  ),
};

/**
 * Normalize template key safely
 */
function normalizeKey(key) {
  if (!key || typeof key !== "string") return "defaultTemplate";
  return key.trim();
}

/**
 * Safe template resolver
 * NEVER returns null → always returns valid component
 */
export function getTemplate(templateKey) {
  const key = normalizeKey(templateKey);

  const Template = templateRegistry[key];

  if (Template) {
    log.log(`[TemplateRegistry] Using template: ${key}`);
    return Template;
  }

  log.warn(
    `[TemplateRegistry] Invalid template "${templateKey}" → fallback to defaultTemplate`
  );

  return templateRegistry.defaultTemplate;
}

/**
 * Strict validator (dev only)
 */
export function validateTemplateKey(templateKey) {
  const key = normalizeKey(templateKey);

  if (!templateRegistry[key]) {
    log.warn(`[TemplateRegistry] Unknown template: ${templateKey}`);
  }

  return getTemplate(key);
}

/**
 * Debug helper (dev only)
 */
export function getAllTemplates() {
  return Object.keys(templateRegistry);
}