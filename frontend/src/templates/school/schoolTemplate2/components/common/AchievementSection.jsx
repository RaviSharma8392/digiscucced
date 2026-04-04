import React, { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ArrowRightCircle,
  Award,
} from "lucide-react";

const DATA = {
  classX: [
    {
      id: 1,
      name: "VANYA BHANDARI",
      score: "98.6%",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
      tag: "City Topper",
    },
    {
      id: 2,
      name: "ANANYA SHARMA",
      score: "97.2%",
      img: "https://randomuser.me/api/portraits/women/45.jpg",
      tag: "School Rank 2",
    },
  ],
  classXII: [
    {
      id: 1,
      name: "PRATISHTHA SINGH",
      score: "99.25%",
      img: "https://randomuser.me/api/portraits/women/65.jpg",
      tag: "State Rank 1",
    },
    {
      id: 2,
      name: "ADITYA VERMA",
      score: "98.8%",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
      tag: "Science Stream Topper",
    },
  ],
  houses: [
    {
      id: 1,
      name: "ROBINSON HOUSE",
      motto: "Virtue & Valor",
      img: "https://hermanngmeinerschoolbhimtal.org/static/media/achivements.357df3e90b7964da7701.jpg",
      color: "border-blue-500",
    },
    {
      id: 2,
      name: "GANDHI HOUSE",
      motto: "Truth & Non-Violence",
      img: "https://img.freepik.com/free-vector/flat-design-family-crest-template_23-2149180252.jpg",
      color: "border-emerald-500",
    },
  ],
};

