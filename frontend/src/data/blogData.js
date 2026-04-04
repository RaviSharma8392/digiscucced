// data/blogData.js

export const blog1 = {
  eyebrow: "Insights · Digital Transformation",
  title: "Why a Professional Website Is a Growth Engine for Small Businesses",
  dek: "Practical, low-cost ways to build credibility and generate leads.",
  updated: "Mar 19, 2026",
  readTime: "7 min read",

  author: {
    name: "A. Sharma",
    role: "Digital Advisory",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=128",
  },

  toc: [
    { id: "why", label: "Why a website matters" },
    { id: "credibility", label: "Build credibility" },
    { id: "leads", label: "Generate leads" },
  ],

  sections: [
    {
      id: "why",
      title: "Why a website matters",
      text: "Customers research online before they buy. A website builds trust and gives your business a digital presence.",
    },

    {
      id: "credibility",
      title: "Build credibility",
      list: [
        "Clear value proposition",
        "Customer testimonials",
        "Business contact information",
      ],
    },

    {
      id: "leads",
      title: "Generate leads",
      text: "Add call-to-action buttons and simple forms so visitors can easily contact you.",
    },
  ],

  kpis: [
    {
      value: "3s",
      label: "Page speed",
      sub: "Fast pages convert more customers.",
    },
    {
      value: "2x",
      label: "Lead growth",
      sub: "Better landing pages increase enquiries.",
    },
    {
      value: "24/7",
      label: "Availability",
      sub: "Your business is always online.",
    },
  ],
};