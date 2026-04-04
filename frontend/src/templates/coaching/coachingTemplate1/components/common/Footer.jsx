import React from "react";

// --- Data Structure matching the image exactly ---
const defaultFooterData = {
  copyright: "© 2025. All rights reserved.",
  columns: [
    {
      title: "About",
      links: [
        { label: "About us", url: "#" },
        { label: "Blog", url: "#" },
        { label: "News", url: "#" },
        { label: "MyExam EduBlogs", url: "#" },
        { label: "Privacy policy", url: "#" },
        { label: "Public notice", url: "#" },
        { label: "Careers", url: "#" },
        { label: "Dhoni Inspires NEET Aspirants", url: "#" },
        { label: "Dhoni Inspires JEE", url: "#" },
      ],
    },
    {
      title: "Help & Support",
      links: [
        { label: "Refund policy", url: "#" },
        { label: "Transfer policy", url: "#" },
        { label: "Terms & Conditions", url: "#" },
        { label: "Contact us", url: "#" },
      ],
    },
    {
      title: "Popular goals",
      links: [
        { label: "NEET Coaching", url: "#" },
        { label: "JEE Coaching", url: "#" },
        { label: "6th to 10th", url: "#" },
      ],
    },
    {
      title: "Courses",
      links: [
        { label: "Classroom Courses", url: "#" },
        { label: "Online Courses", url: "#" },
        { label: "Distance Learning", url: "#" },
        { label: "Online Test Series", url: "#" },
        { label: "International Olympiads Online Course", url: "#" },
        { label: "NEET Test Series", url: "#" },
        { label: "JEE Test Series", url: "#" },
        { label: "JEE Main Test", url: "#" },
      ],
    },
    {
      title: "Centers",
      links: [
        { label: "Kota", url: "#" },
        { label: "Bangalore", url: "#" },
        { label: "Indore", url: "#" },
        { label: "Delhi", url: "#" },
        { label: "More centres", url: "#" },
      ],
    },
    {
      title: "Exam Information",
      links: [
        { label: "JEE Main", url: "#" },
        { label: "JEE Advanced", url: "#" },
        { label: "NEET UG", url: "#" },
        { label: "CBSE", url: "#" },
        { label: "NIOS", url: "#" },
        { label: "NCERT Solutions", url: "#" },
        { label: "Olympiad", url: "#" },
        { label: "NEET Previous Year Papers", url: "#" },
      ],
    },
  ],
};

export default function Footer({ footerMeta = defaultFooterData }) {
  const { copyright, columns } = footerMeta;

  return (
    <>
      {/* Pure light blue-grey background, standard top border */}
      <footer className="bg-[#fcfdfe] border-t border-slate-100 py-16">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-x-6 gap-y-12">
            {columns.map((col, i) => (
              <div key={i} className="flex flex-col">
                <h4 className="font-semibold text-[15px] text-slate-800 mb-5 leading-none">
                  {col.title}
                </h4>

                <ul className="space-y-2.5 max-w-xs">
                  {col.links.map((link, j) => (
                    <li key={j}>
                      <a
                        href={link.url}
                        className="text-sm text-gray-500 hover:text-[#007cc2] transition-colors leading-relaxed">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center text-gray-400 text-xs mt-16 border-t border-slate-200/60 pt-8 max-w-7xl mx-auto px-4">
          {copyright}
        </div>
      </footer>
    </>
  );
}