const AchievementSection = () => {
  const [indices, setIndices] = useState({ x: 0, xii: 0, house: 0 });

  // Automatic sliding logic
  useEffect(() => {
    const timer = setInterval(() => {
      setIndices((prev) => ({
        x: (prev.x + 1) % DATA.classX.length,
        xii: (prev.xii + 1) % DATA.classXII.length,
        house: (prev.house + 1) % DATA.houses.length,
      }));
    }, 5000); // Changed to 5 seconds for better readability
    return () => clearInterval(timer);
  }, []);

  const Card = ({ title, subtitle, name, score, img, tag, onNext, onPrev }) => (
    <div className="flex flex-col items-center text-center group w-full">
      <div className="bg-indigo-900 text-white px-4 py-1 rounded-full text-xs font-semibold tracking-wider mb-6 shadow-md">
        {subtitle}
      </div>

      <div className="relative flex items-center justify-center w-full px-2 sm:px-8 mb-6">
        <button
          onClick={onPrev}
          className="absolute left-0 z-10 p-2 bg-white/80 backdrop-blur-sm rounded-full text-indigo-900 shadow-lg hover:bg-indigo-600 hover:text-white transition-all duration-300 border border-indigo-100">
          <ChevronLeft size={20} />
        </button>

        <div className="relative w-44 h-56 md:w-52 md:h-64 overflow-hidden rounded-2xl shadow-xl shadow-indigo-900/20 ring-4 ring-white">
          <img
            src={img}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/80 via-transparent to-transparent opacity-80" />

          <div className="absolute bottom-3 left-0 right-0 flex justify-center">
            <span className="bg-emerald-500 text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-sm flex items-center gap-1">
              <Award size={12} /> {tag}
            </span>
          </div>
        </div>

        <button
          onClick={onNext}
          className="absolute right-0 z-10 p-2 bg-white/80 backdrop-blur-sm rounded-full text-indigo-900 shadow-lg hover:bg-indigo-600 hover:text-white transition-all duration-300 border border-indigo-100">
          <ChevronRight size={20} />
        </button>
      </div>

      <h5 className="font-extrabold text-lg text-slate-800 tracking-tight mb-1">
        {name}
      </h5>
      <p className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-emerald-500 font-black text-2xl drop-shadow-sm">
        {score}
      </p>
    </div>
  );

  return (
    <section className="bg-gradient-to-br from-slate-50 via-white to-indigo-50/50 py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-start">
        {/* LEFT COLUMN: ACADEMIC ACHIEVEMENTS */}
        <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-3xl shadow-2xl shadow-indigo-100 border border-slate-100">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-black text-slate-800 tracking-tight">
              Academic{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-indigo-400">
                Brilliance
              </span>
            </h2>
            <p className="mt-3 text-slate-500 font-medium">
              Celebrating our top scholars of the academic year
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 sm:gap-6">
            <Card
              subtitle="CLASS X TOPPER"
              {...DATA.classX[indices.x]}
              onNext={() =>
                setIndices((p) => ({ ...p, x: (p.x + 1) % DATA.classX.length }))
              }
              onPrev={() =>
                setIndices((p) => ({
                  ...p,
                  x: (p.x - 1 + DATA.classX.length) % DATA.classX.length,
                }))
              }
            />
            <Card
              subtitle="CLASS XII TOPPER"
              {...DATA.classXII[indices.xii]}
              onNext={() =>
                setIndices((p) => ({
                  ...p,
                  xii: (p.xii + 1) % DATA.classXII.length,
                }))
              }
              onPrev={() =>
                setIndices((p) => ({
                  ...p,
                  xii:
                    (p.xii - 1 + DATA.classXII.length) % DATA.classXII.length,
                }))
              }
            />
          </div>

          <div className="mt-12 flex justify-center">
            <button className="flex items-center gap-2 bg-indigo-50 text-indigo-700 px-8 py-3 rounded-full text-sm font-bold hover:bg-indigo-600 hover:text-white transition-all duration-300 shadow-sm hover:shadow-md group">
              View All Scholars{" "}
              <ArrowRightCircle
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </div>
        </div>

        {/* RIGHT COLUMN: COLLEGE HOUSES */}
        <div className="lg:col-span-5 flex flex-col items-center bg-white p-6 sm:p-10 rounded-3xl shadow-2xl shadow-indigo-100 border border-slate-100 h-full justify-center">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-black text-slate-800 tracking-tight">
              Legacy{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-400">
                Houses
              </span>
            </h2>
            <p className="mt-3 text-slate-500 font-medium">
              Fostering teamwork and leadership
            </p>
          </div>

          <div className="relative group w-full max-w-sm px-4 sm:px-8">
            <button
              onClick={() =>
                setIndices((p) => ({
                  ...p,
                  house:
                    (p.house - 1 + DATA.houses.length) % DATA.houses.length,
                }))
              }
              className="absolute left-0 top-1/2 -translate-y-1/2 p-2.5 bg-white rounded-full text-indigo-900 shadow-xl z-10 hover:bg-emerald-500 hover:text-white transition-colors border border-slate-100">
              <ChevronLeft size={24} />
            </button>

            {/* House Flag Card */}
            <div
              className={`relative bg-slate-50 p-6 rounded-2xl shadow-inner border-b-4 ${DATA.houses[indices.house].color} aspect-square flex flex-col items-center justify-center overflow-hidden transition-all duration-500`}>
              <img
                src={DATA.houses[indices.house].img}
                alt="House Crest"
                className="w-3/4 h-3/4 object-contain mb-4 hover:scale-105 transition-transform duration-500 drop-shadow-xl"
              />
              <div className="absolute bottom-6 bg-white/95 px-6 py-2 rounded-full shadow-md border border-slate-100 backdrop-blur-md">
                <p className="text-[11px] font-bold text-slate-800 uppercase tracking-widest">
                  {DATA.houses[indices.house].motto}
                </p>
              </div>
            </div>

            <button
              onClick={() =>
                setIndices((p) => ({
                  ...p,
                  house: (p.house + 1) % DATA.houses.length,
                }))
              }
              className="absolute right-0 top-1/2 -translate-y-1/2 p-2.5 bg-white rounded-full text-indigo-900 shadow-xl z-10 hover:bg-emerald-500 hover:text-white transition-colors border border-slate-100">
              <ChevronRight size={24} />
            </button>
          </div>

          <h3 className="mt-10 text-3xl font-black text-indigo-950 uppercase tracking-tight text-center">
            {DATA.houses[indices.house].name}
          </h3>

          <button className="mt-8 flex items-center gap-2 bg-indigo-900 text-white px-10 py-3.5 rounded-full text-base font-bold hover:bg-indigo-800 transition-all duration-300 shadow-lg hover:shadow-indigo-900/30 active:scale-95 group w-full justify-center sm:w-auto">
            Explore Houses{" "}
            <ArrowRightCircle
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default AchievementSection;
