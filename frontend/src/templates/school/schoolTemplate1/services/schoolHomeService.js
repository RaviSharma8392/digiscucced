/**
 * schoolHomeService.js
 *
 * Loads home page data for school templates from:
 *   /public/configs/{slug}/home.json
 *
 * Falls back to a safe default structure if the JSON is missing or malformed.
 * Never throws — always returns an object.
 */

import { fetchPageData } from '../../../../core/manifest/manifestLoader';

// ─── Default fallback data ────────────────────────────────────────────────────
// Shown when home.json is missing or returns null.
// Prevents UI crashes with zero data.
const HOME_DATA_DEFAULTS = {
  theme: {
    primary: '#003366',
    accent: '#DC2626',
    background: '#ffffff',
    text: '#1f2937',
  },
  notices: [],
  hero: {
    badge: 'Welcome',
    highlightWord: 'Excellence',
    description: 'Welcome to our school. Building tomorrow\'s leaders today.',
    primaryBtn: { label: 'Apply for Admission', path: '/admissions' },
    secondaryBtn: { label: 'Learn More', path: '/about' },
    image: '',
  },
  stats: [],
  about: {
    tag: 'About Us',
    heading: 'Our School',
    description: '',
    highlights: [],
    years: '',
    yearsLabel: '',
    image: '',
    cta: { label: 'Learn More', path: '/about' },
  },
  programs: [],
  events: [],
  principal: null,
  gallery: { header: { title: 'Gallery', subtitle: '' }, images: [] },
  admissionCTA: {
    heading: 'Admissions Open',
    subtext: 'Apply now for the upcoming session.',
    primaryBtn: { label: 'Apply Now', path: '/admissions' },
    secondaryBtn: { label: 'Contact Us', path: '/contact' },
  },
  testimonials: [],
};

/**
 * getSchoolHomeData(slug)
 *
 * @param {string} slug  Business slug
 * @returns {Promise<object>} Home page data (never null)
 */
export async function getSchoolHomeData(slug) {
  if (!slug) {
    console.warn('[SchoolHomeService] Called without slug. Returning defaults.');
    return HOME_DATA_DEFAULTS;
  }

  try {
    const data = await fetchPageData(slug, 'home');

    if (!data) {
      console.info(
        `[SchoolHomeService] No home.json found for "${slug}". ` +
        `Create /public/configs/${slug}/home.json to customise the home page.`
      );
      return HOME_DATA_DEFAULTS;
    }

    // Merge with defaults so any missing keys never cause undefined errors
    return {
      ...HOME_DATA_DEFAULTS,
      ...data,
      theme: { ...HOME_DATA_DEFAULTS.theme, ...(data.theme || {}) },
      hero: { ...HOME_DATA_DEFAULTS.hero, ...(data.hero || {}) },
      about: { ...HOME_DATA_DEFAULTS.about, ...(data.about || {}) },
      admissionCTA: { ...HOME_DATA_DEFAULTS.admissionCTA, ...(data.admissionCTA || {}) },
      gallery: { ...HOME_DATA_DEFAULTS.gallery, ...(data.gallery || {}) },
    };
  } catch (err) {
    console.error(`[SchoolHomeService] Error loading home data for "${slug}":`, err);
    return HOME_DATA_DEFAULTS;
  }
}
