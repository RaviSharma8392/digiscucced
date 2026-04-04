

import { useEffect, useState, useMemo, useCallback } from "react";
import { getBusinessBySlug } from "../services/businessService";

export function useBusinessLayout(slug) {
  const [business, setBusiness] = useState(null);

  // ── Load manifest once per slug ──────────────────────────────
  useEffect(() => {
    if (!slug) return;

    let active = true;

    getBusinessBySlug(slug).then((data) => {
      if (active && data) setBusiness(data);
    });

    return () => { active = false; };
  }, [slug]);

  // ── URL builder ──────────────────────────────────────────────
  const buildPath = useCallback(
    (urlPath) => {
      if (!slug) return "/";
      const clean = (urlPath || "").replace(/^\/+/, "");
      return clean ? `/${slug}/${clean}` : `/${slug}`;
    },
    [slug]
  );

  // ── metaData ─────────────────────────────────────────────────
  const metaData = useMemo(
    () => ({
      name:          business?.branding?.name    || "",
      tagline:       business?.branding?.tagline || "",
      logoUrlDesk:   business?.branding?.logo    || "",
      logoUrlMobile: business?.branding?.logo    || "",
    }),
    [business]
  );

  // ── topBar ───────────────────────────────────────────────────
  const topBar = useMemo(
    () => ({
      ...business?.topBar,
      phone:       business?.contact?.phone       || "",
      enquiryText: business?.contact?.enquiryText || "",
    }),
    [business]
  );

  // ── navLinks ─────────────────────────────────────────────────
  const navLinks = useMemo(
    () =>
      (business?.navigation || []).map((link) => ({
        label:    link.label,
        icon:     link.icon,
        badge:    link.badge,
        path:     buildPath(link.path || ""),
        subLinks: (link.children || []).map((sub) => ({
          label: sub.label,
          path:  buildPath(sub.path || ""),
        })),
      })),
    [business, buildPath]
  );

  // ── theme ────────────────────────────────────────────────────
  const theme = useMemo(
    () => ({
      name:    metaData.name    || "Business Name",
      tagline: metaData.tagline || "",
      ...business?.theme,
    }),
    [business, metaData.name, metaData.tagline]
  );

  // ── faviconUrl ───────────────────────────────────────────────
  const faviconUrl =
    metaData.logoUrlMobile || metaData.logoUrlDesk || "/favicon.ico";

  // ── Dynamic favicon per tenant ───────────────────────────────
  useEffect(() => {
    if (!business) return;

    document.querySelectorAll("link[rel~='icon']").forEach((el) => el.remove());

    const link = document.createElement("link");
    link.rel  = "icon";
    link.type = "image/png";
    link.href = `${faviconUrl}?v=${slug}`;
    document.head.appendChild(link);
  }, [faviconUrl, slug, business]);

  return {
    business,
    metaData,
    topBar,
    navLinks,
    theme,
    faviconUrl,
  };
}