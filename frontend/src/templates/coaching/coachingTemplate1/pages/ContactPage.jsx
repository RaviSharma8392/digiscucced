import React, { useState, useCallback } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  ChevronDown,
  User,
  BookOpen,
  GraduationCap,
} from "lucide-react";

// ─── CONFIG ────────────────────────────────────────────────────────
const defaultContact = {
  phone: "+91-1800-102-2727",
  email: "info@aakash.ac.in",
  address: "12, Civil Lines, Near Clock Tower, Allahabad, UP",
  hours: "Mon – Sat: 8:00 AM – 8:00 PM",
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113911.33230896025!2d81.76922379728565!3d25.435801061618218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398534c9b20bd49f%3A0xa2237856ad4041a!2sPrayagraj%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
};

const courses = [
  "JEE Main & Advanced",
  "NEET Preparation",
  "Foundation (Class 9–10)",
  "Crash Course",
  "Other / General Inquiry",
];

const classes = ["Class 9", "Class 10", "Class 11", "Class 12", "Dropper"];

// ─── INFO CARD (Desktop Only) ───────────────────────────────────────
function InfoCard({ icon: Icon, label, value, href, color }) {
  const inner = (
    <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
      <div
        className="shrink-0 w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300"
        style={{ backgroundColor: color + "15" }}>
        <Icon
          className="w-[22px] h-[22px] transition-transform duration-300 group-hover:scale-110"
          style={{ color }}
          strokeWidth={2}
        />
      </div>
      <div className="flex flex-col justify-center min-h-[48px]">
        <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-0.5">
          {label}
        </p>
        <p className="text-[15px] font-bold text-slate-800 leading-snug group-hover:text-[#00bbf0] transition-colors">
          {value}
        </p>
      </div>
    </div>
  );
  return href ? (
    <a href={href} className="block w-full">
      {inner}
    </a>
  ) : (
    <div className="w-full">{inner}</div>
  );
}

