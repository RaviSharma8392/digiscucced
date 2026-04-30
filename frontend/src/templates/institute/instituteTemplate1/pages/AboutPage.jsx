import { Helmet } from "react-helmet-async";
import DynamicPageHeader from "../layout/DynamicPageHeader.jsx";

export default function GalleryPage({ business }) {
  const theme = business?.theme || {};
  const metaData = business?.brand || {};

  // You can later move this to business.gallery from API
  const galleryImages = business?.gallery || [
    {
      url: "https://images.unsplash.com/photo-1581091215367-59ab6b1b2c0b?q=80&w=1200",
      title: "Computer Lab Training"
    },
    {
      url: "https://images.unsplash.com/photo-1581090700227-1e8a0b1b1b0d?q=80&w=1200",
      title: "Student Practical Session"
    },
    {
      url: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=1200",
      title: "Classroom Learning"
    },
    {
      url: "https://images.unsplash.com/photo-1596495577886-d920f1fb7238?q=80&w=1200",
      title: "Workshop Activity"
    }
  ];

  return (
    <div className="bg-white">

      {/* SEO */}
      <Helmet>
        <title>Gallery | {metaData.name || "Institute"}</title>
      </Helmet>

      {/* Header (same pattern as About) */}
      <DynamicPageHeader
        title="Our Gallery"
        description="Explore our institute environment, classrooms, and student activities."
        image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600"
        theme={{ primary: theme.primary || "#2A5B75" }}
      />

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Life at {metaData.name || "Our Institute"}
          </h2>
          <div
            className="w-20 h-1 mx-auto mt-4 rounded-full"
            style={{ backgroundColor: theme.accent || "#DC2626" }}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

          {galleryImages.map((img, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg"
            >
              <img
                src={img.url}
                alt={img.title}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-end">
                <p className="text-white text-sm p-4">{img.title}</p>
              </div>
            </div>
          ))}

        </div>
      </div>

    </div>
  );
}