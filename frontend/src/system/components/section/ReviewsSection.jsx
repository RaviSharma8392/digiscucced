import React, { useState } from "react";

const videoReviews = [
  {
    id: 1,
    name: "Elena Sharma",
    company: "Apex Logistics",
    video:
      "https://cdn.sanity.io/files/9bk5wvkx/production/af4e8a23683d87cfdfab5dd361810d092af5f1e8.mp4",
  },
  {
    id: 2,
    name: "Marcus Singh",
    company: "Thorne Real Estate",
    video: "https://www.w3schools.com/html/movie.mp4",
  },
  {
    id: 3,
    name: "Sarah Patel",
    company: "Nexis Technologies",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
];

const VideoReviews = () => {
  const [activeVideo, setActiveVideo] = useState(videoReviews[0]);

  return (
    <section className="bg-[#f5f5f5] w-full py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <p className="text-sm tracking-widest uppercase text-blue-600 mb-4">
          Client Stories
        </p>

        <h2 className="text-4xl md:text-5xl font-serif text-black mb-6">
          Real results. Real people.
        </h2>

        <p className="text-gray-600 max-w-2xl mb-16">
          Hear directly from our clients about how we helped transform their
          digital growth and scale their business.
        </p>

        {/* Main Layout */}
        <div className="grid lg:grid-cols-3 gap-10 items-start">
          {/* 🎥 Main Featured Video */}
          <div className="lg:col-span-2 bg-white rounded-2xl overflow-hidden shadow-lg">
            <div className="relative w-full h-[400px]">
              <video
                key={activeVideo.video}
                src={activeVideo.video}
                controls
                autoPlay
                className="w-full h-full object-cover"
              />
            </div>

            {/* Info */}
            <div className="p-6">
              <h4 className="text-xl font-semibold text-black">
                {activeVideo.name}
              </h4>
              <p className="text-blue-600 text-sm uppercase tracking-wider mt-1">
                {activeVideo.company}
              </p>
            </div>
          </div>

          {/* 🎞️ Side Video List */}
          <div className="flex lg:flex-col gap-4 overflow-x-auto lg:overflow-visible">
            {videoReviews.map((item) => (
              <div
                key={item.id}
                onClick={() => setActiveVideo(item)}
                className={`cursor-pointer flex items-center gap-4 p-3 rounded-xl border transition ${
                  activeVideo.id === item.id
                    ? "bg-white border-blue-600 shadow-md"
                    : "bg-white/70 border-gray-200 hover:border-blue-400"
                }`}>
                {/* Thumbnail Preview */}
                <video
                  src={item.video}
                  muted
                  className="w-20 h-14 object-cover rounded-md"
                />

                <div>
                  <h5 className="text-sm font-semibold text-black">
                    {item.name}
                  </h5>
                  <p className="text-xs text-gray-500">{item.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoReviews;