// ─── CUSTOM INPUT FIELDS WITH ICONS ─────────────────────────────────
function CustomSelect({
  label,
  name,
  value,
  onChange,
  options,
  required,
  icon: Icon,
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[11px] font-bold uppercase tracking-widest text-slate-500 ml-1">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="relative group">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#00bbf0] transition-colors">
          <Icon className="w-5 h-5" strokeWidth={2} />
        </div>
        <select
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          className="w-full appearance-none bg-slate-50 border border-slate-200 rounded-xl pl-12 pr-10 py-3.5 text-[15px] text-slate-800 font-medium focus:outline-none focus:ring-2 focus:ring-[#00bbf0]/30 focus:border-[#00bbf0] transition-all cursor-pointer hover:bg-slate-100/50">
          <option value="" disabled>
            Select {label}
          </option>
          {options.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none group-hover:text-[#00bbf0] transition-colors" />
      </div>
    </div>
  );
}

function InputField({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  required,
  icon: Icon,
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[11px] font-bold uppercase tracking-widest text-slate-500 ml-1">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="relative group">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#00bbf0] transition-colors">
          <Icon className="w-5 h-5" strokeWidth={2} />
        </div>
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-12 pr-4 py-3.5 text-[15px] text-slate-800 font-medium placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#00bbf0]/30 focus:border-[#00bbf0] transition-all hover:bg-slate-100/50"
        />
      </div>
    </div>
  );
}

// ─── MAIN PAGE ────────────────────────────────────────────────────────
export default function ContactPage({ contact = defaultContact }) {
  const info = { ...defaultContact, ...contact };

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    course: "",
    currentClass: "",
    message: "",
  });

  const [status, setStatus] = useState("idle");

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      setStatus("loading");
      try {
        await new Promise((r) => setTimeout(r, 1200));
        setStatus("success");
        setForm({
          name: "",
          phone: "",
          email: "",
          course: "",
          currentClass: "",
          message: "",
        });
      } catch {
        setStatus("error");
      }
    },
    [form],
  );

  return (
    <div className="min-h-screen bg-[#fcfdfd] font-[Inter,sans-serif]">
      {/* ── HERO BANNER ── */}
      <div className="bg-[#0d1c2a] pt-20 pb-28 lg:py-24 px-4 text-center relative overflow-hidden">
        {/* Background Vectors & Glows */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_top_right,#00bbf0_0%,transparent_50%)] opacity-20" />
        <div className="absolute bottom-0 left-0 w-1/2 h-full bg-[radial-gradient(circle_at_bottom_left,#ef6461_0%,transparent_50%)] opacity-10" />

        {/* Subtle Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm20 20h20v20H20V20zM0 20h20v20H0V20z' fill='%23ffffff' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#00bbf0] mb-4 bg-[#00bbf0]/10 px-4 py-1.5 rounded-full backdrop-blur-sm border border-[#00bbf0]/20">
            We are here to help
          </p>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5"
            style={{ fontFamily: "'Roboto Slab', serif" }}>
            Get in <span className="text-[#00bbf0]">Touch</span>
          </h1>
          <p className="text-slate-400 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Take the first step towards your success. Fill out the form below
            and our expert counsellors will guide you.
          </p>
        </div>
      </div>

      {/* ── MAIN CONTENT (Mobile: Form Only, Desktop: Split) ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 lg:py-20 -mt-16 lg:mt-0 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-16">
          {/* ── LEFT: INFO + MAP (HIDDEN ON MOBILE) ── */}
          <div className="hidden lg:flex flex-col gap-8">
            <div className="grid grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-5">
              <InfoCard
                icon={Phone}
                label="Call Us"
                value={info.phone}
                href={`tel:${info.phone}`}
                color="#00bbf0"
              />
              <InfoCard
                icon={Mail}
                label="Email Us"
                value={info.email}
                href={`mailto:${info.email}`}
                color="#ef6461"
              />
              <InfoCard
                icon={MapPin}
                label="Visit Us"
                value={info.address}
                color="#059669"
              />
              <InfoCard
                icon={Clock}
                label="Working Hours"
                value={info.hours}
                color="#7c3aed"
              />
            </div>

            {/* Map Container */}
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm h-[350px] w-full bg-slate-100">
              <iframe
                title="Institute Location"
                src={info.mapEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* ── RIGHT: FORM (FULL WIDTH ON MOBILE) ── */}
          <div className="bg-white rounded-[2rem] border border-slate-100 shadow-[0_20px_40px_rgba(0,0,0,0.08)] p-6 sm:p-12 relative overflow-hidden flex flex-col justify-center">
            {/* Form Decorative Gradient Top */}
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#0d1c2a] via-[#00bbf0] to-[#00bbf0]" />

            {status === "success" ? (
              <div className="flex flex-col items-center justify-center h-full py-20 text-center gap-5 animate-[fadeIn_0.5s_ease-out]">
                <div className="w-20 h-20 rounded-full bg-[#ecfdf5] flex items-center justify-center mb-2 shadow-inner">
                  <CheckCircle
                    className="w-10 h-10 text-[#059669]"
                    strokeWidth={2}
                  />
                </div>
                <h3
                  className="text-3xl font-bold text-slate-900"
                  style={{ fontFamily: "'Roboto Slab', serif" }}>
                  Enquiry Submitted!
                </h3>
                <p className="text-slate-500 text-base max-w-sm leading-relaxed">
                  Thank you for reaching out. Our counsellor will contact you
                  shortly. Keep your phone handy!
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-4 px-8 py-3.5 rounded-xl bg-slate-100 text-slate-700 text-[15px] font-bold hover:bg-slate-200 transition-colors">
                  Submit Another Query
                </button>
              </div>
            ) : (
              <div className="animate-[fadeIn_0.5s_ease-out]">
                <div className="mb-8">
                  <h2
                    className="text-2xl sm:text-3xl font-bold text-[#0d1c2a] mb-2"
                    style={{ fontFamily: "'Roboto Slab', serif" }}>
                    Request Free Counselling
                  </h2>
                  <p className="text-slate-500 text-sm">
                    Fill in your details and we will call you back.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  {/* Row 1 */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <InputField
                      label="Full Name"
                      name="name"
                      icon={User}
                      value={form.name}
                      onChange={handleChange}
                      placeholder="e.g. Arjun Singh"
                      required
                    />
                    <InputField
                      label="Phone Number"
                      name="phone"
                      type="tel"
                      icon={Phone}
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="e.g. 98765 43210"
                      required
                    />
                  </div>

                  {/* Row 2 */}
                  <InputField
                    label="Email Address"
                    name="email"
                    type="email"
                    icon={Mail}
                    value={form.email}
                    onChange={handleChange}
                    placeholder="e.g. arjun@example.com"
                  />

                  {/* Row 3 */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <CustomSelect
                      label="Course Interested"
                      name="course"
                      icon={BookOpen}
                      value={form.course}
                      onChange={handleChange}
                      options={courses}
                      required
                    />
                    <CustomSelect
                      label="Current Class"
                      name="currentClass"
                      icon={GraduationCap}
                      value={form.currentClass}
                      onChange={handleChange}
                      options={classes}
                      required
                    />
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] font-bold uppercase tracking-widest text-slate-500 ml-1">
                      Message{" "}
                      <span className="text-slate-400 normal-case font-medium tracking-normal">
                        (optional)
                      </span>
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Any specific queries or preferred batch timing..."
                      rows={3}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-[15px] text-slate-800 font-medium placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#00bbf0]/30 focus:border-[#00bbf0] transition-all resize-none hover:bg-slate-100/50"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="mt-2 w-full flex items-center justify-center gap-3 py-4 rounded-xl bg-[#00bbf0] text-white font-bold text-[16px] hover:bg-[#00aed6] active:scale-[0.98] transition-all shadow-[0_8px_20px_rgba(0,187,240,0.3)] disabled:opacity-70 disabled:cursor-not-allowed group">
                    {status === "loading" ? (
                      <>
                        <svg
                          className="animate-spin w-5 h-5 text-white"
                          viewBox="0 0 24 24"
                          fill="none">
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v8z"
                          />
                        </svg>
                        Submitting...
                      </>
                    ) : (
                      <>
                        Request Callback
                        <Send className="w-[18px] h-[18px] group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>

                  {/* Mobile only Call backup */}
                  <a
                    href={`tel:${info.phone}`}
                    className="lg:hidden text-center text-[#00bbf0] font-bold text-sm mt-2">
                    Prefer to call? Click here.
                  </a>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
