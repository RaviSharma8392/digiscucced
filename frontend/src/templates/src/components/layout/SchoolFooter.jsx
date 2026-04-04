import {
  FiFacebook,
  FiInstagram,
  FiYoutube,
  FiPhone,
  FiMail,
  FiMapPin,
  FiClock,
} from "react-icons/fi";

export default function SchoolFooter({ config }) {
  const {
    school = {},
    theme = {},
    navigation = {},
    about = {},
    admissionCTA = {},
  } = config;
  const currentYear = new Date().getFullYear();

  const socials = [
    { icon: <FiFacebook />, href: school?.socials?.facebook },
    { icon: <FiInstagram />, href: school?.socials?.instagram },
    { icon: <FiYoutube />, href: school?.socials?.youtube },
  ];

  return (
    <footer style={{ background: theme.primary }} className="text-white mt-20">
      {/* MAIN GRID */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        {/* BRAND */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            {school.logo ? (
              <img src={school.logo} alt={school.name} className="h-12" />
            ) : (
              <div
                className="h-12 w-12 flex items-center justify-center rounded-lg font-bold"
                style={{ background: theme.accent, color: theme.primary }}>
                {school?.name?.charAt(0)}
              </div>
            )}

            <div>
              <h3 className="font-semibold">{school?.name}</h3>
              <p className="text-xs opacity-70">Est. {school?.established}</p>
            </div>
          </div>

          <p className="text-sm opacity-70 mb-5">
            {school?.tagline || about?.description}
          </p>

          {/* SOCIALS */}
          <div className="flex gap-3">
            {socials.map(
              (s, i) =>
                s.href && (
                  <a
                    key={i}
                    href={s.href}
                    className="p-2 rounded-md bg-white/10 hover:bg-white/20 transition">
                    {s.icon}
                  </a>
                ),
            )}
          </div>
        </div>

        {/* QUICK LINKS */}
        {navigation?.links?.length > 0 && (
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>

            <ul className="space-y-2 text-sm">
              {navigation.links.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.path}
                    className="opacity-70 hover:opacity-100 transition">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* CONTACT */}
        {school?.contact && (
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>

            <ul className="space-y-3 text-sm">
              {school?.contact?.address && (
                <li className="flex gap-2 items-start">
                  <FiMapPin className="mt-1" />
                  <span>{school.contact.address}</span>
                </li>
              )}

              {school?.contact?.phone && (
                <li className="flex gap-2 items-center">
                  <FiPhone />
                  <a href={`tel:${school.contact.phone}`}>
                    {school.contact.phone}
                  </a>
                </li>
              )}

              {school?.contact?.email && (
                <li className="flex gap-2 items-center">
                  <FiMail />
                  <a href={`mailto:${school.contact.email}`}>
                    {school.contact.email}
                  </a>
                </li>
              )}

              {school?.contact?.hours && (
                <li className="flex gap-2 items-center">
                  <FiClock />
                  <span>{school.contact.hours}</span>
                </li>
              )}
            </ul>
          </div>
        )}

        {/* ADMISSION CTA */}
        {admissionCTA?.heading && (
          <div className="p-6 rounded-xl bg-white/5 border border-white/10">
            <h4 className="font-bold mb-2">{admissionCTA.heading}</h4>

            <p className="text-sm opacity-70 mb-4">{admissionCTA.subtext}</p>

            {admissionCTA?.primaryBtn && (
              <a
                href={admissionCTA.primaryBtn.path}
                className="block text-center py-2 rounded-md font-medium"
                style={{
                  background: theme.accent,
                  color: theme.primary,
                }}>
                {admissionCTA.primaryBtn.label}
              </a>
            )}
          </div>
        )}
      </div>

      {/* BOTTOM */}
      <div className="border-t border-white/10 text-center py-4 text-xs opacity-70">
        © {currentYear} {school?.name}. All rights reserved.
      </div>
    </footer>
  );
}
