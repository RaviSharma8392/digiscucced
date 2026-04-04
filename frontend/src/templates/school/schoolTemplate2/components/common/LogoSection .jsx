import React from "react";

const logos = [
  {
    id: 1,
    name: "Azadi 75",
    src: "https://educationportal.uk.gov.in/images/uttarakhand_index_logo.png",
  },
  {
    id: 2,
    name: "Scout Guide",
    src: "https://sskunjpura.org/assets/images/flogo4.png",
  },
  {
    id: 3,
    name: "G20 India",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxE2zmwewZps6a9ASM7G0DAsSYWBH-ToNVeQ&s",
  },
  {
    id: 4,
    name: "UK Board",
    src: "https://upload.wikimedia.org/wikipedia/en/thumb/d/dc/Uttarakhand_Board_of_School_Education_Logo.jpg/250px-Uttarakhand_Board_of_School_Education_Logo.jpg",
  },
  {
    id: 5,
    name: "NCERT",
    src: "https://thebranvetica.com/assets/img/NCERT_Logo.webp",
  },
];

const LogoSection = () => {
  return (
    <section className="bg-slate-50 py-20 relative overflow-hidden">
      {/* Top Decorative Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-600 to-transparent opacity-30"></div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-slate-500 mb-3">
            National Programs
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Associated <span className="text-blue-700">Organizations</span>
          </h2>

          <div className="w-20 h-1 bg-orange-500 mx-auto mt-4"></div>
        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-10">
          {logos.map((logo) => (
            <div
              key={logo.id}
              className="group bg-white border border-slate-200 p-8 flex flex-col items-center justify-center 
              shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="w-full h-24 flex items-center justify-center">
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <p className="mt-4 text-xs font-semibold tracking-wider text-slate-600 uppercase group-hover:text-blue-700 transition-colors">
                {logo.name}
              </p>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="mt-20 flex items-center gap-4">
          <div className="h-8 w-1 bg-blue-700"></div>
          <h4 className="text-xl font-bold text-slate-800">Our Facilities</h4>
          <div className="flex-grow h-px bg-slate-300"></div>
        </div>
      </div>
    </section>
  );
};

export default LogoSection;
