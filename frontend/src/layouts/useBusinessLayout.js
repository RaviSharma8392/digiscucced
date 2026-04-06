import { useMemo, useCallback, useEffect } from "react";

export function useBusinessLayout(business) {

  const slug = business?.slug || "";

  /* ───────── PATH BUILDER ───────── */
  const buildPath = useCallback(
    (urlPath = "") => {
      const clean = urlPath.replace(/^\/+/, "");
      return clean ? `/${slug}/${clean}` : `/${slug}`;
    },
    [slug]
  );

  /* ───────── BRAND / META DATA ───────── */
  const metaData = useMemo(() => ({
    name: business?.brand?.name || "",
    tagline: business?.brand?.tagline || "",
    logoUrlDesk: business?.brand?.logo || "",
    logoUrlMobile: business?.brand?.logo || "",
  }), [business?.brand]);

  /* ───────── TOP BAR ───────── */
  const topBar = useMemo(() => ({
    ...business?.topBar,
    phone: business?.contact?.phone || "",
    enquiryText: business?.contact?.enquiryText || "",
  }), [business?.topBar, business?.contact]);

  /* ───────── NAVIGATION ───────── */
  const navLinks = useMemo(() =>
    (business?.nav || []).map(link => ({
      label: link.label,
      icon: link.icon,
      badge: link.badge,
      path: buildPath(link.path),

      subLinks: (link.subLinks || link.children || []).map(sub => ({
        label: sub.label,
        path: buildPath(sub.path),
      }))
    }))
  , [business?.nav, buildPath]);

  /* ───────── THEME ───────── */
  const theme = useMemo(() => ({
    name: metaData.name || "Business",
    tagline: metaData.tagline || "",
    ...business?.theme,
  }), [business?.theme, metaData]);

  /* ───────── FAVICON ───────── */
  const faviconUrl =
    metaData.logoUrlMobile ||
    metaData.logoUrlDesk ||
    "/favicon.ico";

  useEffect(() => {
    if (!faviconUrl) return;

    document.querySelectorAll("link[rel~='icon']").forEach(el => el.remove());

    const link = document.createElement("link");
    link.rel = "icon";
    link.href = `${faviconUrl}?v=${slug}`;

    document.head.appendChild(link);

  }, [faviconUrl, slug]);

  return {
    metaData,
    topBar,
    navLinks,
    theme,
    faviconUrl,
  };
}

