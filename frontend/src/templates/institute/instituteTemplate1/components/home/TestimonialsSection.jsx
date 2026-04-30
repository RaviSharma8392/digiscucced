import { Quote } from "lucide-react";

export default function TestimonialsSection() {
  const displayTestimonials = [
    {
      name: "Parth Mandar Vartak",
      rank: "AIR 4",
      exam: "JEE Advanced 2025",
      review: "Hi I'm Parth Mandar Vartak and I secured AIR 4 in JEE Advanced 2025. It still feels surreal. Narayana's structured approach, regular mentoring and exam strategy helped me stay consistent. The faculty not only taught concepts but also helped me believe in myself. I'm truly grateful for the environment that supported my journey.",
      avatar: "https://via.placeholder.com/150/083262/FFFFFF?text=P" // Using placeholder as image is dynamic
    },
    {
      name: "Sahil Deo",
      rank: "AIR 7",
      exam: "JEE Advanced 2025",
      review: "Hello, myself Sahil Deo, I secured AIR 7 in JEE Advanced 2025. This achievement have been possible with Narayana's constant support. Mock tests to doubt-clearing sessions every step was guided with care. The competitive and encouraging atmosphere kept me motivated.",
      avatar: "https://via.placeholder.com/150/083262/FFFFFF?text=S"
    },
    {
      name: "Vadlamudi Lokesh",
      rank: "AIR 10",
      exam: "JEE Advanced 2025",
      review: "Hello, I'm Lokesh and I have achieved AIR 10 in JEE Advanced 2025. It's been a proud and unforgettable moment for me and my family. Narayana's disciplined environment, approachable faculty and constant encouragement made a real difference in my preparation.",
      avatar: "https://via.placeholder.com/150/083262/FFFFFF?text=V"
    }
  ];

  return (
    <section className="py-20" style={{ backgroundColor: "#f9f9f9" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-[44px] uppercase text-[#333333]" style={{ fontFamily: "Oswald, sans-serif" }}>
            TESTIMONIALS
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {displayTestimonials.map((t, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-[15px] pt-10 px-8 pb-8 relative shadow-lg relative overflow-hidden"
              style={{ boxShadow: "0 15px 30px -10px rgba(0, 0, 0, 0.05)" }}
            >
              {/* Background faint quote */}
              <div className="absolute top-16 left-6 opacity-5 z-0">
                <Quote size={100} fill="currentColor" className="text-[#f26522]" />
              </div>

              <div className="flex items-start gap-5 mb-6 relative z-10">
                <div className="shrink-0">
                  <div className="w-[90px] h-[90px] rounded-full p-1 border border-gray-200" style={{ backgroundColor: "white", marginTop: "-60px" }}>
                    <img 
                      src={t.avatar} 
                      alt={t.name} 
                      className="w-full h-full rounded-full object-cover border-2 border-white bg-[#0A3370]"
                    />
                  </div>
                </div>
                <div className="pt-2">
                  <h3 className="text-[32px] leading-none mb-1 text-[#f26522] uppercase tracking-tighter" style={{ fontFamily: "Oswald, sans-serif" }}>
                    {t.rank}
                  </h3>
                  <p className="text-[#333] text-[13px] font-sans font-medium">
                    {t.exam}
                  </p>
                </div>
              </div>
              
              <div className="relative z-10">
                <h4 className="text-[20px] font-bold text-[#333333] mb-3 font-sans font-serif">{t.name}</h4>
                <p className="text-gray-700 leading-relaxed text-[13px] font-sans">
                  {t.review}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Faux Carousel Indicators */}
        <div className="flex justify-center items-center gap-2 mt-12">
          <button className="w-2.5 h-2.5 rounded-full bg-gray-600 transition-all"></button>
          <button className="w-2.5 h-2.5 rounded-full bg-gray-300 transition-all"></button>
        </div>
      </div>
    </section>
  );
}
