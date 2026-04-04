import { Helmet } from "react-helmet-async";

export default function BusinessPageHead({
  metaData,
  theme,
  faviconUrl,
  slug,
}) {
  return (
    <Helmet key={slug}>
      <title>
        {metaData.name
          ? `${metaData.name} | Official Website`
          : "School Website"}
      </title>
      <link rel="icon" href={faviconUrl} />
      <meta name="theme-color" content={theme?.primary || "#003366"} />
      <meta
        name="description"
        content={metaData.description || metaData.tagline || ""}
      />
    </Helmet>
  );
}
