import { Link } from "react-router-dom";
import { schoolConfig } from "../../config/schoolConfig";

export default function AdmissionCTA() {
  return (
    <section className="px-8 pb-16">
      <div
        className="rounded-xl px-10 py-10 text-center text-white max-w-6xl mx-auto"
        style={{
          background: `linear-gradient(135deg, ${schoolConfig.colors.primary}, #1a4e8a)`,
        }}
      >
        <h2 className="font-heading text-[26px] mb-2">
          Begin Your Child's Journey With Us
        </h2>
        <p className="text-slate-400 text-[14px] mb-6">
          Admissions for the 2026–27 academic session are now open. Seats fill fast — secure yours today.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link
            to="/admissions"
            className="text-[13px] font-medium px-6 py-2.5 rounded-md no-underline transition-colors"
            style={{ background: schoolConfig.colors.accent, color: "#1a0a00" }}
          >
            Download Prospectus
          </Link>
          <Link
            to="/contact"
            className="text-[13px] font-medium px-6 py-2.5 rounded-md no-underline text-white transition-colors"
            style={{ border: "1.5px solid rgba(255,255,255,0.25)" }}
          >
            Schedule a Visit
          </Link>
        </div>
      </div>
    </section>
  );
}
