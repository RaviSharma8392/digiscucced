import { schoolConfig } from "../../config/schoolConfig";
import SectionHeader from "../ui/SectionHeader";
import ProgramCard from "../ui/ProgramCard";

export default function ProgramsGrid() {
  const { programs } = schoolConfig;

  return (
    <section className="px-8 py-16 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          tag="What We Offer"
          title="Academic Programmes"
          subtitle="From early childhood to senior secondary, every stage is designed for growth and discovery."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {programs.map((prog) => (
            <ProgramCard key={prog.id} program={prog} />
          ))}
        </div>
      </div>
    </section>
  );
}
