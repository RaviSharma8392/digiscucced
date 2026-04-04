export default function AdmissionsHero({ config, theme }) {
  return (
    <section
      className="py-24 text-center"
      style={{
        background: theme.colors.surface,
      }}>
      <h1
        style={{
          fontFamily: theme.fonts.heading,
          color: theme.colors.primary,
        }}
        className="text-5xl font-bold">
        Admissions Open
      </h1>

      <p className="mt-4 text-lg" style={{ color: theme.colors.muted }}>
        Apply now for the academic year
      </p>
    </section>
  );
}
