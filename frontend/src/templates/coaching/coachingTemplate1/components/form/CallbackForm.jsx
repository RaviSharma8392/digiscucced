import React, { useState } from "react";

export default function CallbackForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    mode: "", // 'online' or 'classroom'
  });

  // Check if all fields are filled to enable the button
  const isFormValid =
    formData.fullName.trim() && formData.mobile.trim() && formData.mode;

  return (
    <section className="py-16 bg-slate-50 font-[Inter,sans-serif] flex justify-center px-4">
      {/* ── Main Card Container ── */}
      <div className="w-full max-w-4xl bg-white rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-slate-100 flex flex-col md:flex-row overflow-hidden relative">
        {/* ── LEFT COLUMN: Info & Progress ── */}
        <div className="w-full md:w-5/12 p-8 md:p-12 relative flex flex-col justify-center border-b md:border-b-0 md:border-r border-slate-100">
          {/* Subtle Grid Background Pattern */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.4]"
            style={{
              backgroundImage: `linear-gradient(#f1f5f9 1px, transparent 1px), linear-gradient(90deg, #f1f5f9 1px, transparent 1px)`,
              backgroundSize: "24px 24px",
            }}
          />

          <div className="relative z-10">
            {/* Rocket Icon */}
            <div className="w-14 h-14 bg-[#fff3e0] rounded-full flex items-center justify-center text-2xl mb-6 shadow-sm border border-orange-100">
              🚀
            </div>

            {/* Headings */}
            <h2 className="text-[28px] md:text-[32px] font-bold text-slate-900 leading-tight mb-2 tracking-tight">
              Request a callback
            </h2>
            <p className="text-slate-500 text-lg mb-8">
              Or call +91 9513736499
            </p>

            {/* Progress Bar */}
            <div className="flex items-center gap-4">
              <div className="flex-1 h-1.5 bg-[#e2f5ec] rounded-full overflow-hidden">
                <div className="w-1/2 h-full bg-[#00b87c] rounded-full" />
              </div>
              <span className="text-sm font-bold text-slate-900">1/2</span>
            </div>
          </div>
        </div>

        {/* ── RIGHT COLUMN: Form Inputs ── */}
        <div className="w-full md:w-7/12 p-8 md:p-12 bg-white relative z-10">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col gap-6">
            {/* Full Name Input */}
            <div className="flex flex-col gap-2">
              <label className="text-[13px] font-semibold text-slate-700">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Ex: Rohit Sharma"
                value={formData.fullName}
                onChange={(e) =>
                  setFormData({ ...formData, fullName: e.target.value })
                }
                className="w-full px-4 py-3.5 rounded-xl border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#00b87c] focus:ring-1 focus:ring-[#00b87c] transition-all"
              />
            </div>

            {/* Mobile Number Input */}
            <div className="flex flex-col gap-2">
              <label className="text-[13px] font-semibold text-slate-700">
                Mobile Number
              </label>
              <input
                type="tel"
                placeholder="Ex: 9876543210"
                value={formData.mobile}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    mobile: e.target.value.replace(/\D/g, ""),
                  })
                }
                maxLength={10}
                className="w-full px-4 py-3.5 rounded-xl border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#00b87c] focus:ring-1 focus:ring-[#00b87c] transition-all"
              />
            </div>

            {/* Course Mode Selector */}
            <div className="flex flex-col gap-3 mt-1">
              <label className="text-[13px] font-semibold text-slate-700">
                Course Mode:
              </label>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, mode: "online" })}
                  className={`flex-1 py-3 px-4 rounded-xl text-sm font-medium border transition-all ${
                    formData.mode === "online"
                      ? "border-[#00b87c] bg-[#ecfdf5] text-[#00b87c] shadow-sm"
                      : "border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50"
                  }`}>
                  Online
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setFormData({ ...formData, mode: "classroom" })
                  }
                  className={`flex-1 py-3 px-4 rounded-xl text-sm font-medium border transition-all ${
                    formData.mode === "classroom"
                      ? "border-[#00b87c] bg-[#ecfdf5] text-[#00b87c] shadow-sm"
                      : "border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50"
                  }`}>
                  Classroom
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={!isFormValid}
              className={`mt-6 w-full py-4 rounded-full text-[15px] font-bold transition-all duration-300 ${
                isFormValid
                  ? "bg-[#00b87c] text-white hover:bg-[#009c69] shadow-lg shadow-[#00b87c]/25 active:scale-[0.98]"
                  : "bg-slate-200 text-slate-400 cursor-not-allowed"
              }`}>
              Let's get started
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
