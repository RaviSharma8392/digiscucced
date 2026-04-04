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
  GraduationCap,
  MessageSquare,
  Building,
} from "lucide-react";

// ─── THEME CONFIGURATION ──────────────────────────────────────────────
const theme = {
  primary: "#2e7d32",
  primaryHover: "#1b5e20",
  accent: "#ff6f00",
  bg: "#ffffff",
  bgMuted: "#f1f8e9",
  text: "#212121",
  textMuted: "#757575",
  borderRadius: "4px",
  fontHeading: "'Merriweather', serif",
  fontBody: "'Open Sans', sans-serif",
};

// ─── SCHOOL DATA ──────────────────────────────────────────────────────
const schoolInfo = {
  phone: "+91-9876543210",
  email: "admissions@schoolname.edu",
  address: "123 Education Boulevard, Knowledge City, State - 123456",
  hours: "Monday – Friday: 8:00 AM – 3:30 PM",
  mapEmbed: "https://www.google.com/maps/embed?pb=!1m18...", // Replace with real embed
  departments: [
    { name: "Admissions", phone: "+91-9876543211" },
    { name: "Transport Office", phone: "+91-9876543212" },
    { name: "Accounts Desk", phone: "+91-9876543213" },
  ],
};

const inquiryTypes = [
  "New Admission Entry",
  "Fee / Accounts Query",
  "Transport Inquiry",
  "Leave Application",
  "General Feedback",
];

const grades = [
  "Pre-K / Kindergarten",
  "Grade 1-5",
  "Grade 6-8",
  "Grade 9-10",
  "Grade 11-12",
];

// ─── INFO CARD COMPONENT ──────────────────────────────────────────────
function InfoCard({ icon: Icon, label, value, href }) {
  const inner = (
    <div
      className="flex items-start gap-4 p-5 bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 group"
      style={{ borderRadius: theme.borderRadius }}>
      <div
        className="shrink-0 w-12 h-12 flex items-center justify-center transition-colors duration-300"
        style={{
          backgroundColor: theme.bgMuted,
          borderRadius: theme.borderRadius,
        }}>
        <Icon
          className="w-6 h-6 transition-transform duration-300 group-hover:scale-110"
          style={{ color: theme.primary }}
          strokeWidth={1.5}
        />
      </div>
      <div className="flex flex-col justify-center">
        <p
          className="text-[12px] font-bold uppercase tracking-wider mb-1"
          style={{ color: theme.textMuted }}>
          {label}
        </p>
        <p
          className="text-[15px] font-semibold leading-snug transition-colors"
          style={{ color: theme.text }}>
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

// ─── CUSTOM INPUT FIELDS ──────────────────────────────────────────────
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
    <div className="flex flex-col gap-1.5 w-full">
      <label
        className="text-[12px] font-bold uppercase tracking-wider ml-1"
        style={{ color: theme.textMuted }}>
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="relative group">
        <div
          className="absolute left-3.5 top-1/2 -translate-y-1/2 transition-colors"
          style={{ color: theme.textMuted }}>
          <Icon className="w-5 h-5" strokeWidth={1.5} />
        </div>
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className="w-full border border-gray-300 pl-11 pr-4 py-3 text-[15px] font-medium placeholder:text-gray-400 focus:outline-none focus:ring-1 transition-all"
          style={{
            backgroundColor: theme.bg,
            color: theme.text,
            borderRadius: theme.borderRadius,
            fontFamily: theme.fontBody,
          }}
          onFocus={(e) => {
            e.target.style.borderColor = theme.primary;
            e.target.style.boxShadow = `0 0 0 2px ${theme.bgMuted}`;
          }}
          onBlur={(e) => {
            e.target.style.borderColor = "#d1d5db";
            e.target.style.boxShadow = "none";
          }}
        />
      </div>
    </div>
  );
}

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
    <div className="flex flex-col gap-1.5 w-full">
      <label
        className="text-[12px] font-bold uppercase tracking-wider ml-1"
        style={{ color: theme.textMuted }}>
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="relative group">
        <div
          className="absolute left-3.5 top-1/2 -translate-y-1/2 transition-colors"
          style={{ color: theme.textMuted }}>
          <Icon className="w-5 h-5" strokeWidth={1.5} />
        </div>
        <select
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          className="w-full appearance-none border border-gray-300 pl-11 pr-10 py-3 text-[15px] font-medium focus:outline-none focus:ring-1 transition-all cursor-pointer"
          style={{
            backgroundColor: theme.bg,
            color: value ? theme.text : theme.textMuted,
            borderRadius: theme.borderRadius,
            fontFamily: theme.fontBody,
          }}
          onFocus={(e) => {
            e.target.style.borderColor = theme.primary;
            e.target.style.boxShadow = `0 0 0 2px ${theme.bgMuted}`;
          }}
          onBlur={(e) => {
            e.target.style.borderColor = "#d1d5db";
            e.target.style.boxShadow = "none";
          }}>
          <option value="" disabled>
            Select {label}
          </option>
          {options.map((o) => (
            <option key={o} value={o} style={{ color: theme.text }}>
              {o}
            </option>
          ))}
        </select>
        <ChevronDown
          className="absolute right-3.5 top-1/2 -translate-y-1/2 w-5 h-5 pointer-events-none"
          style={{ color: theme.textMuted }}
        />
      </div>
    </div>
  );
}

