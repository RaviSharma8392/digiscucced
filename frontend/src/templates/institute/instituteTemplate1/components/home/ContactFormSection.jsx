import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function ContactFormSection({ business }) {
  const instituteName = business?.brand?.name || "SI Succeed Institute";

  const purposes = [
    "Library Enquiry",
    "SSC Preparation",
    "Banking Exams",
    "Railway Exams",
    "UPSC / State PCS",
    "Other"
  ];

  const [form, setForm] = useState({
    name: "",
    phone: "",
    purpose: "",
    message: "",
    consent: true
  });

  const [msg, setMsg] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.phone || !form.purpose) {
      setMsg("Please fill all required fields");
      return;
    }

    console.log("ENQUIRY:", form);

    setMsg("We will contact you shortly!");

    setForm({
      name: "",
      phone: "",
      purpose: "",
      message: "",
      consent: true
    });
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[700px] mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl uppercase text-[#333] font-bold">
            Talk to {instituteName}
          </h2>
          <p className="text-gray-500 mt-2 text-sm">
            Quick enquiry for library & exam preparation
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Name */}
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Student Name *"
            className="w-full border border-gray-200 py-3.5 px-4 text-sm focus:border-blue-400"
          />

          {/* Phone */}
          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Mobile Number *"
            className="w-full border border-gray-200 py-3.5 px-4 text-sm focus:border-blue-400"
          />

          {/* Purpose */}
          <div className="relative">
            <select
              name="purpose"
              value={form.purpose}
              onChange={handleChange}
              className="appearance-none w-full border border-gray-200 py-3.5 px-4 text-sm text-gray-600 focus:border-blue-400"
            >
              <option value="">Select Purpose *</option>
              {purposes.map((p, i) => (
                <option key={i}>{p}</option>
              ))}
            </select>
            <ChevronDown size={14} className="absolute right-4 top-[18px] text-gray-400" />
          </div>

          {/* Message */}
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your message (optional)"
            rows="3"
            className="w-full border border-gray-200 py-3.5 px-4 text-sm focus:border-blue-400"
          />

          {/* Consent */}
          <div className="flex items-start gap-2">
            <input
              type="checkbox"
              name="consent"
              checked={form.consent}
              onChange={handleChange}
            />
            <label className="text-xs text-gray-600">
              I agree to receive calls/WhatsApp from {instituteName}
            </label>
          </div>

          {/* Button */}
          <div className="text-center">
            <button
              type="submit"
              className="px-8 py-3 text-sm border border-blue-500 text-blue-600 hover:bg-blue-50"
            >
              Request Call Back
            </button>
          </div>

          {/* Message */}
          {msg && (
            <p className="text-center text-green-600 text-sm">{msg}</p>
          )}

        </form>
      </div>
    </section>
  );
}