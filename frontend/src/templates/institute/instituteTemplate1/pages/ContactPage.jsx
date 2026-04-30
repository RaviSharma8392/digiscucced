import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";

// ─── Mock data matching the navbar's manifest structure ──────────────────────
const mockBusiness = {
  metaData: { name: "SI Succeed Computer Institute" },
  theme: { primary: "#1e4862", accent: "#fbd25a" },
  topBar: {
    address: "Near Bus Stand, Mall Road, Bhimtal, Uttarakhand 263136",
    phone: "+91 98765 43210",
    email: "info@sisucceed.com",
  },
};

export default function ContactPage({ business = mockBusiness }) {
  const theme = business?.theme || {};
  const metaData = business?.metaData || {};
  const topBar = business?.topBar || {};

  const [formState, setFormState] = useState({
    name: "", phone: "", email: "", course: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState(null);

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const contactItems = [
    {
      icon: MapPin,
      label: "Our Location",
      value: topBar.address || "123 Education Hub, City, State 123456",
      href: null,
    },
    {
      icon: Phone,
      label: "Phone Number",
      value: topBar.phone || "+91 90000 00000",
      href: `tel:${topBar.phone}`,
    },
    {
      icon: Mail,
      label: "Email Address",
      value: topBar.email || "info@institute.com",
      href: `mailto:${topBar.email}`,
    },
    {
      icon: Clock,
      label: "Working Hours",
      value: "Mon – Sat: 9:00 AM – 7:00 PM",
      sub: "Sunday: Closed",
      href: null,
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=DM+Sans:wght@400;500;600&display=swap');

        :root {
          --navy: #1e4862;
          --navy-dark: #153a51;
          --navy-deeper: #0d2230;
          --sky: #a0c5d6;
          --sky-light: #d4e9f2;
          --gold: #fbd25a;
          --gold-dark: #eabf45;
          --white: #ffffff;
          --slate: #f5f8fa;
        }

        .cp-root * { box-sizing: border-box; }

        .cp-root {
          font-family: 'DM Sans', sans-serif;
          background: var(--slate);
          min-height: 100vh;
        }

        /* ── Hero ── */
        .cp-hero {
          background: var(--navy);
          position: relative;
          overflow: hidden;
          padding: 96px 24px 140px;
          text-align: center;
        }
        .cp-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse 70% 60% at 50% 110%, var(--sky) 0%, transparent 70%);
          opacity: 0.18;
          pointer-events: none;
        }
        .cp-hero-dot-grid {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(var(--sky) 1px, transparent 1px);
          background-size: 28px 28px;
          opacity: 0.07;
          pointer-events: none;
        }
        .cp-hero-tag {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(251,210,90,0.15);
          border: 1px solid rgba(251,210,90,0.4);
          color: var(--gold);
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 2px;
          text-transform: uppercase;
          padding: 6px 16px;
          border-radius: 999px;
          margin-bottom: 20px;
        }
        .cp-hero h1 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.6rem, 6vw, 4.2rem);
          font-weight: 800;
          color: var(--white);
          line-height: 1.15;
          margin: 0 0 16px;
        }
        .cp-hero h1 span {
          color: var(--gold);
        }
        .cp-hero p {
          color: rgba(160,197,214,0.85);
          font-size: 1.05rem;
          max-width: 500px;
          margin: 0 auto;
          line-height: 1.7;
        }

        /* ── Card wrapper ── */
        .cp-outer {
          max-width: 1100px;
          margin: -72px auto 80px;
          padding: 0 20px;
          position: relative;
          z-index: 10;
        }

        .cp-card {
          display: grid;
          grid-template-columns: 360px 1fr;
          background: var(--white);
          border-radius: 24px;
          overflow: hidden;
          box-shadow:
            0 4px 6px rgba(14,34,48,0.04),
            0 20px 60px rgba(14,34,48,0.14);
        }
        @media (max-width: 860px) {
          .cp-card { grid-template-columns: 1fr; }
        }

        /* ── Info Panel ── */
        .cp-info {
          background: var(--navy);
          padding: 48px 36px;
          position: relative;
          overflow: hidden;
        }
        .cp-info::after {
          content: '';
          position: absolute;
          bottom: -60px;
          right: -60px;
          width: 200px;
          height: 200px;
          background: radial-gradient(circle, rgba(160,197,214,0.2) 0%, transparent 70%);
          border-radius: 50%;
        }
        .cp-info-pretitle {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 8px;
        }
        .cp-info h2 {
          font-family: 'Playfair Display', serif;
          font-size: 1.9rem;
          font-weight: 700;
          color: var(--white);
          line-height: 1.25;
          margin: 0 0 36px;
        }

        .cp-info-items { display: flex; flex-direction: column; gap: 28px; }

        .cp-contact-item {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          text-decoration: none;
        }
        .cp-item-icon {
          width: 44px;
          height: 44px;
          background: rgba(251,210,90,0.12);
          border: 1px solid rgba(251,210,90,0.3);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          color: var(--gold);
          transition: background 0.2s, transform 0.2s;
        }
        a.cp-contact-item:hover .cp-item-icon {
          background: rgba(251,210,90,0.22);
          transform: translateY(-2px);
        }
        .cp-item-label {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: rgba(160,197,214,0.65);
          margin-bottom: 4px;
        }
        .cp-item-value {
          font-size: 0.88rem;
          color: rgba(255,255,255,0.9);
          line-height: 1.55;
          font-weight: 500;
        }
        .cp-item-sub {
          font-size: 0.82rem;
          color: rgba(160,197,214,0.6);
          margin-top: 2px;
        }

        /* Divider inside info panel */
        .cp-info-divider {
          border: none;
          border-top: 1px solid rgba(160,197,214,0.12);
          margin: 32px 0;
        }
        .cp-info-note {
          font-size: 0.82rem;
          color: rgba(160,197,214,0.55);
          line-height: 1.6;
        }

        /* ── Form Panel ── */
        .cp-form-panel {
          padding: 48px 44px;
        }
        @media (max-width: 600px) {
          .cp-form-panel { padding: 32px 20px; }
        }

        .cp-form-pretitle {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: var(--sky);
          margin-bottom: 8px;
        }
        .cp-form-panel h2 {
          font-family: 'Playfair Display', serif;
          font-size: 2rem;
          font-weight: 800;
          color: var(--navy);
          margin: 0 0 32px;
        }

        .cp-form { display: flex; flex-direction: column; gap: 22px; }

        .cp-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        @media (max-width: 540px) {
          .cp-row { grid-template-columns: 1fr; }
        }

        .cp-field { display: flex; flex-direction: column; gap: 6px; }

        .cp-label {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.8px;
          text-transform: uppercase;
          color: var(--navy-dark);
        }

        .cp-input,
        .cp-select,
        .cp-textarea {
          width: 100%;
          padding: 12px 16px;
          border-radius: 10px;
          border: 1.5px solid #dce8ef;
          background: #f6fafc;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.9rem;
          color: var(--navy);
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s, background 0.2s;
        }
        .cp-input::placeholder,
        .cp-textarea::placeholder {
          color: #a8c4d3;
        }
        .cp-input:focus,
        .cp-select:focus,
        .cp-textarea:focus {
          border-color: var(--sky);
          background: var(--white);
          box-shadow: 0 0 0 4px rgba(160,197,214,0.2);
        }
        .cp-select {
          appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' fill='none'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%231e4862' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 16px center;
          cursor: pointer;
        }
        .cp-textarea { resize: vertical; min-height: 110px; }

        /* Submit Button */
        .cp-submit {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 15px 32px;
          background: var(--navy);
          color: var(--gold);
          border: none;
          border-radius: 12px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.95rem;
          font-weight: 700;
          letter-spacing: 0.5px;
          cursor: pointer;
          transition: background 0.2s, transform 0.15s, box-shadow 0.2s;
          box-shadow: 0 4px 18px rgba(30,72,98,0.22);
        }
        .cp-submit:hover {
          background: var(--navy-dark);
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(30,72,98,0.3);
        }
        .cp-submit:active { transform: translateY(0); }

        .cp-submit-icon {
          background: rgba(251,210,90,0.2);
          border-radius: 6px;
          padding: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* ── Success State ── */
        .cp-success {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          gap: 16px;
          padding: 48px 32px;
          animation: fadeUp 0.4s ease;
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .cp-success-icon {
          width: 72px;
          height: 72px;
          background: rgba(160,197,214,0.15);
          border: 2px solid var(--sky);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--navy);
        }
        .cp-success h3 {
          font-family: 'Playfair Display', serif;
          font-size: 1.8rem;
          font-weight: 800;
          color: var(--navy);
          margin: 0;
        }
        .cp-success p {
          color: #6a8fa0;
          font-size: 0.95rem;
          max-width: 360px;
          line-height: 1.6;
          margin: 0;
        }
        .cp-success-badge {
          background: var(--gold);
          color: var(--navy);
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          padding: 6px 18px;
          border-radius: 999px;
          margin-top: 8px;
        }

        /* ── Map strip ── */
        .cp-map-strip {
          max-width: 1100px;
          margin: 0 auto 80px;
          padding: 0 20px;
        }
        .cp-map-label {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--navy);
          opacity: 0.5;
          margin-bottom: 12px;
        }
        .cp-map-placeholder {
          width: 100%;
          height: 220px;
          border-radius: 16px;
          background: linear-gradient(135deg, var(--sky-light) 0%, var(--sky) 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          gap: 10px;
          color: var(--navy);
          font-weight: 600;
          font-size: 0.9rem;
          opacity: 0.7;
          border: 1.5px dashed var(--sky);
          position: relative;
          overflow: hidden;
        }
        .cp-map-placeholder::before {
          content: '';
          position: absolute;
          inset: 0;
          background: repeating-linear-gradient(
            45deg,
            transparent,
            transparent 12px,
            rgba(30,72,98,0.04) 12px,
            rgba(30,72,98,0.04) 13px
          );
        }
      `}</style>

      <div className="cp-root">

        {/* ── HERO ── */}
        <div className="cp-hero">
          <div className="cp-hero-dot-grid" />
          <div style={{ position: "relative", zIndex: 1 }}>
            <div className="cp-hero-tag">
              <Mail size={12} />
              Contact Us
            </div>
            <h1>Let's Start a<br /><span>Conversation</span></h1>
            <p>Have questions about admissions, courses, or fees? Our team is ready to guide you.</p>
          </div>
        </div>

        {/* ── MAIN CARD ── */}
        <div className="cp-outer">
          <div className="cp-card">

            {/* Info Panel */}
            <div className="cp-info">
              <p className="cp-info-pretitle">Reach us at</p>
              <h2>{metaData.name || "Institute"}</h2>

              <div className="cp-info-items">
                {contactItems.map((item, i) => {
                  const Icon = item.icon;
                  const Tag = item.href ? "a" : "div";
                  return (
                    <Tag
                      key={i}
                      className="cp-contact-item"
                      {...(item.href ? { href: item.href } : {})}
                    >
                      <div className="cp-item-icon">
                        <Icon size={18} />
                      </div>
                      <div>
                        <div className="cp-item-label">{item.label}</div>
                        <div className="cp-item-value">{item.value}</div>
                        {item.sub && <div className="cp-item-sub">{item.sub}</div>}
                      </div>
                    </Tag>
                  );
                })}
              </div>

              <hr className="cp-info-divider" />
              <p className="cp-info-note">
                We typically respond within 24 hours. For urgent inquiries, please call us directly.
              </p>
            </div>

            {/* Form Panel */}
            <div className="cp-form-panel">
              {submitted ? (
                <div className="cp-success">
                  <div className="cp-success-icon">
                    <CheckCircle size={32} />
                  </div>
                  <h3>Message Received!</h3>
                  <p>Thank you for reaching out. Our admissions team will get back to you within 24 hours.</p>
                  <div className="cp-success-badge">We'll be in touch soon</div>
                </div>
              ) : (
                <>
                  <p className="cp-form-pretitle">Enquiry Form</p>
                  <h2>Send Us a Message</h2>

                  <form className="cp-form" onSubmit={handleSubmit}>
                    <div className="cp-row">
                      <div className="cp-field">
                        <label className="cp-label">Full Name</label>
                        <input
                          className="cp-input"
                          name="name"
                          type="text"
                          placeholder="John Doe"
                          value={formState.name}
                          onChange={handleChange}
                          onFocus={() => setFocused("name")}
                          onBlur={() => setFocused(null)}
                        />
                      </div>
                      <div className="cp-field">
                        <label className="cp-label">Phone Number</label>
                        <input
                          className="cp-input"
                          name="phone"
                          type="tel"
                          placeholder="+91 XXXXX XXXXX"
                          value={formState.phone}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="cp-field">
                      <label className="cp-label">Email Address</label>
                      <input
                        className="cp-input"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formState.email}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="cp-field">
                      <label className="cp-label">Course of Interest</label>
                      <select
                        className="cp-select"
                        name="course"
                        value={formState.course}
                        onChange={handleChange}
                      >
                        <option value="">Select a course…</option>
                        <option>Web Development</option>
                        <option>Data Science</option>
                        <option>Digital Marketing</option>
                        <option>Tally &amp; GST</option>
                        <option>Computer Basics (DCA)</option>
                        <option>Graphic Design</option>
                      </select>
                    </div>

                    <div className="cp-field">
                      <label className="cp-label">Your Message</label>
                      <textarea
                        className="cp-textarea"
                        name="message"
                        placeholder="Tell us how we can help you…"
                        value={formState.message}
                        onChange={handleChange}
                      />
                    </div>

                    <button type="submit" className="cp-submit">
                      Send Message
                      <span className="cp-submit-icon">
                        <Send size={16} />
                      </span>
                    </button>
                  </form>
                </>
              )}
            </div>

          </div>
        </div>

        {/* ── MAP PLACEHOLDER ── */}
        <div className="cp-map-strip">
          <p className="cp-map-label">Find us on the map</p>
          <div className="cp-map-placeholder">
            <MapPin size={28} style={{ position: "relative", zIndex: 1 }} />
            <span style={{ position: "relative", zIndex: 1 }}>Google Maps will be embedded here</span>
          </div>
        </div>

      </div>
    </>
  );
}