// ─── MAIN CONTACT PAGE ────────────────────────────────────────────────
export default function SchoolTemplate1ContactPage() {
  const [form, setForm] = useState({
    parentName: "",
    studentName: "",
    phone: "",
    email: "",
    grade: "",
    inquiryType: "",
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
          parentName: "",
          studentName: "",
          phone: "",
          email: "",
          grade: "",
          inquiryType: "",
          message: "",
        });
      } catch {
        setStatus("error");
      }
    },
    [form],
  );

  return (
    <div
      style={{
        backgroundColor: theme.bgMuted,
        fontFamily: theme.fontBody,
        minHeight: "100vh",
      }}>
      {/* ── HERO BANNER ── */}
      <div
        className="relative py-20 px-4 text-center overflow-hidden"
        style={{ backgroundColor: theme.primary }}>
        {/* Subtle Pattern Overlay for traditional school feel */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        <div className="relative z-10 max-w-3xl mx-auto">
          <p
            className="text-sm font-bold uppercase tracking-[0.2em] mb-4"
            style={{ color: theme.accent }}>
            Parent Relations & Admissions
          </p>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-5"
            style={{ color: theme.bg, fontFamily: theme.fontHeading }}>
            We'd love to hear from{" "}
            <span style={{ color: theme.accent }}>You</span>
          </h1>
          <p
            className="text-lg max-w-2xl mx-auto leading-relaxed opacity-90"
            style={{ color: theme.bg }}>
            Whether you are a prospective parent seeking admission details or a
            current parent with a query, our administrative team is here to
            assist you.
          </p>
        </div>
      </div>

      {/* ── MAIN CONTENT ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-14">
          {/* ── LEFT: INFO & DEPARTMENTS ── */}
          <div className="flex flex-col gap-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              <InfoCard
                icon={MapPin}
                label="School Campus"
                value={schoolInfo.address}
              />
              <InfoCard
                icon={Phone}
                label="Main Reception"
                value={schoolInfo.phone}
                href={`tel:${schoolInfo.phone}`}
              />
              <InfoCard
                icon={Mail}
                label="Email Address"
                value={schoolInfo.email}
                href={`mailto:${schoolInfo.email}`}
              />
              <InfoCard
                icon={Clock}
                label="Office Hours"
                value={schoolInfo.hours}
              />
            </div>

            {/* Direct Department Lines */}
            <div
              className="bg-white p-6 border border-gray-200 shadow-sm"
              style={{ borderRadius: theme.borderRadius }}>
              <div className="flex items-center gap-3 mb-4">
                <Building
                  className="w-5 h-5"
                  style={{ color: theme.primary }}
                />
                <h3
                  className="text-lg font-bold"
                  style={{ color: theme.text, fontFamily: theme.fontHeading }}>
                  Key Departments
                </h3>
              </div>
              <div className="space-y-4">
                {schoolInfo.departments.map((dept, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center pb-3 border-b border-gray-100 last:border-0 last:pb-0">
                    <span
                      className="font-medium text-sm"
                      style={{ color: theme.textMuted }}>
                      {dept.name}
                    </span>
                    <a
                      href={`tel:${dept.phone}`}
                      className="font-bold text-sm hover:underline"
                      style={{ color: theme.primary }}>
                      {dept.phone}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── RIGHT: PARENT INQUIRY FORM ── */}
          <div
            className="bg-white border border-gray-200 shadow-lg p-6 sm:p-10 relative"
            style={{ borderRadius: theme.borderRadius }}>
            {/* Top accent line */}
            <div
              className="absolute top-0 left-0 w-full h-1.5"
              style={{ backgroundColor: theme.primary }}
            />

            {status === "success" ? (
              <div className="flex flex-col items-center justify-center h-full py-16 text-center gap-4 animate-[fadeIn_0.5s_ease-out]">
                <CheckCircle
                  className="w-16 h-16 mb-2"
                  style={{ color: theme.primary }}
                  strokeWidth={1.5}
                />
                <h3
                  className="text-3xl font-bold"
                  style={{ color: theme.text, fontFamily: theme.fontHeading }}>
                  Message Received
                </h3>
                <p
                  className="text-base max-w-md leading-relaxed"
                  style={{ color: theme.textMuted }}>
                  Thank you for reaching out to us. The respective department
                  will review your query and get back to you within 1-2 working
                  days.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-6 px-8 py-3 text-sm font-bold transition-colors border border-transparent hover:border-gray-300"
                  style={{
                    backgroundColor: theme.bgMuted,
                    color: theme.primary,
                    borderRadius: theme.borderRadius,
                  }}>
                  Submit Another Query
                </button>
              </div>
            ) : (
              <div className="animate-[fadeIn_0.5s_ease-out]">
                <div className="mb-8">
                  <h2
                    className="text-2xl sm:text-3xl font-bold mb-2"
                    style={{
                      color: theme.text,
                      fontFamily: theme.fontHeading,
                    }}>
                    Send us a Message
                  </h2>
                  <p className="text-sm" style={{ color: theme.textMuted }}>
                    Please fill out the details below. Fields marked{" "}
                    <span className="text-red-500">*</span> are required.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  {/* Parent & Student Names */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <InputField
                      label="Parent / Guardian Name"
                      name="parentName"
                      icon={User}
                      value={form.parentName}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      required
                    />
                    <InputField
                      label="Student Name"
                      name="studentName"
                      icon={GraduationCap}
                      value={form.studentName}
                      onChange={handleChange}
                      placeholder="e.g. Michael Doe"
                    />
                  </div>

                  {/* Contact Info */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
                    <InputField
                      label="Email Address"
                      name="email"
                      type="email"
                      icon={Mail}
                      value={form.email}
                      onChange={handleChange}
                      placeholder="e.g. parent@example.com"
                      required
                    />
                  </div>

                  {/* Dropdowns */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <CustomSelect
                      label="Inquiry Type"
                      name="inquiryType"
                      icon={MessageSquare}
                      value={form.inquiryType}
                      onChange={handleChange}
                      options={inquiryTypes}
                      required
                    />
                    <CustomSelect
                      label="Grade / Class"
                      name="grade"
                      icon={GraduationCap}
                      value={form.grade}
                      onChange={handleChange}
                      options={grades}
                      required
                    />
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-1.5">
                    <label
                      className="text-[12px] font-bold uppercase tracking-wider ml-1"
                      style={{ color: theme.textMuted }}>
                      Your Query / Message{" "}
                      <span className="normal-case font-medium tracking-normal">
                        (optional)
                      </span>
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="How can we assist you today?"
                      rows={4}
                      className="w-full bg-white border border-gray-300 p-4 text-[15px] font-medium placeholder:text-gray-400 focus:outline-none focus:ring-1 transition-all resize-none"
                      style={{
                        color: theme.text,
                        borderRadius: theme.borderRadius,
                        fontFamily: theme.fontBody,
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = theme.primary;
                        e.target.style.boxShadow = `0 0 0 2px ${theme.bgMuted}`;
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "#d1d5db";
                        e.target.style.boxShadow = "none";
                      }}
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="mt-2 w-full flex items-center justify-center gap-3 py-3.5 text-[16px] font-bold text-white transition-all shadow-md disabled:opacity-70 disabled:cursor-not-allowed group"
                    style={{
                      backgroundColor: theme.accent,
                      borderRadius: theme.borderRadius,
                    }}
                    onMouseOver={(e) =>
                      !status &&
                      (e.currentTarget.style.backgroundColor = "#e66400")
                    }
                    onMouseOut={(e) =>
                      !status &&
                      (e.currentTarget.style.backgroundColor = theme.accent)
                    }>
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
                        Sending...
                      </>
                    ) : (
                      <>
                        Submit Inquiry
                        <Send className="w-[18px] h-[18px] group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
