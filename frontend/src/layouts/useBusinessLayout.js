import { useEffect, useMemo } from "react";
import { siteManifests } from "../data/mockBusinesses";

export function useBusinessLayout(slug) {

  // ── Resolve business from registry ──
  const business = siteManifests?.[slug];

  // ── Normalize manifest fields ──
  const metaData = {
    name: business?.branding?.name || "",
    tagline: business?.branding?.tagline || "",
    logoUrlDesk: business?.branding?.logo || "",
    logoUrlMobile: business?.branding?.logo || "",
  };

  const topBar = {
    ...business?.topBar,
    phone: business?.contact?.phone,
    enquiryText: business?.contact?.enquiryText,
  };

  const nav = business?.navigation || [];

  const faviconUrl =
    metaData.logoUrlMobile ||
    metaData.logoUrlDesk ||
    "/favicon.ico";

  // ── Dynamic favicon per tenant ──
  useEffect(() => {
    if (!business) return;

    document
      .querySelectorAll("link[rel~='icon']")
      .forEach((el) => el.remove());

    const link = document.createElement("link");
    link.rel = "icon";
    link.type = "image/png";
    link.href = `${faviconUrl}?v=${slug}`;

    document.head.appendChild(link);
  }, [faviconUrl, slug, business]);

  // ── URL builder for tenant routes ──
  const buildPath = (urlPath) => {
    if (!slug) return "/";

    const clean = (urlPath || "").replace(/^\/+/, "");
    return clean ? `/${slug}/${clean}` : `/${slug}`;
  };

  // ── Normalized navigation ──
  const navLinks = useMemo(
    () =>
      nav.map((link) => ({
        label: link.label,
        icon: link.icon,
        badge: link.badge,
        path: buildPath(link.path || ""),

        subLinks: link.children?.map((sub) => ({
          label: sub.label,
          path: buildPath(sub.path || ""),
        })) || [],
      })),
    [nav, slug]
  );

  // ── Theme normalization ──
  const theme = useMemo(
    () => ({
      name: metaData.name || "Business Name",
      tagline: metaData.tagline || "",
      ...business?.theme,
    }),
    [business?.theme, metaData.name, metaData.tagline]
  );

  return {
    business,
    metaData,
    topBar,
    navLinks,
    theme,
    faviconUrl,
  };
}