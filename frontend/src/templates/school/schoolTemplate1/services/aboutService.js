import { aboutConfig } from "../config/aboutConfig";

// Future: swap fetchById/fetchBySlug with real Firestore calls
async function fetchById(businessId)  { return null; } // TODO
async function fetchBySlug(slug)      { return null; } // TODO

export async function getAboutData({ businessId, slug }) {
  try {
    if (businessId) {
      const data = await fetchById(businessId);
      if (data) return data;
    }
    if (slug) {
      const data = await fetchBySlug(slug);
      if (data) return data;
    }
  } catch (err) {
    console.warn("[aboutService] fetch failed, using static fallback:", err);
  }
  return aboutConfig; // always works
}