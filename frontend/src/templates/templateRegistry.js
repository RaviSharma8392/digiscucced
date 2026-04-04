/**
 * templateRegistry.js
 *
 * Maps template keys (from manifests) → lazy-loaded route components.
 *
 * To add a new template:
 *  1. Create its Routes file at the correct path
 *  2. Add one line here
 *  3. Register it in the manifest files that use it
 */

import { lazy } from "react";

export const templateRegistry = {
  coachingTemplate1: lazy(() =>
    import("./coaching/coachingTemplate1/routes/CoachingTemplate1Routes")
  ),

  schoolTemplate1: lazy(() =>
    import("./school/schoolTemplate1/routes/SchoolTemplate1Routes")
  ),

  schoolTemplate2: lazy(() =>
    import("./school/schoolTemplate2/routes/SchoolTemplate2Routes")
  ),
};

/**
 * getTemplate(templateKey)
 *
 * Safe accessor — returns the lazy component or null.
 * Use this instead of templateRegistry[key] directly
 * if you want a consistent warning in one place.
 *
 * @param {string} templateKey
 * @returns {React.LazyExoticComponent|null}
 */
export function getTemplate(templateKey) {
  const component = templateRegistry[templateKey];

  if (!component) {
    console.error(
      `[templateRegistry] No template registered for key: "${templateKey}". ` +
      `Registered keys: ${Object.keys(templateRegistry).join(", ")}`
    );
    return null;
  }

  return component;
}