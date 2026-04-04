import { useAdmissionForm } from "../../config/useAdmissionForm";

export default function AdmissionForm({ config }) {
  const {
    theme,
    classes,
    name: schoolName,
    email: schoolEmail,
    phone: schoolPhone,
  } = config;
  const { primary, accent, surface, text, muted, fontDisplay, fontBody } =
    theme;

  const { errors, touched, status, getFieldProps, handleSubmit, reset } =
    useAdmissionForm();

  const field = (name) => getFieldProps(name);
  const err = (name) => touched[name] && errors[name];

  if (status === "success") {
    return (
      <div
        id="apply-form"
        className="py-24 px-6 text-center"
        style={{ background: surface, fontFamily: fontBody }}>
        <div className="max-w-lg mx-auto">
          <div
            className="w-20 h-20 rounded-full flex items-center justify-center text-3xl mx-auto mb-6"
            style={{ background: accent, color: primary }}>
            ✓
          </div>
          <h2
            className="text-3xl font-black mb-3"
            style={{ fontFamily: fontDisplay, color: text }}>
            Application Received!
          </h2>
          <p className="text-base mb-8" style={{ color: muted }}>
            Thank you for applying to <strong>{schoolName}</strong>. We'll reach
            out at your registered email within 2–3 working days.
          </p>
          <button
            onClick={reset}
            className="px-7 py-3 rounded-xl font-bold text-sm"
            style={{ background: accent, color: primary }}>
            Submit Another Application
          </button>
        </div>
      </div>
    );
  }

  return (
    <section
      id="apply-form"
      style={{ background: surface, fontFamily: fontBody }}
      className="py-20 px-6 sm:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Sidebar info */}
        <div className="lg:col-span-1 flex flex-col gap-6">
          <div>
            <h2
              className="text-3xl font-black tracking-tight mb-1"
              style={{ fontFamily: fontDisplay, color: text }}>
              Apply <span style={{ color: accent }}>Online</span>
            </h2>
            <div
              className="w-10 h-[3px] rounded-full mb-4"
              style={{ background: accent }}
            />
            <p className="text-sm leading-relaxed" style={{ color: muted }}>
              Fill in the form and our admissions team will get in touch within
              2 working days. All fields marked * are mandatory.
            </p>
          </div>

          {/* Contact card */}
          <div
            className="rounded-2xl p-6 border"
            style={{ borderColor: `${accent}20`, background: `${primary}08` }}>
            <p
              className="text-xs font-black uppercase tracking-widest mb-4"
              style={{ color: accent }}>
              Need Help?
            </p>
            <div className="space-y-3">
              <a
                href={`tel:${schoolPhone}`}
                className="flex items-center gap-3 text-sm"
                style={{ color: text }}>
                <span
                  className="w-8 h-8 rounded-full flex items-center justify-center text-xs"
                  style={{ background: accent, color: primary }}>
                  📞
                </span>
                {schoolPhone}
              </a>
              <a
                href={`mailto:${schoolEmail}`}
                className="flex items-center gap-3 text-sm"
                style={{ color: text }}>
                <span
                  className="w-8 h-8 rounded-full flex items-center justify-center text-xs"
                  style={{ background: accent, color: primary }}>
                  ✉
                </span>
                {schoolEmail}
              </a>
            </div>
          </div>

          {/* Note */}
          <div
            className="rounded-2xl p-5 border text-sm leading-relaxed"
            style={{
              borderColor: `${accent}20`,
              color: muted,
              background: `${accent}06`,
            }}>
            <strong style={{ color: accent }}>Note:</strong> Submission of this
            form does not guarantee admission. Seats are limited and allocated
            on merit + availability.
          </div>
        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          noValidate
          className="lg:col-span-2 bg-white rounded-2xl shadow-sm border p-8 sm:p-10"
          style={{ borderColor: `${accent}15` }}>
          <p
            className="text-xs font-black uppercase tracking-widest mb-8"
            style={{ color: accent }}>
            Student & Parent Details
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Student Name */}
            <Field label="Student Full Name *" error={err("studentName")}>
              <input
                {...field("studentName")}
                placeholder="As per birth certificate"
                className={inputCls(err("studentName"))}
                style={inputStyle(accent)}
              />
            </Field>

            {/* Date of Birth */}
            <Field label="Date of Birth *" error={err("dob")}>
              <input
                type="date"
                {...field("dob")}
                className={inputCls(err("dob"))}
                style={inputStyle(accent)}
              />
            </Field>

            {/* Gender */}
            <Field label="Gender *" error={err("gender")}>
              <select
                {...field("gender")}
                className={inputCls(err("gender"))}
                style={inputStyle(accent)}>
                <option value="">Select gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </Field>

            {/* Class */}
            <Field label="Applying for Class *" error={err("applyingClass")}>
              <select
                {...field("applyingClass")}
                className={inputCls(err("applyingClass"))}
                style={inputStyle(accent)}>
                <option value="">Select class</option>
                {classes.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.label}
                  </option>
                ))}
              </select>
            </Field>

            {/* Previous School */}
            <Field
              label="Previous School (if any)"
              error={err("prevSchool")}
              fullWidth>
              <input
                {...field("prevSchool")}
                placeholder="School name and city"
                className={inputCls(false)}
                style={inputStyle(accent)}
              />
            </Field>

            {/* Parent Name */}
            <Field label="Parent / Guardian Name *" error={err("parentName")}>
              <input
                {...field("parentName")}
                placeholder="Full name"
                className={inputCls(err("parentName"))}
                style={inputStyle(accent)}
              />
            </Field>

            {/* Relation */}
            <Field label="Relation *" error={err("relation")}>
              <select
                {...field("relation")}
                className={inputCls(err("relation"))}
                style={inputStyle(accent)}>
                <option>Father</option>
                <option>Mother</option>
                <option>Guardian</option>
              </select>
            </Field>

            {/* Phone */}
            <Field label="Mobile Number *" error={err("phone")}>
              <input
                type="tel"
                {...field("phone")}
                placeholder="10-digit mobile number"
                maxLength={10}
                className={inputCls(err("phone"))}
                style={inputStyle(accent)}
              />
            </Field>

            {/* Email */}
            <Field label="Email Address *" error={err("email")}>
              <input
                type="email"
                {...field("email")}
                placeholder="your@email.com"
                className={inputCls(err("email"))}
                style={inputStyle(accent)}
              />
            </Field>

            {/* Address */}
            <Field
              label="Residential Address *"
              error={err("address")}
              fullWidth>
              <textarea
                {...field("address")}
                rows={3}
                placeholder="Full address with pin code"
                className={`${inputCls(err("address"))} resize-none`}
                style={inputStyle(accent)}
              />
            </Field>

            {/* Message */}
            <Field label="Additional Message (optional)" error={null} fullWidth>
              <textarea
                {...field("message")}
                rows={3}
                placeholder="Any specific requirement or query..."
                className={`${inputCls(false)} resize-none`}
                style={inputStyle(accent)}
              />
            </Field>
          </div>

          {/* Submit */}
          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
            <button
              type="submit"
              disabled={status === "submitting"}
              className="inline-flex items-center justify-center gap-2 font-black text-sm px-10 py-4 rounded-xl transition-all hover:-translate-y-1 disabled:opacity-60 disabled:cursor-not-allowed shadow-lg"
              style={{
                background: accent,
                color: primary,
                boxShadow: `0 4px 20px ${accent}40`,
              }}>
              {status === "submitting" ? (
                <>
                  <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                  Submitting…
                </>
              ) : (
                <>Submit Application →</>
              )}
            </button>
            {status === "error" && (
              <p className="text-sm text-red-600 font-medium">
                Something went wrong. Please try again.
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}

// ── Field wrapper ──────────────────────────────────────────────────────────────
function Field({ label, error, children, fullWidth = false }) {
  return (
    <div className={fullWidth ? "sm:col-span-2" : ""}>
      <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1.5">
        {label}
      </label>
      {children}
      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </div>
  );
}

const inputCls = (hasErr) =>
  `w-full rounded-xl border px-4 py-3 text-sm bg-gray-50 outline-none transition-all ${
    hasErr ? "border-red-400 bg-red-50" : "border-gray-200"
  }`;

const inputStyle = (accent) => ({
  "--tw-ring-color": accent,
  // on focus ring (CSS variable fallback for Tailwind)
});
